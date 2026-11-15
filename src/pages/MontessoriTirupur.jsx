import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImg from '../assets/campus/divyataa-school-building-side-view-classroom-wing.webp';
import casaImg from '../assets/montessori-casa-one-on-one-lesson.jpg';
import elementaryImg from '../assets/montessori-guide-circle-time.jpg';
import globeImg from '../assets/children-exploring-montessori-globe.jpg';
import silambamImg from '../assets/silambam-practice-school-courtyard.webp';

// Landing page for "Montessori school / preschool in Tirupur" searches.
// Plain markup (no scroll animations) so it renders and paints fast.

const DIFFERENCES = [
  {
    title: 'Child-led, not teacher-led',
    text: 'Children choose their own work within clear limits, then concentrate, finish and put it back. The habit of self-direction is built every single day.',
  },
  {
    title: 'A prepared environment',
    text: 'Low shelves, authentic Montessori materials, one place for everything. The classroom is designed so a child can reach, use and return every material independently.',
  },
  {
    title: 'Three uninterrupted hours of work',
    text: 'No bells breaking up the morning. Children get three hours to go deep into their chosen work, which is how real concentration grows.',
  },
  {
    title: 'Mixed-age classrooms',
    text: 'Younger children learn by watching older ones; older children consolidate what they know by helping. Each child moves at their own pace.',
  },
  {
    title: 'Trained Montessori guides',
    text: 'Our educators observe before they step in, give a lesson at the right moment, and then step back so the child can do the work.',
  },
  {
    title: 'No rote learning, no ranks',
    text: 'Understanding comes through hands-on materials and repetition the child chooses, not drills. Children are not ranked or compared with each other.',
  },
];

const CASA_AREAS = [
  'Practical life: pouring, folding, buttoning, cutting',
  'Sensorial: the pink tower, colour tablets, sound cylinders',
  'Language: sandpaper letters and the moveable alphabet',
  'Mathematics: golden beads, bead chains and the stamp game',
  'Cultural studies: first maps, plants, animals and stories of the earth',
  'Grace and courtesy, practised through the day',
];

const FAQS = [
  {
    q: 'Is Divyataa a preschool or a school?',
    a: 'Both. Divyataa is a pure Montessori school in Tirupur for children from KG to Grade 6: a Montessori preschool (Casa) for ages 3 to 5, Lower Elementary for Grades 1 to 3 and Upper Elementary for Grades 4 to 6.',
  },
  {
    q: 'From what age can my child join?',
    a: 'Children can join the Montessori Casa (KG) programme from age 3. Older children join Lower or Upper Elementary according to their grade.',
  },
  {
    q: 'Is Divyataa a recognised school?',
    a: 'Yes. Divyataa International School is recognised by the Directorate of Private Schools, School Education Department, Government of Tamil Nadu. It was established in 2021 and is run by the SMR Pavalammal Educational Trust.',
  },
  {
    q: 'Where in Tirupur is Divyataa?',
    a: 'At #76/6, Angeripalayam Main Road, Tirupur 641 603, Tamil Nadu. The school is open Monday to Saturday, 9:00 am to 5:00 pm.',
  },
  {
    q: 'How do I see the school before applying?',
    a: 'Send an enquiry on our Contact page or call or WhatsApp +91 97511 12300 and we will schedule a visit, ideally on a working morning so you can see the children at work. Registration is completed at the school.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const MontessoriTirupur = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-purple-100">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-50 pb-20 px-6 overflow-hidden">
        <img
          fetchPriority="high"
          src={heroImg}
          alt="The two-storey Divyataa International School building in Tirupur, with its classroom wing and garden path"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6">
            KG to Grade 6 · Tirupur
          </p>
          <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-6">
            Montessori School &amp; Preschool in Tirupur
          </h1>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed">
            Divyataa International School is a pure Montessori school on Angeripalayam Main Road, Tirupur,
            for children from age 3 (KG) to Grade 6.
          </p>
        </div>
      </section>

      {/* Answer-first summary */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            Divyataa follows the Montessori method in its pure form, not as a label. Children learn in calm,
            prepared classrooms with authentic Montessori materials and trained Montessori guides, in mixed-age
            groups, with three uninterrupted hours of self-directed work every morning. There is no rote
            learning and no rank-based assessment.
          </p>
          <p>
            The school was established in 2021 by the SMR Pavalammal Educational Trust and is recognised by the
            Directorate of Private Schools, Government of Tamil Nadu. It is open Monday to Saturday,
            9:00 am to 5:00 pm.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7 py-3.5 font-bold text-white hover:bg-purple-700 transition-colors"
            >
              Book a campus visit <ArrowRight size={18} />
            </Link>
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-2 rounded-full border-2 border-purple-200 px-7 py-3.5 font-bold text-purple-700 hover:bg-purple-50 transition-colors"
            >
              See the full curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Preschool */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-purple-700 font-bold uppercase tracking-widest text-sm mb-3">Ages 3 to 5</p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Montessori preschool in Tirupur (Casa)
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our KG environment, called Casa, is built around the young child's natural drives: to move, to touch,
              to repeat and to master. Children do not sit and listen; they work. Each morning a child chooses an
              activity, carries it to their workspace, completes it and returns it, building the habit of beginning,
              concentrating, finishing and caring for what belongs to everyone.
            </p>
            <ul className="space-y-2 text-slate-700">
              {CASA_AREAS.map((area) => (
                <li key={area} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            loading="lazy"
            decoding="async"
            src={casaImg}
            alt="A Montessori guide giving a one-on-one lesson to a child in the Casa preschool classroom"
            className="w-full rounded-[2rem] shadow-xl object-cover aspect-[4/3]"
          />
        </div>
      </section>

      {/* Primary school */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img
            loading="lazy"
            decoding="async"
            src={elementaryImg}
            alt="Elementary children in a circle time discussion with their Montessori guide"
            className="w-full rounded-[2rem] shadow-xl object-cover aspect-[4/3] order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <p className="text-purple-700 font-bold uppercase tracking-widest text-sm mb-3">Grades 1 to 6</p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Montessori primary school: Lower and Upper Elementary
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Lower Elementary (Grades 1 to 3)</strong> and <strong>Upper Elementary (Grades 4 to 6)</strong>{' '}
              continue the Montessori approach as children's curiosity turns to the big questions: how the universe
              began, how life developed, how people learned to write and count.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Children work in mixed-age groups at their own pace, moving from hands-on materials towards abstract
              thinking when they are ready, rather than when a timetable says so.
            </p>
          </div>
        </div>
      </section>

      {/* What makes it pure Montessori */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-4 text-center">
            What makes Divyataa a pure Montessori school
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12">
            Many schools use the word Montessori. These are the things you will see on a morning visit to Divyataa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENCES.map((item) => (
              <div key={item.title} className="bg-white rounded-[1.5rem] p-7 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the classroom */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Beyond the classroom</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Children practise karate, silambam (the traditional Tamil stick art) and yoga, tend the school garden,
              go on field trips, and celebrate festivals like Pongal and Onam together. Every year the whole school
              comes together on stage for Divyotsav, our annual day.
            </p>
            <Link to="/gallery" className="inline-flex items-center gap-2 font-bold text-purple-700 hover:underline">
              See life at Divyataa in the gallery <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              loading="lazy"
              decoding="async"
              src={silambamImg}
              alt="Children practising silambam in the school courtyard"
              className="w-full rounded-[1.5rem] object-cover aspect-square"
            />
            <img
              loading="lazy"
              decoding="async"
              src={globeImg}
              alt="Two children exploring continents on a Montessori globe"
              className="w-full rounded-[1.5rem] object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Location and visit */}
      <section className="py-16 px-6 bg-purple-50 border-y border-purple-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-8 text-center">
            Visit our Montessori school in Tirupur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex gap-3">
              <MapPin className="text-purple-700 shrink-0" size={22} />
              <p className="text-slate-800">#76/6, Angeripalayam Main Road, Tirupur 641 603, Tamil Nadu</p>
            </div>
            <div className="flex gap-3">
              <Clock className="text-purple-700 shrink-0" size={22} />
              <p className="text-slate-800">Monday to Saturday, 9:00 am to 5:00 pm</p>
            </div>
            <div className="flex gap-3">
              <Phone className="text-purple-700 shrink-0" size={22} />
              <p className="text-slate-800">
                <a href="tel:+919751112300" className="hover:underline">+91 97511 12300</a> (call or WhatsApp)
              </p>
            </div>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              ['Enquire', 'Use the enquiry form or call or WhatsApp us.'],
              ['Visit', 'Come on a working morning and watch the children at work.'],
              ['Register', 'Complete registration at the school during your visit.'],
            ].map(([title, text], i) => (
              <li key={title} className="bg-white rounded-2xl p-6 border border-purple-100">
                <span className="block text-purple-700 font-bold mb-1">
                  {i + 1}. {title}
                </span>
                <span className="text-slate-700">{text}</span>
              </li>
            ))}
          </ol>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 font-bold text-white hover:bg-purple-700 transition-colors"
            >
              Send an enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 text-center mb-10">
            Questions parents ask
          </h2>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 open:shadow-lg open:shadow-slate-200/50 transition-shadow"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="shrink-0 text-2xl leading-none text-purple-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </section>

      <Footer />
    </div>
  );
};

export default MontessoriTirupur;
