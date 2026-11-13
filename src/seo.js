// Per-route <head> data. Used by the prerender script (static HTML) and by
// <Seo /> on the client so titles stay correct during in-app navigation.

export const SITE_URL = 'https://www.divyataa.in';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const ROUTES = {
  '/': {
    title: 'Pure Montessori School in Tirupur | Divyataa International School',
    description:
      'Divyataa is a pure Montessori school in Tirupur for KG to Grade 6. Child-led learning, trained Montessori guides and three hours of deep work every morning.',
    ogTitle: 'Divyataa International School · Pure Montessori in Tirupur',
    ogDescription:
      "Where every child's innate love of learning is protected, nurtured, and set free.",
  },
  '/about-us': {
    title: 'About Us | Divyataa International School, Tirupur',
    description:
      'Founded by Gi. Sudakar and Kavitha Sudakar under the SMR Pavalammal Educational Trust, Divyataa carries a century-long family legacy of giving through education.',
    ogTitle: 'Our Story · Divyataa International School',
    ogDescription:
      'What would education look like if it were truly designed for the child? The founders and the legacy behind Divyataa.',
  },
  '/curriculum': {
    title: 'Montessori Curriculum, KG to Grade 6 | Divyataa Tirupur',
    description:
      'Casa (ages 3 to 5), Lower Elementary (Grades 1 to 3) and Upper Elementary (Grades 4 to 6). Mixed-age classrooms, freedom within structure, no rote learning.',
    ogTitle: 'A Journey, Not a Conveyor Belt · Divyataa Curriculum',
    ogDescription: 'How pure Montessori works at Divyataa, from Casa to Upper Elementary.',
  },
  '/campus': {
    title: 'Montessori School Campus in Tirupur | Divyataa',
    description:
      'See where children learn at Divyataa: calm Montessori classrooms, open outdoor spaces and our building on Angeripalayam Main Road, Tirupur. Book a morning visit.',
    ogTitle: 'A Place Made for Children · Divyataa Campus',
    ogDescription: 'Every element of the environment is a decision made in service of the child.',
  },
  '/gallery': {
    title: 'Gallery: Life at Divyataa | Montessori School Tirupur',
    description:
      'Classroom work, annual day, sports, yoga and karate. See what learning looks like when children are trusted, respected and given the right conditions.',
    ogTitle: 'Life at Divyataa · Gallery',
    ogDescription: 'What learning looks like when children are trusted.',
  },
  '/contact': {
    title: 'Admissions & Contact | Divyataa International School Tirupur',
    description:
      'Book a morning visit to watch the children at work. Call +91 97511 12300, WhatsApp us, or send an enquiry for KG, Lower or Upper Elementary.',
    ogTitle: "We'd Love to Meet Your Family · Divyataa",
    ogDescription: 'The first step is a conversation, or better, a morning visit.',
  },
};

ROUTES['/montessori-school-tirupur'] = {
  title: 'Montessori School & Preschool in Tirupur | Divyataa',
  description:
    'Divyataa is a pure Montessori school and preschool in Tirupur for ages 3 to Grade 6: prepared classrooms, trained guides, mixed ages. Book a campus visit.',
  ogTitle: 'Montessori School & Preschool in Tirupur · Divyataa',
  ogDescription: 'A pure Montessori school on Angeripalayam Main Road, Tirupur, for children from KG to Grade 6.',
};

export const NOT_FOUND = {
  title: 'Page not found | Divyataa International School',
  description: 'This page does not exist. Visit the Divyataa International School homepage.',
  noindex: true,
};

export function getSeo(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const route = ROUTES[path];
  return route ? { ...route, path } : { ...NOT_FOUND, path };
}
