/**
 * content.it.js — all Italian copy (UI strings + section content).
 * Translated from content.es.js. "Café con letras" stays in Spanish
 * (the project's original name).
 */

export default {
  ui: {
    docTitle: "Eva Palčič · Ispanista e italianista",
    toggle: "IT",
    skip: "Salta al contenuto",
    nav: {
      services: "Servizi",
      projects: "Progetti",
      education: "Istruzione",
      contact: "Contatti",
    },
    hero: {
      eyebrow: "Ispanista · Italianista",
      titleHtml:
        'Tra <span class="accent">lingue</span>,<br /><span class="accent">lettere</span> e <span class="accent">culture</span>',
      rolesHtml:
        "<span>Lezioni</span><span>Correzione</span><span>Traduzione</span>",
      introHtml:
        "<p>Sono Eva, ispanista e italianista appassionata delle lingue, della letteratura e delle culture che danno loro vita. Il mio lavoro nasce da una convinzione: imparare una lingua non significa solo conoscerne le parole e le regole grammaticali, ma anche avvicinarsi alla sua storia, ai suoi accenti, alla sua gente e al suo modo di intendere il mondo.</p><p>Con questo sguardo, insegno, correggo, scrivo e traduco con cura, disciplina e creatività.</p>",
      cta1: "Scopri i miei servizi",
      cta2: "Parliamo",
    },
    services: {
      eyebrow: "Cosa offro",
      heading: "Tre modi di lavorare con me",
      more: "Scopri di più",
      experienceLabel: "Esperienza",
      skillsLabel: "Competenze",
      closeLabel: "Chiudi",
    },
    projects: {
      eyebrow: "Oltre il lavoro",
      heading: "Progetti personali",
    },
    education: {
      eyebrow: "Formazione",
      heading: "Istruzione",
      coursesLabel: "Formazione complementare",
    },
    gallery: {
      title: "Capire una lingua significa vivere la sua cultura.",
    },
    contact: {
      eyebrow: "Contatti",
      title: "Ci prendiamo un caffè?",
      text: "Raccontami in che lingua sogni, quale testo vuoi rifinire o dove vuoi viaggiare.",
      cta1: "Scrivimi un'email",
      cta2: "Seguimi su Café con letras",
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
      title: "Lezioni",
      modalTitle: "Lezioni di spagnolo e italiano",
      icon: "chat",
      tagline:
        "Spagnolo e italiano, dove lingua e cultura camminano insieme.",
      intro: [
        "Condividere le mie conoscenze linguistiche e letterarie —e trasmettere, anche solo in parte, la passione che provo per le lingue e le loro culture— è sempre stato uno dei miei grandi motori.",
        "Nelle mie lezioni mi piace creare uno spazio accogliente, chiaro e motivante, dove imparare lo spagnolo o l'italiano non sia solo studiare parole e regole grammaticali, ma anche scoprire una cultura, un modo di comunicare e un modo diverso di guardare il mondo.",
      ],
      experience: [
        {
          role: "Insegnante di spagnolo online",
          org: "MANU Language Factory",
          link: {
            url: "https://manulanguagefactory.com",
            label: "manulanguagefactory.com",
          },
          date: "Gen 2026 – oggi",
          desc:
            "Lezioni di spagnolo online per studenti sloveni e stranieri, con spiegazioni in spagnolo, sloveno e inglese. Lavoro con studenti di diverse età e profili, adattando il ritmo, i materiali e le risorse didattiche alle esigenze di ciascuno.",
        },
      ],
      skills: [
        "Insegnamento personalizzato",
        "Lezioni online",
        "Spagnolo · Italiano",
        "Spiegazioni in più lingue",
        "Materiali didattici",
        "Adatto a livelli ed età",
      ],
    },
    {
      id: "correccion",
      title: "Correzione",
      modalTitle: "Correzione e scrittura",
      icon: "pen",
      tagline:
        "Ortografia, grammatica e stile: curare un testo è un mestiere artigianale.",
      intro: [
        "La mia passione per le lingue e la letteratura mi ha portata in modo naturale a lavorare con i testi. Correggere, scrivere ed editare sono, per me, una forma di cura: un mestiere minuzioso in cui ogni parola, ogni sfumatura e ogni scelta di stile contano. Che si tratti di un libro, di una rivista, di una tesi, di un articolo o di qualsiasi altro progetto scritto, il mio obiettivo è che il lettore riceva un prodotto di alta qualità.",
      ],
      experience: [
        {
          role: "Correttrice — *La montaña que atrapó una nube*, di Tjaša Ravnikar",
          date: "2026",
          desc:
            "Correzione linguistica e stilistica di un racconto per bambini incentrato sull'autostima, sul pensiero positivo e sulla comunicazione.",
        },
        {
          role: "Redattrice e correttrice",
          org: "Rivista FIF · Capture Life (ed. 3)",
          date: "Apr 2025 – Ott 2025 · volontariato",
          desc:
            "Nella rivista FIF *Capture Life* ho lavorato come redattrice e correttrice in una pubblicazione legata al Festival di Fotografia (FIF Colombia). Il mio lavoro consisteva nel rivedere, correggere e dare forma editoriale ad articoli artistici sulla fotografia e sui fotografi partecipanti, curando lo stile, la grammatica, l'ortotipografia e la chiarezza dei testi.",
        },
        {
          role: "Correttrice e assistente editoriale",
          org: "Casa editrice dell'Università di Siviglia",
          date: "Set 2024 – Dic 2024",
          desc:
            "Correzione di libri accademici, curando non solo l'ortografia e la grammatica, ma anche lo stile, la coerenza e i piccoli dettagli che rendono un testo più leggibile. Oltre a correggere ed editare, ho collaborato alla stesura di sinossi e biografie degli autori, così come alla comunicazione con loro durante il processo editoriale. Questa esperienza mi ha permesso di conoscere da vicino il percorso che un'opera compie prima di arrivare ai suoi lettori, e ha rafforzato il mio modo di intendere la correzione come una forma di cura del testo. Ho inoltre collaborato occasionalmente alla revisione e all'editing delle immagini a supporto del lavoro editoriale.",
        },
      ],
      skills: [
        "Ortografia e grammatica",
        "Stile e ortotipografia",
        "Editing di libri",
        "Sinossi e biografie",
        "Processo editoriale",
        "Adobe Photoshop · Camera Raw",
      ],
    },
    {
      id: "traduccion",
      title: "Traduzione",
      icon: "globe",
      tagline:
        "Spagnolo, italiano, sloveno e inglese: trasferire parole, messaggi e sentimenti.",
      intro: [
        "La traduzione è molto vicina al mio modo di intendere le lingue: non si tratta solo di passare parole da una lingua all'altra, ma di trasferire significati, sfumature, emozioni e modi di vedere il mondo.",
        "Mi considero una persona creativa, anche al di fuori dell'ambito professionale: la musica, la danza e il canto fanno parte della mia vita e del mio modo di esprimermi. Per questo la traduzione mi è così affine: richiede sensibilità, ascolto e precisione affinché un messaggio conservi la sua intenzione, il suo tono e la sua forza in un'altra lingua.",
      ],
      experience: [
        {
          role: "Traduttrice — *La montaña que atrapó una nube. Guía digital para padres con actividades divertidas para niños*, di Tjaša Ravnikar",
          date: "2026",
          desc:
            "Traduzione dallo sloveno allo spagnolo di una guida complementare per genitori, con consigli e attività pratiche da svolgere con i bambini.",
        },
        {
          role: "Traduzione e interpretariato",
          org: "Scuola di lingue Carlos V · Siviglia",
          date: "Feb 2024 – Lug 2024",
          desc: [
            "Traduzione e interpretariato diretto tra spagnolo-inglese e spagnolo-italiano. Il mio lavoro era strettamente legato alla comunicazione professionale con studenti, collaboratori e gruppi internazionali, oltre che al supporto in contesti amministrativi, formativi e turistici.",
            "Questa esperienza mi ha permesso di lavorare con la lingua in situazioni reali di comunicazione, dove non basta tradurre correttamente: bisogna anche adattare il messaggio, comprendere il contesto e facilitare l'incontro tra persone di culture diverse.",
          ],
        },
      ],
      skills: [
        "Traduzione ES/IT/SL/EN",
        "Interpretariato diretto",
        "Mediazione interculturale",
        "Comunicazione professionale",
      ],
    },
  ],

  projects: [
    {
      kicker: "Instagram · letteratura & linguistica",
      title: "Café con letras",
      icon: "mug",
      desc:
        "Café con Letras è uno spazio dove si incontrano le lingue, la letteratura, l'arte e il caffè. Lì condivido curiosità linguistiche, regole grammaticali, riflessioni, recensioni e consigli.",
      tag: "Attivo",
      href: "https://www.instagram.com/cafeconletras89.5/",
      cta: "Vedi su Instagram",
    },
    {
      kicker: "Progetto in preparazione",
      title: "Biblioteca virtuale",
      icon: "book",
      desc:
        "Una biblioteca personale online dove registrare le letture, scrivere recensioni, seguire il proprio percorso di lettura e scoprire quali lingue, autori e mondi abitano i tuoi scaffali.",
      tag: "Prossimamente",
      href: null,
      cta: null,
    },
  ],

  education: [
    {
      degree: "Master in Ispanistica e Lingua e Letteratura italiana",
      org: "Facoltà di Lettere e Filosofia · Università di Lubiana",
      date: "2022 – 2025",
      location: "Lubiana, Slovenia",
    },
    {
      degree: "Laurea in Lingua e Letteratura spagnola e italiana",
      org: "Facoltà di Lettere e Filosofia · Università di Lubiana",
      date: "2018 – 2022",
      location: "Lubiana, Slovenia",
    },
    {
      degree: "Tecnico in Turismo e Gastronomia",
      org: "Istituto Superiore di Gastronomia e Turismo di Lubiana",
      date: "2014 – 2018",
      location: "Lubiana, Slovenia",
    },
  ],

  courses: [
    {
      title:
        "Club di Correzione — Criteri di revisione della frase e strumenti tecnologici per la correzione avanzata",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Ott 2025",
    },
    {
      title:
        "Club di Correzione — Processo di revisione a diversi livelli e adattamento al formato cartaceo e digitale",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Set 2025",
    },
    {
      title:
        "Club di Correzione — Addestrare l'IA a correggere testi e configurazione dell'ambiente di editing",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Ago 2025",
    },
    {
      title: "Correzione professionale: passione, precisione e proiezione",
      org: "Giornate Internazionali di Correzione dei Testi (CAL)",
      date: "Feb 2025",
    },
    {
      title:
        "Chiavi e strategie per la pubblicazione di manoscritti presso le case editrici universitarie",
      org: "Casa editrice dell'Università di Siviglia",
      date: "Dic 2024",
    },
  ],

  // One caption per photo, in carousel order (gallery-01 … gallery-43).
  galleryCaptions: [
    "Siviglia, Spagna",
    "Isole Galápagos, Ecuador",
    "Baños, Ecuador",
    "Palma di Maiorca, Maiorca",
    "Quito, Ecuador",
    "Ibarra, Ecuador",
    "Cadice, Spagna",
    "Siviglia, Spagna",
    "Isole Galápagos, Ecuador",
    "L'Avana, Cuba",
    "Quito, Ecuador",
    "Cotacachi, Ecuador",
    "Isole Galápagos, Ecuador",
    "Quito, Ecuador",
    "Siviglia, Spagna",
    "Siviglia, Spagna",
    "Andratx, Maiorca",
    "Mitad del Mundo, Ecuador",
    "Triana, Spagna",
    "Siviglia, Spagna",
    "Quito, Ecuador",
    "Tarifa, Spagna",
    "Guanabo, Cuba",
    "Isole Galápagos, Ecuador",
    "Siviglia, Spagna",
    "Granada, Spagna",
    "L'Avana, Cuba",
    "Cotopaxi, Ecuador",
    "Quito, Ecuador",
    "Pollença, Maiorca",
    "Andratx, Maiorca",
    "Quito, Ecuador",
    "Cordova, Spagna",
    "Otavalo, Ecuador",
    "Siviglia, Spagna",
    "Ronda, Spagna",
    "Siviglia, Spagna",
    "Siviglia, Spagna",
    "Quito, Ecuador",
    "Siviglia, Spagna",
    "Isole Galápagos, Ecuador",
    "Setenil de las Bodegas, Spagna",
    "Setenil de las Bodegas, Spagna",
  ],
};
