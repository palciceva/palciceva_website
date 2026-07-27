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
    modalTitle: "Clases de español e italiano",
    icon: "chat",
    tagline:
      "Español e italiano, con la lengua y su cultura siempre de la mano.",
    intro: [
      "Compartir mi conocimiento lingüístico y literario —y transmitir, aunque sea un poquito, la pasión que siento por los idiomas y sus culturas— siempre ha sido uno de mis grandes motores.",
      "En mis clases me gusta crear un espacio cercano, claro y motivador, donde aprender español o italiano no sea solo estudiar palabras y reglas gramaticales, sino también descubrir una cultura, una forma de comunicarse y una manera distinta de mirar el mundo.",
    ],
    experience: [
      {
        role: "Profesora de español online",
        org: "MANU Language Factory",
        date: "Enero 2026 – actualidad",
        desc:
          "Clases de español en línea para estudiantes eslovenos y extranjeros, con explicaciones en español, esloveno e inglés. Trabajo con alumnado de distintas edades y perfiles, adaptando el ritmo, los materiales y los recursos didácticos a las necesidades de cada persona.",
      },
    ],
    skills: [
      "Enseñanza personalizada",
      "Clases online",
      "Español · Italiano",
      "Explicaciones en diferentes idiomas",
      "Materiales didácticos",
      "Adaptación a niveles y edades",
    ],
  },
  {
    id: "correccion",
    index: "02",
    title: "Corrección",
    modalTitle: "Corrección y redacción",
    icon: "pen",
    tagline:
      "Ortografía, gramática y estilo: cuidar el texto es un oficio artesanal.",
    intro: [
      "Mi pasión por los idiomas y la literatura me ha llevado de forma natural al trabajo con los textos. Corregir, redactar y editar son, para mí, una forma de cuidado: un oficio minucioso en el que cada palabra, cada matiz y cada decisión de estilo importan. Ya sea un libro, una revista, una tesis, un artículo o cualquier otro proyecto escrito, mi objetivo es que el lector reciba un producto de alta calidad.",
    ],
    experience: [
      {
        role: "Correctora y asistente editorial",
        org: "Editorial de la Universidad de Sevilla",
        date: "Sep 2024 – Dic 2024",
        desc:
          "Corrección de libros académicos cuidando no solo la ortografía y la gramática, sino también el estilo, la coherencia y los pequeños detalles que hacen que un texto se lea mejor. Además de corregir y editar, participé en la redacción de sinopsis y biografías de autores, así como en la comunicación con ellos durante el proceso editorial. Esta experiencia me permitió conocer de cerca el camino que recorre una obra antes de llegar a sus lectores, y reforzó mi manera de entender la corrección como una forma de cuidado del texto. También colaboré puntualmente en la revisión y edición de imágenes como apoyo al trabajo editorial.",
      },
      {
        role: "Redactora y correctora",
        org: "Revista FIF · Capture Life (ed. 3)",
        date: "Abr 2025 – Oct 2025 · voluntariado",
        desc:
          "En FIF Revista *Capture Life* participé como redactora y correctora en una publicación vinculada al Festival de Fotografía (FIF Colombia). Mi trabajo consistió en revisar, corregir y dar forma editorial a artículos artísticos sobre fotografía y sobre los fotógrafos participantes, cuidando el estilo, la gramática, la ortotipografía y la claridad de los textos.",
      },
    ],
    skills: [
      "Ortografía y gramática",
      "Estilo y ortotipografía",
      "Edición de libros",
      "Sinopsis y biografías",
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
    intro: [
      "La traducción está muy cerca de mi manera de entender los idiomas: no se trata solo de pasar palabras de una lengua a otra, sino de trasladar sentidos, matices, emociones y formas de ver el mundo.",
      "Me considero una persona creativa, también fuera del ámbito profesional: la música, el baile y el canto forman parte de mi vida y de mi manera de relacionarme con la expresión. Por eso, la traducción me resulta tan afín: exige sensibilidad, escucha y precisión para que un mensaje conserve su intención, su tono y su fuerza en otra lengua.",
    ],
    experience: [
      {
        role: "Traducción e interpretación",
        org: "Escuela de idiomas Carlos V · Sevilla",
        date: "Feb 2024 – Jul 2024",
        desc: [
          "Traducción e interpretación directa entre español-inglés, y español-italiano. Mi labor estuvo muy vinculada a la comunicación profesional con alumnos, colaboradores y grupos internacionales, así como al apoyo en contextos administrativos, formativos y turísticos.",
          "Esta experiencia me permitió trabajar con la lengua en situaciones reales de comunicación, donde no basta con traducir correctamente: también hay que adaptar el mensaje, entender el contexto y facilitar el encuentro entre personas de distintas culturas.",
        ],
      },
    ],
    skills: [
      "Traducción ES/IT/SL/EN",
      "Interpretación directa",
      "Mediación intercultural",
      "Comunicación profesional",
    ],
  },
];

export const projects = [
  {
    kicker: "Instagram · literatura & lingüística",
    title: "Café con letras",
    icon: "mug",
    desc:
      "Café con Letras es un rincón donde se encuentran los idiomas, la literatura, el arte y el café. Allí comparto curiosidades lingüísticas, reglas gramaticales, reflexiones, reseñas y recomendaciones.",
    tag: "En marcha",
    href: "https://www.instagram.com/cafeconletras89.5/",
    cta: "Ver en Instagram",
  },
  {
    kicker: "Proyecto en preparación",
    title: "Biblioteca virtual",
    icon: "book",
    desc:
      "Una biblioteca personal en línea donde registrar lecturas, escribir reseñas, seguir el propio recorrido lector y descubrir qué idiomas, autores y mundos están en tus estanterías.",
    tag: "Próximamente",
    href: null,
    cta: null,
  },
];

/**
 * Academic background, newest first. Rendered as a timeline.
 * Each entry: { degree, org, date, location }.
 */
export const education = [
  {
    degree: "Máster en Hispanística y Lengua y Literatura de Italiano",
    org: "Facultad de Filosofía y Letras · Universidad de Liubliana",
    date: "2022 – 2025",
    location: "Liubliana, Eslovenia",
  },
  {
    degree: "Grado en Lengua y Literatura de Español e Italiano",
    org: "Facultad de Filosofía y Letras · Universidad de Liubliana",
    date: "2018 – 2022",
    location: "Liubliana, Eslovenia",
  },
  {
    degree: "Técnica en Turismo y Gastronomía",
    org: "Escuela Secundaria de Gastronomía y Turismo de Liubliana",
    date: "2014 – 2018",
    location: "Liubliana, Eslovenia",
  },
];

/**
 * Complementary training / courses. Each entry: { title, org, date }.
 */
export const courses = [
  {
    title:
      "Club de Corrección — Criterios de corrección oracional y herramientas tecnológicas para la corrección avanzada",
    org: "CAL · Correctología y Asesoramiento Lingüístico",
    date: "Oct 2025",
  },
  {
    title:
      "Club de Corrección — Proceso de revisión en distintos niveles y adecuación al formato impreso y digital",
    org: "CAL · Correctología y Asesoramiento Lingüístico",
    date: "Sep 2025",
  },
  {
    title:
      "Club de Corrección — Entrenar a la IA para corregir textos y configuración del entorno de edición",
    org: "CAL · Correctología y Asesoramiento Lingüístico",
    date: "Ago 2025",
  },
  {
    title: "Corrección profesional: pasión, precisión y proyección",
    org: "Jornadas Internacionales de Corrección de Textos (CAL)",
    date: "Feb 2025",
  },
  {
    title:
      "Claves y estrategias para la publicación de manuscritos en editoriales universitarias",
    org: "Editorial Universidad de Sevilla",
    date: "Dic 2024",
  },
];

/**
 * Culture gallery — a horizontal carousel of photos shown between the
 * Education and Contact sections. Files live in assets/images/gallery/
 * as gallery-01.jpg … gallery-NN.jpg (mixed orientations, fixed height).
 * Change GALLERY_COUNT if you add/remove photos.
 */
// One caption per photo, in carousel order (gallery-01 … gallery-43).
const galleryCaptions = [
  "Sevilla, España",                 // 01
  "Islas Galápagos, Ecuador",        // 02
  "Baños, Ecuador",                  // 03
  "Palma de Mallorca, Mallorca",     // 04
  "Quito, Ecuador",                  // 05
  "Ibarra, Ecuador",                 // 06
  "Cádiz, España",                   // 07
  "Sevilla, España",                 // 08
  "Islas Galápagos, Ecuador",        // 09
  "La Habana, Cuba",                 //10
  "Quito, Ecuador",                  // 11
  "Cotacachi, Ecuador",              // 12
  "Islas Galápagos",                 // 13
  "Quito, Ecuador",                  // 14
  "Sevilla, España",                 // 15
  "Sevilla, España",                 // 16
  "Andratx, Mallorca",               // 17
  "Mitad del Mundo, Ecuador",        // 18
  "Triana, España",                  // 19
  "Sevilla, España",                 // 20
  "Quito, Ecuador",                  // 21
  "Tarifa, España",                  // 22
  "Guanabo, Cuba",                   // 23
  "Islas Galápagos, Ecuador",        // 24
  "Sevilla, España",                 // 25
  "Granada, España",                 // 26
  "La Habana, Cuba",                 //27
  "Cotopaxi, Ecuador",               // 28
  "Quito, Ecuador",                  // 29
  "Pollença, Mallorca",              // 30
  "Andratx, Mallorca",               // 31
  "Quito, Ecuador",                  // 32
  "Córdoba, España",                 // 33
  "Otavalo, Ecuador",                // 34
  "Sevilla, España",                 // 35
  "Ronda, España",                   // 36
  "Sevilla, España",                 // 37
  "Sevilla, España",                 // 38
  "Quito, Ecuador",                  // 39
  "Sevilla, España",                 // 40
  "Islas Galápagos, Ecuador",        // 41
  "Setenil de las Bodegas, España",  // 42
  "Setenil de las Bodegas, España",  // 43
];

export const gallery = galleryCaptions.map((caption, i) => ({
  src: `assets/images/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `${caption} — fotografía de Eva Palčič`,
  caption,
}));

/** Contact + social handles, reused by the footer and contact section. */
export const contact = {
  email: "palciceva9@gmail.com",
  instagramProject: "https://www.instagram.com/cafeconletras89.5/",
  instagramPersonal: "https://www.instagram.com/palciceva/",
  linkedin: "https://www.linkedin.com/in/evapalčič",
};
