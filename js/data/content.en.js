/**
 * content.en.js — all English copy (UI strings + section content).
 * Mirror of content.es.js. "Café con letras" stays in Spanish (it is
 * the project's original name).
 */

export default {
  ui: {
    docTitle: "Eva Palčič · Hispanist and Italianist",
    toggle: "ES", // label on the language switch while English is active
    skip: "Skip to content",
    nav: {
      services: "Services",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Hispanist · Italianist",
      titleHtml:
        'Between <span class="accent">languages</span>,<br /><span class="accent">letters</span> and <span class="accent">cultures</span>',
      rolesHtml:
        "<span>Classes</span><span>Proofreading</span><span>Translation</span>",
      introHtml:
        "<p>I'm Eva, a Hispanist and Italianist passionate about languages, literature and the cultures that give them life. My work springs from one conviction: learning a language is not only about knowing its words and grammar rules, but also about drawing closer to its history, its accents, its people and its way of understanding the world.</p><p>From that outlook, I teach, proofread, write and translate with care, discipline and creativity.</p>",
      cta1: "Discover my services",
      cta2: "Let's talk",
    },
    services: {
      eyebrow: "What I offer",
      heading: "Three ways to work with me",
      more: "See more",
      experienceLabel: "Experience",
      skillsLabel: "Skills",
      closeLabel: "Close",
    },
    projects: {
      eyebrow: "Beyond work",
      heading: "Personal projects",
    },
    education: {
      eyebrow: "Education",
      heading: "Education",
      coursesLabel: "Further training",
    },
    gallery: {
      title: "Living the culture is understanding the language",
    },
    contact: {
      eyebrow: "Contact",
      title: "Shall we grab a coffee?",
      text: "Tell me which language you dream in, which text you'd like to polish, or where you want to travel.",
      cta1: "Send me an email",
      cta2: "Follow me on Café con letras",
    },
    footer: {
      email: "Email",
      instagram: "Instagram · Café con letras",
      linkedin: "LinkedIn",
    },
  },

  services: [
    {
      id: "clases",
      title: "Classes",
      modalTitle: "Spanish and Italian classes",
      icon: "chat",
      tagline:
        "Spanish and Italian, with the language and its culture always hand in hand.",
      intro: [
        "Sharing my linguistic and literary knowledge —and passing on, even just a little, the passion I feel for languages and their cultures— has always been one of my great drives.",
        "In my classes I like to create a warm, clear and motivating space, where learning Spanish or Italian is not only about studying words and grammar rules, but also about discovering a culture, a way of communicating and a different way of looking at the world.",
      ],
      experience: [
        {
          role: "Online Spanish teacher",
          org: "MANU Language Factory",
          date: "Jan 2026 – present",
          desc:
            "Online Spanish classes for Slovenian and international students, with explanations in Spanish, Slovenian and English. I work with students of different ages and backgrounds, adapting the pace, materials and teaching resources to each person's needs.",
        },
      ],
      skills: [
        "Personalised teaching",
        "Online classes",
        "Spanish · Italian",
        "Explanations in several languages",
        "Teaching materials",
        "Adapted to levels and ages",
      ],
    },
    {
      id: "correccion",
      title: "Proofreading",
      modalTitle: "Proofreading and writing",
      icon: "pen",
      tagline:
        "Spelling, grammar and style: caring for a text is an artisan's craft.",
      intro: [
        "My passion for languages and literature has led me naturally to working with texts. Proofreading, writing and editing are, for me, a form of care: a meticulous craft in which every word, every nuance and every stylistic choice matters. Whether it's a book, a magazine, a thesis, an article or any other written project, my goal is for the reader to receive a high-quality product.",
      ],
      experience: [
        {
          role: "Proofreader and editorial assistant",
          org: "University of Seville Press",
          date: "Sep 2024 – Dec 2024",
          desc:
            "Proofreading academic books, taking care not only of spelling and grammar but also of style, coherence and the small details that make a text read better. Besides proofreading and editing, I took part in writing synopses and author biographies, as well as in communicating with them throughout the editorial process. This experience let me see up close the journey a work takes before reaching its readers, and reinforced my understanding of proofreading as a way of caring for the text. I also occasionally helped review and edit images in support of the editorial work.",
        },
        {
          role: "Writer and proofreader",
          org: "FIF Magazine · Capture Life (ed. 3)",
          date: "Apr 2025 – Oct 2025 · volunteer",
          desc:
            "At FIF Magazine *Capture Life* I worked as a writer and proofreader on a publication linked to the Photography Festival (FIF Colombia). My work involved reviewing, proofreading and giving editorial shape to artistic articles about photography and the participating photographers, taking care of style, grammar, typographic conventions and the clarity of the texts.",
        },
      ],
      skills: [
        "Spelling and grammar",
        "Style and typographic conventions",
        "Book editing",
        "Synopses and biographies",
        "Editorial process",
        "Adobe Photoshop · Camera Raw",
      ],
    },
    {
      id: "traduccion",
      title: "Translation",
      icon: "globe",
      tagline:
        "Spanish, Italian, Slovenian and English: carrying across words, messages and feelings.",
      intro: [
        "Translation is very close to the way I understand languages: it's not just about moving words from one language to another, but about carrying across meanings, nuances, emotions and ways of seeing the world.",
        "I consider myself a creative person, also outside my professional life: music, dance and singing are part of my life and of how I relate to expression. That's why translation feels so natural to me: it calls for sensitivity, listening and precision so that a message keeps its intention, its tone and its strength in another language.",
      ],
      experience: [
        {
          role: "Translation and interpreting",
          org: "Carlos V Language School · Seville",
          date: "Feb 2024 – Jul 2024",
          desc: [
            "Direct translation and interpreting between Spanish–English and Spanish–Italian. My work was closely tied to professional communication with students, collaborators and international groups, as well as support in administrative, educational and tourism settings.",
            "This experience let me work with language in real communication situations, where translating correctly is not enough: you also have to adapt the message, understand the context and help people from different cultures meet.",
          ],
        },
      ],
      skills: [
        "Translation ES/IT/SL/EN",
        "Direct interpreting",
        "Intercultural mediation",
        "Professional communication",
      ],
    },
  ],

  projects: [
    {
      kicker: "Instagram · literature & linguistics",
      title: "Café con letras",
      icon: "mug",
      desc:
        "Café con Letras is a space where languages, literature, art and coffee meet. There I share linguistic curiosities, grammar rules, reflections, reviews and recommendations.",
      tag: "Live",
      href: "https://www.instagram.com/cafeconletras89.5/",
      cta: "View on Instagram",
    },
    {
      kicker: "Project in the works",
      title: "Virtual library",
      icon: "book",
      desc:
        "A personal online library to log your reading, write reviews, follow your own reading journey and discover which languages, authors and worlds are on your shelves.",
      tag: "Coming soon",
      href: null,
      cta: null,
    },
  ],

  education: [
    {
      degree: "Master's in Hispanic Studies and Italian Language and Literature",
      org: "Faculty of Arts · University of Ljubljana",
      date: "2022 – 2025",
      location: "Ljubljana, Slovenia",
    },
    {
      degree: "Bachelor's in Spanish and Italian Language and Literature",
      org: "Faculty of Arts · University of Ljubljana",
      date: "2018 – 2022",
      location: "Ljubljana, Slovenia",
    },
    {
      degree: "Technician in Tourism and Gastronomy",
      org: "Secondary School of Gastronomy and Tourism, Ljubljana",
      date: "2014 – 2018",
      location: "Ljubljana, Slovenia",
    },
  ],

  courses: [
    {
      title:
        "Proofreading Club — Sentence-level proofreading criteria and technological tools for advanced proofreading",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Oct 2025",
    },
    {
      title:
        "Proofreading Club — Review process across different levels and adaptation to print and digital formats",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Sep 2025",
    },
    {
      title:
        "Proofreading Club — Training AI to proofread texts and setting up the editing environment",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Aug 2025",
    },
    {
      title: "Professional proofreading: passion, precision and projection",
      org: "International Text Proofreading Conference (CAL)",
      date: "Feb 2025",
    },
    {
      title:
        "Keys and strategies for publishing manuscripts with university presses",
      org: "University of Seville Press",
      date: "Dec 2024",
    },
  ],

  // One caption per photo, in carousel order (gallery-01 … gallery-43).
  galleryCaptions: [
    "Seville, Spain",
    "Galápagos Islands, Ecuador",
    "Baños, Ecuador",
    "Palma de Mallorca, Mallorca",
    "Quito, Ecuador",
    "Ibarra, Ecuador",
    "Cádiz, Spain",
    "Seville, Spain",
    "Galápagos Islands, Ecuador",
    "Havana, Cuba",
    "Quito, Ecuador",
    "Cotacachi, Ecuador",
    "Galápagos Islands, Ecuador",
    "Quito, Ecuador",
    "Seville, Spain",
    "Seville, Spain",
    "Andratx, Mallorca",
    "Mitad del Mundo, Ecuador",
    "Triana, Spain",
    "Seville, Spain",
    "Quito, Ecuador",
    "Tarifa, Spain",
    "Guanabo, Cuba",
    "Galápagos Islands, Ecuador",
    "Seville, Spain",
    "Granada, Spain",
    "Havana, Cuba",
    "Cotopaxi, Ecuador",
    "Quito, Ecuador",
    "Pollença, Mallorca",
    "Andratx, Mallorca",
    "Quito, Ecuador",
    "Cordoba, Spain",
    "Otavalo, Ecuador",
    "Seville, Spain",
    "Ronda, Spain",
    "Seville, Spain",
    "Seville, Spain",
    "Quito, Ecuador",
    "Seville, Spain",
    "Galápagos Islands, Ecuador",
    "Setenil de las Bodegas, Spain",
    "Setenil de las Bodegas, Spain",
  ],
};
