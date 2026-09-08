/**
 * content.es.js — all Spanish copy (UI strings + section content).
 * Mirror of content.en.js. Language-independent data (image srcs,
 * contact links, version) lives in content.js.
 */

export default {
  ui: {
    docTitle: "Eva Palčič · Hispanista e italianista",
    toggle: "EN", // label on the language switch while Spanish is active
    skip: "Saltar al contenido",
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      education: "Educación",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Hispanista · Italianista",
      titleHtml:
        'Entre <span class="accent">lenguas</span>,<br /><span class="accent">letras</span> y <span class="accent">culturas</span>',
      rolesHtml:
        "<span>Clases</span><span>Corrección</span><span>Traducción</span>",
      introHtml:
        "<p>Soy Eva, hispanista e italianista apasionada por los idiomas, la literatura y las culturas que les dan vida. Mi trabajo nace de una convicción: aprender una lengua no es solo conocer sus palabras y reglas gramaticales, sino también acercarse a su historia, a sus acentos, a su gente y a su manera de entender el mundo.</p><p>Desde esa mirada, enseño, corrijo, escribo y traduzco con cuidado, disciplina y creatividad.</p>",
      cta1: "Descubre mis servicios",
      cta2: "Hablemos",
    },
    services: {
      eyebrow: "Qué ofrezco",
      heading: "Tres formas de trabajar conmigo",
      more: "Ver más",
      experienceLabel: "Experiencia",
      skillsLabel: "Habilidades",
      closeLabel: "Cerrar",
    },
    projects: {
      eyebrow: "Más allá del trabajo",
      heading: "Proyectos personales",
    },
    education: {
      eyebrow: "Formación",
      heading: "Educación",
      coursesLabel: "Formación complementaria",
    },
    gallery: {
      title: "Vivir la cultura es entender el idioma",
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Nos tomamos un café?",
      text: "Cuéntame en qué idioma sueñas, qué texto quieres pulir o adónde quieres viajar.",
      cta1: "Escríbeme un correo",
      cta2: "Sígueme en Café con letras",
    },
    footer: {
      email: "Correo electrónico",
      instagram: "Instagram · Café con letras",
      linkedin: "LinkedIn",
    },
  },

  services: [
    {
      id: "clases",
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
          link: {
            url: "https://manulanguagefactory.com",
            label: "manulanguagefactory.com",
          },
          date: "Ene 2026 – actualidad",
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
          role: "Correctora — *La montaña que atrapó una nube*, de Tjaša Ravnikar",
          date: "2026",
          desc:
            "Corrección lingüística y estilística de un cuento infantil centrado en la autoestima, el pensamiento positivo y la comunicación.",
        },
        {
          role: "Redactora y correctora",
          org: "Revista FIF · Capture Life (ed. 3)",
          date: "Abr 2025 – Oct 2025 · voluntariado",
          desc:
            "En FIF Revista *Capture Life* participé como redactora y correctora en una publicación vinculada al Festival de Fotografía (FIF Colombia). Mi trabajo consistió en revisar, corregir y dar forma editorial a artículos artísticos sobre fotografía y sobre los fotógrafos participantes, cuidando el estilo, la gramática, la ortotipografía y la claridad de los textos.",
        },
        {
          role: "Correctora y asistente editorial",
          org: "Editorial de la Universidad de Sevilla",
          date: "Sep 2024 – Dic 2024",
          desc:
            "Corrección de libros académicos cuidando no solo la ortografía y la gramática, sino también el estilo, la coherencia y los pequeños detalles que hacen que un texto se lea mejor. Además de corregir y editar, participé en la redacción de sinopsis y biografías de autores, así como en la comunicación con ellos durante el proceso editorial. Esta experiencia me permitió conocer de cerca el camino que recorre una obra antes de llegar a sus lectores, y reforzó mi manera de entender la corrección como una forma de cuidado del texto. También colaboré puntualmente en la revisión y edición de imágenes como apoyo al trabajo editorial.",
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
      title: "Traducción",
      icon: "globe",
      tagline:
        "Español, italiano, esloveno e inglés: trasladar palabras, mensajes y sentimientos.",
      intro: [
        "La traducción está muy cerca de mi manera de entender los idiomas: no se trata solo de pasar palabras de una lengua a otra, sino de trasladar sentidos, matices, emociones y formas de ver el mundo.",
        "Me considero una persona creativa, también fuera del ámbito profesional: la música, el baile y el canto forman parte de mi vida y de mi manera de relacionarme con la expresión. Por eso, la traducción me resulta tan afín: exige sensibilidad, escucha y precisión para que un mensaje conserve su intención, su tono y su fuerza en otra lengua.",
      ],
      experience: [
        {
          role: "Traductora — *La montaña que atrapó una nube. Guía digital para padres con actividades divertidas para niños*, de Tjaša Ravnikar",
          date: "2026",
          desc:
            "Traducción del esloveno al español de una guía complementaria para padres, con recomendaciones y actividades prácticas para realizar con niños.",
        },
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
  ],

  projects: [
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
  ],

  education: [
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
  ],

  courses: [
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
  ],

  // One caption per photo, in carousel order (gallery-01 … gallery-43).
  galleryCaptions: [
    "Sevilla, España",
    "Islas Galápagos, Ecuador",
    "Baños, Ecuador",
    "Palma de Mallorca, Mallorca",
    "Quito, Ecuador",
    "Ibarra, Ecuador",
    "Cádiz, España",
    "Sevilla, España",
    "Islas Galápagos, Ecuador",
    "La Habana, Cuba",
    "Quito, Ecuador",
    "Cotacachi, Ecuador",
    "Islas Galápagos, Ecuador",
    "Quito, Ecuador",
    "Sevilla, España",
    "Sevilla, España",
    "Andratx, Mallorca",
    "Mitad del Mundo, Ecuador",
    "Triana, España",
    "Sevilla, España",
    "Quito, Ecuador",
    "Tarifa, España",
    "Guanabo, Cuba",
    "Islas Galápagos, Ecuador",
    "Sevilla, España",
    "Granada, España",
    "La Habana, Cuba",
    "Cotopaxi, Ecuador",
    "Quito, Ecuador",
    "Pollença, Mallorca",
    "Andratx, Mallorca",
    "Quito, Ecuador",
    "Córdoba, España",
    "Otavalo, Ecuador",
    "Sevilla, España",
    "Ronda, España",
    "Sevilla, España",
    "Sevilla, España",
    "Quito, Ecuador",
    "Sevilla, España",
    "Islas Galápagos, Ecuador",
    "Setenil de las Bodegas, España",
    "Setenil de las Bodegas, España",
  ],
};
