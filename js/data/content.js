/**
 * content.js — the single source of truth for the site's editable copy.
 *
 * Everything Eva may want to reword lives here, separated from the
 * rendering and behaviour code. Edit text, add an experience, or add a
 * new service by changing this file only — the UI rebuilds itself.
 *
 * Each service has:
 *   id        → stable key, used to open its modal
 *   index     → "01" / "02" ... display numeral
 *   title     → card + modal heading
 *   tagline   → short line shown on the card
 *   icon      → key into the icons module
 *   intro     → personal, first-person note (shown italic in modal)
 *   experience→ list of { role, org, date, desc }
 *   skills    → list of short strings (rendered as chips)
 */

export const services = [
  {
    id: "clases",
    index: "01",
    title: "Clases",
    icon: "chat",
    tagline:
      "Español e italiano, con la lengua y su cultura siempre de la mano.",
    intro:
      "Compartir no solo mi conocimiento lingüístico y literario, sino también mi pasión por los idiomas y sus culturas, siempre ha sido mi motor.",
    experience: [
      {
        role: "Profesora de español online",
        org: "MANU Language Factory",
        date: "Enero 2026 – actualidad",
        desc:
          "Clases de español en línea a estudiantes eslovenos y extranjeros, con explicaciones en español, esloveno e inglés. Alumnado de distintas edades (12–55 años), adaptando el ritmo y los materiales a cada persona.",
      },
    ],
    skills: [
      "Enseñanza personalizada",
      "Seguimiento a distancia",
      "Español · Italiano",
      "Recursos y programas didácticos",
      "Explicaciones en 3 idiomas",
    ],
  },
  {
    id: "correccion",
    index: "02",
    title: "Corrección",
    icon: "pen",
    tagline:
      "Ortografía, gramática y estilo: cuidar el texto es un oficio artesanal.",
    intro:
      "La pasión literaria y el trabajo con los textos son, para mí, un menester manual: cada texto se cuida a mano, palabra a palabra.",
    experience: [
      {
        role: "Correctora",
        org: "Editorial de la Universidad de Sevilla",
        date: "Sep 2024 – Dic 2024",
        desc:
          "Corrección de libros académicos y textos especializados en español (ortografía, gramática y estilo). Edición de libros, redacción de sinopsis y biografías de autores, revisión y edición de imágenes con Adobe Photoshop y Camera Raw, y coordinación con autores dentro del proceso editorial.",
      },
      {
        role: "Redactora y correctora",
        org: "Revista FIF · Capture Life (ed. 3)",
        date: "Abr 2025 – Oct 2025 · voluntariado",
        desc:
          "Redacción de artículos y corrección de estilo, gramática y ortotipografía. Participación activa en el proceso editorial de la revista, con especial atención a la calidad lingüística de los textos en español.",
      },
    ],
    skills: [
      "Ortografía y gramática",
      "Estilo y ortotipografía",
      "Edición de libros",
      "Proceso editorial",
      "Adobe Photoshop · Camera Raw",
    ],
  },
  {
    id: "traduccion",
    index: "03",
    title: "Traducción",
    icon: "globe",
    tagline:
      "Español, italiano, esloveno e inglés: trasladar palabras y también sentimientos.",
    intro:
      "Soy una persona creativa en todos los aspectos —en mi tiempo libre me dedico a la música, el baile y el canto—, y por eso la traducción me es tan afín. Traducir no es solo pasar palabras u oraciones: es trasladar los mensajes, los sentimientos y los matices que cambian de un idioma a otro.",
    experience: [
      {
        role: "Traducción e interpretación",
        org: "Escuela de idiomas Carlos V · Sevilla",
        date: "Feb 2024 – Jul 2024",
        desc:
          "Traducción e interpretación directa entre español e inglés, y entre español e italiano. Comunicación profesional con clientes, colaboradores y grupos internacionales; apoyo lingüístico en contextos administrativos, formativos y turísticos, y mediación intercultural con acompañamiento de grupos extranjeros.",
      },
    ],
    skills: [
      "Español C2",
      "Italiano C1",
      "Esloveno (nativo)",
      "Inglés B2",
      "Mediación intercultural",
      "Interpretación directa",
    ],
  },
];

export const projects = [
  {
    kicker: "Instagram · literatura & lingüística",
    title: "Café con letras",
    desc:
      "Mi proyecto personal donde comparto literatura, lengua y el placer de leer despacio: reseñas, hallazgos lingüísticos y una comunidad que ama las palabras.",
    tag: "En marcha",
    href: "https://www.instagram.com/cafeconletras89.5/",
    cta: "Ver en Instagram",
  },
  {
    kicker: "Proyecto en preparación",
    title: "Biblioteca virtual",
    desc:
      "Un espacio para reunir lecturas, recursos y recomendaciones sobre lengua y literatura española e italiana. Pronto disponible.",
    tag: "Próximamente",
    href: null,
    cta: null,
  },
];

/** Contact + social handles, reused by the footer and contact section. */
export const contact = {
  email: "palciceva9@gmail.com",
  instagramProject: "https://www.instagram.com/cafeconletras89.5/",
  instagramPersonal: "https://www.instagram.com/palciceva/",
  linkedin: "https://www.linkedin.com/in/evapalčič",
};
