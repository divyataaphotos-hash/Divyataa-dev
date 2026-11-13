import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../Website/Gallery Page/Field trip/road-safety-awareness-session-students.jpg';
import LazyMap from '../components/LazyMap';

const CHILD_OPTIONS = ['Starting KG (ages 3–5)', 'Grade 1–3', 'Grade 4–6', 'Not sure yet'];
const WANT_OPTIONS = ['Visit the campus', 'A call back', 'Fee details', 'Just a question'];
const VISIT_OPTIONS = ['This week', 'Next week', 'A Saturday', 'Not sure yet'];
const SOURCE_OPTIONS = ['Friend / parent', 'Google', 'Instagram', 'ChatGPT / AI', 'Drove past', 'Other'];
const WHATSAPP_LINK = `https://wa.me/919751112300?text=${encodeURIComponent(
  "Hi, I'm interested in admission for my child at Divyataa International School."
)}`;

// Indian mobile numbers: 10 digits, optionally with a 0 or 91 prefix.
const isValidPhone = (value) => {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 12;
};

// One question per step: tapping an answer moves the form on by itself.
const StepChoices = ({ question, options, value, onPick }) => (
  <fieldset>
    <legend className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6">{question}</legend>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => onPick(option)}
            className={`text-left px-5 py-4 rounded-2xl border-2 text-base md:text-lg font-medium transition-colors ${
              selected
                ? 'bg-purple-600 border-purple-600 text-white shadow-md shadow-purple-200'
                : 'bg-white border-slate-200 text-slate-800 hover:border-purple-300 hover:bg-purple-50'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </fieldset>
);

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [choices, setChoices] = useState({ child_stage: '', request: '', visit_when: '', heard_from: '' });
  const [showNote, setShowNote] = useState(false);
  const [formError, setFormError] = useState('');
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const nameRef = useRef(null);

  // The questions, one per step. The visit step only appears for campus visits.
  const steps = [
    { key: 'child_stage', question: 'Your child is…', options: CHILD_OPTIONS },
    { key: 'request', question: 'What would you like?', options: WANT_OPTIONS },
    ...(choices.request === 'Visit the campus'
      ? [{ key: 'visit_when', question: 'When could you visit?', options: VISIT_OPTIONS }]
      : []),
    { key: 'heard_from', question: 'How did you hear about us?', options: SOURCE_OPTIONS },
    { key: 'contact' },
  ];
  const at = Math.min(step, steps.length - 1);
  const current = steps[at];

  const goBack = () => {
    setDir(-1);
    setStep(Math.max(0, at - 1));
    setFormError('');
  };

  // Record the answer, then move on after a short beat so the choice is seen.
  const pick = (field, value) => {
    setChoices((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'request' && value !== 'Visit the campus' && { visit_when: '' }),
    }));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(() => {
      setDir(1);
      setStep((s) => s + 1);
    }, reduced ? 0 : 280);
  };

  const resetForm = () => {
    setFormStatus('idle');
    setStep(0);
    setShowNote(false);
    setChoices({ child_stage: '', request: '', visit_when: '', heard_from: '' });
  };

  // Put the cursor in the name field once the last step has slid in.
  const focusName = () => {
    if (current.key === 'contact' && nameRef.current) {
      nameRef.current.focus({ preventScroll: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone_number;
    const missing = [
      !form.parent_name.value.trim() && 'your name',
      !isValidPhone(phone.value) && 'a valid WhatsApp number',
    ].filter(Boolean);
    if (missing.length) {
      setFormError(`Please add ${missing.join(' and ')}.`);
      return;
    }
    setFormStatus('sending');

    const data = Object.fromEntries(new FormData(form).entries());
    const enquiry = {
      parent_name: data.parent_name,
      whatsapp_number: data.phone_number,
      child_class: choices.child_stage,
      would_like: choices.request,
      ...(choices.request === 'Visit the campus' && { visit_when: choices.visit_when || 'Not specified' }),
      heard_from: choices.heard_from,
      ...(data.message && { message: data.message }),
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/divyataa.info@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...enquiry,
          _captcha: 'false',
          _template: 'table',
          _subject: `New enquiry: ${enquiry.parent_name} – ${enquiry.child_class} – ${enquiry.would_like}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or call us directly.");
      setFormStatus('idle');
    }
  };

  const admissionSteps = [
    {
      title: 'Enquire',
      text: 'Fill in the enquiry form on this page, or call or WhatsApp us on +91 97511 12300.',
    },
    {
      title: 'Visit the campus',
      text: 'We will schedule a campus visit, ideally on a working morning, so you can see the children at work.',
    },
    {
      title: 'Register on site',
      text: 'If Divyataa feels right for your family, you complete the registration at the school during your visit.',
    },
  ];

  const faqs = [
    {
      q: 'What ages and grades does Divyataa take?',
      a: 'Divyataa takes children from KG to Grade 6: KG / Casa for ages 3 to 5, Lower Elementary for Grades 1 to 3, and Upper Elementary for Grades 4 to 6.',
    },
    {
      q: 'Is Divyataa a pure Montessori school?',
      a: 'Yes. Divyataa follows the Montessori method in its pure form: prepared classrooms with authentic Montessori materials, mixed-age classes, trained Montessori guides and three uninterrupted hours of self-directed work every morning, with no rote learning and no rank-based assessment.',
    },
    {
      q: 'Which curriculum does Divyataa follow?',
      a: 'Divyataa follows the Montessori curriculum from KG through Grade 6.',
    },
    {
      q: 'When was Divyataa established?',
      a: 'Divyataa was established in 2021 by the SMR Pavalammal Educational Trust, founded by Chairman Gi. Sudakar and Principal Kavitha Sudakar.',
    },
    {
      q: 'How do I apply for admission?',
      a: 'Fill in the enquiry form on this page or call or WhatsApp +91 97511 12300. We will schedule a campus visit, and registration is completed on site at the school.',
    },
    {
      q: 'Can we visit the school before applying?',
      a: 'Yes, and we encourage it. The best way to understand Divyataa is to visit on a working morning and watch the children at work.',
    },
    {
      q: 'What are the school hours and where is the school?',
      a: 'The school is open Monday to Saturday, 9:00 am to 5:00 pm, at #76/6, Angeripalayam Main Road, Tirupur 641 603, Tamil Nadu.',
    },
  ];

  // FAQ structured data for search engines and AI assistants
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  const contactDetails = [
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: 'Phone and WhatsApp',
      content: '+91 97511 12300   ·   +91 84284 12300',
    },
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: 'Email',
      content: 'divyataa.info@gmail.com',
    },
    {
      icon: <Clock className="text-purple-600" size={24} />,
      title: 'School hours',
      content: 'Monday to Saturday   ·   9:00 am to 5:00 pm',
    },
    {
      icon: <MapPin className="text-purple-600" size={24} />,
      title: 'Address',
      content: '#76/6, Angeripalayam Main Road, Tirupur 641 603, Tamil Nadu, India',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-purple-100">
      <Navbar />

      {/* ─── Hero Section ─── */}
<section className="relative pt-50 pb-16 px-6 overflow-hidden bg-slate-50 border-b border-slate-100">
       
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        {/* Background Overlay Image */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img fetchPriority="high"
            src={Image}
            alt="Divyataa students at a road safety awareness session"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-2xl md:text-4xl font-serif text-white mb-8 leading-tight font-bold"
    >
            We'd love to meet your family<br className="hidden md:block" /> 
          </motion.h1>
          <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-normal text-justify md:text-center"
    >
            The first step is always a conversation, or better yet, a morning visit to see the children at work.
          </motion.p>
        </div>
      </section>

      {/* Main Content: Form & Details */}
      <section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">          
          {/* Enquiry Form */}
          <div className="lg:col-span-7 self-start">
  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">             
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="text-green-500" size={40} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Thank you.</h2>
                    <p className="text-lg text-slate-700 leading-relaxed max-w-md mx-auto font-normal text-justify md:text-center">
                      We've received your enquiry and will message you on WhatsApp within two working days. 
                      We look forward to meeting your family.
                    </p>
                    <button 
                      onClick={resetForm}
                      className="text-purple-600 font-bold hover:underline pt-4"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                    <h2 className="text-sm font-bold text-purple-700 uppercase tracking-widest mb-6">Enquiry form</h2>

                    {/* Progress */}
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3 min-h-9">
                      {at > 0 && (
                        <button
                          type="button"
                          onClick={goBack}
                          aria-label="Back"
                          className="-ml-2 p-2 rounded-full text-slate-700 hover:bg-slate-100 hover:text-purple-700 transition-colors"
                        >
                          <ArrowLeft size={18} />
                        </button>
                      )}
                      <span className="font-semibold text-slate-700">Step {at + 1} of {steps.length}</span>
                      <span className="ml-auto">Takes 30 seconds</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden mb-10" aria-hidden="true">
                      <div
                        className="h-full bg-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${((at + 1) / steps.length) * 100}%` }}
                      />
                    </div>

                    <form onSubmit={handleSubmit} noValidate>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={current.key}
                          initial={{ opacity: 0, x: dir * 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: dir * -40 }}
                          transition={{ duration: 0.2 }}
                          onAnimationComplete={focusName}
                        >
                          {current.key !== 'contact' ? (
                            <StepChoices
                              question={current.question}
                              options={current.options}
                              value={choices[current.key]}
                              onPick={(v) => pick(current.key, v)}
                            />
                          ) : (
                            <div className="space-y-8">
                              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Where can we reach you?</h3>
                              <div className="space-y-2">
                                <label htmlFor="parent_name" className="text-sm font-bold text-black uppercase tracking-wider">Your name</label>
                                <input
                                  ref={nameRef}
                                  id="parent_name"
                                  required
                                  name="parent_name"
                                  type="text"
                                  autoComplete="name"
                                  enterKeyHint="next"
                                  placeholder="Parent / guardian name"
                                  className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-purple-500 outline-none transition-all duration-300 placeholder:text-purple-300 text-lg"
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor="phone_number" className="text-sm font-bold text-black uppercase tracking-wider">WhatsApp number</label>
                                <input
                                  id="phone_number"
                                  required
                                  name="phone_number"
                                  type="tel"
                                  inputMode="tel"
                                  autoComplete="tel"
                                  enterKeyHint="send"
                                  placeholder="We'll message you here"
                                  className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-purple-500 outline-none transition-all duration-300 placeholder:text-purple-300 text-lg"
                                />
                              </div>

                              {showNote ? (
                                <div className="space-y-2">
                                  <label htmlFor="message" className="text-sm font-bold text-black uppercase tracking-wider">Note (optional)</label>
                                  <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Any questions or anything you'd like us to know"
                                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-purple-500 outline-none transition-all duration-300 placeholder:text-purple-300 text-lg"
                                  ></textarea>
                                </div>
                              ) : (
                                <button type="button" onClick={() => setShowNote(true)} className="text-sm font-bold text-purple-600 hover:underline">
                                  + Add a note
                                </button>
                              )}

                              {formError && (
                                <div role="alert" className="text-sm font-medium text-red-600">{formError}</div>
                              )}

                              <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full bg-slate-900 hover:bg-purple-600 text-white font-bold py-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                              >
                                {formStatus === 'sending' ? (
                                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                  <>
                                    Send Enquiry
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Quiet way out for parents who'd rather just talk */}
                      <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-x-2 gap-y-1.5 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-2">
                        Rather talk?
                        <a
                          href={WHATSAPP_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-slate-800 hover:text-[#128C7E] transition-colors"
                        >
                          <svg viewBox="0 0 24 24" fill="#25D366" className="w-4 h-4" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          Chat on WhatsApp
                        </a>
                        </span>
                        <span>
                          or call{' '}
                          <a href="tel:+919751112300" className="font-semibold text-slate-800 hover:text-purple-700 transition-colors">
                            +91 97511 12300
                          </a>
                        </span>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Contact Details */}
<div className="lg:col-span-5">
  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col">

    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-10">
      Contact Details
    </h2>

    <div className="space-y-10">
      {contactDetails.map((detail, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="flex gap-6"
        >
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0">
            {detail.icon}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-black uppercase tracking-wider">
                {detail.title}
            </label>

            <p className="text-lg text-slate-800 font-medium whitespace-pre-line leading-relaxed">
              {detail.content}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

       <div className="mt-10 rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 h-[372px] relative">
      <LazyMap
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14884.40120274826!2d77.332928!3d11.128163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9074e70a1b233%3A0x7fcff7033eb25aec!2sDIVYATAA-International%20School!5e0!3m2!1sen!2sin!4v1776306643085!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </div>

  </div>
</div>

{/* CLOSE THE GRID CONTAINER */}
</div>

</section>

      {/* ─── How admissions work ─── */}
      <section id="admissions" className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4">
              Admissions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">How admissions work</h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {admissionSteps.map((step, idx) => (
              <li
                key={step.title}
                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/40 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white font-serif font-bold text-xl flex items-center justify-center mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-700 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 open:shadow-lg open:shadow-slate-200/50 transition-shadow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="shrink-0 text-2xl leading-none text-purple-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

<Footer />
</div>
);
};

export default Contact;