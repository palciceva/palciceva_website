/**
 * content.sl.js — all Slovenian copy (UI strings + section content).
 * Translated from content.es.js. "Café con letras" stays in Spanish
 * (the project's original name).
 */

export default {
  ui: {
    docTitle: "Eva Palčič · Hispanistka in italijanistka",
    toggle: "SL",
    skip: "Preskoči na vsebino",
    nav: {
      services: "Storitve",
      projects: "Projekti",
      education: "Izobrazba",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Hispanistka · Italijanistka",
      titleHtml:
        'Med <span class="accent">jeziki</span>,<br /><span class="accent">besedami</span> in <span class="accent">kulturami</span>',
      rolesHtml:
        "<span>Tečaji</span><span>Lektoriranje</span><span>Prevajanje</span>",
      introHtml:
        "<p>Sem Eva, hispanistka in italijanistka, navdušena nad jeziki, književnostjo in kulturami, ki jih oblikujejo. Moje delo izhaja iz prepričanja, da učenje jezika ne pomeni le poznavanja besed in slovničnih pravil, temveč tudi odkrivanje njegove zgodovine, naglasov, ljudi in načina, kako skozi jezik dojemamo svet.</p><p>S tega vidika poučujem, lektoriram, pišem in prevajam skrbno, predano in ustvarjalno.</p>",
      cta1: "Moje storitve",
      cta2: "Kontaktiraj me",
    },
    services: {
      eyebrow: "Kaj ponujam",
      heading: "Trije načini sodelovanja z mano",
      more: "Preberi več",
      experienceLabel: "Izkušnje",
      skillsLabel: "Veščine",
      closeLabel: "Zapri",
    },
    projects: {
      eyebrow: "Onkraj dela",
      heading: "Osebni projekti",
    },
    education: {
      eyebrow: "Izobraževanje",
      heading: "Izobrazba",
      coursesLabel: "Dodatno izobraževanje",
    },
    gallery: {
      title: "Živeti kulturo pomeni razumeti jezik",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Greva na kavo?",
      text: "Povej mi, v katerem jeziku sanjaš, katero besedilo želiš izpiliti ali kam želiš potovati.",
      cta1: "Piši mi po e-pošti",
      cta2: "Sledi mi na Café con letras",
    },
    footer: {
      email: "E-pošta",
      instagram: "Instagram · Café con letras",
      linkedin: "LinkedIn",
    },
  },

  services: [
    {
      id: "clases",
      title: "Tečaji",
      modalTitle: "Tečaj španščine in italijanščine",
      icon: "chat",
      tagline:
        "Španščina in italijanščina, kjer jezik in kultura vedno stopata z roko v roki.",
      intro: [
        "Deliti svoje jezikovno in literarno znanje —ter prenesti vsaj delček strasti, ki jo čutim do jezikov in njihovih kultur— je bilo vedno eno mojih največjih gonil.",
        "Pri pouku rada ustvarjam prijetno, jasno in spodbudno okolje, v katerem učenje španščine ali italijanščine ne pomeni le usvajanja besed in slovničnih pravil, temveč tudi odkrivanje kulture, različnih načinov sporazumevanja in drugačnih pogledov na svet.",
      ],
      experience: [
        {
          role: "Učiteljica španščine (online)",
          org: "MANU Language Factory",
          link: {
            url: "https://manulanguagefactory.com",
            label: "manulanguagefactory.com",
          },
          date: "Jan 2026 – danes",
          desc:
            "Spletni pouk španščine za slovenske in tuje učence, z razlagami v španščini, slovenščini in angleščini. Delam z učenci različnih starosti in profilov ter prilagajam tempo, gradiva in učne vire potrebam vsakega posameznika.",
        },
      ],
      skills: [
        "Prilagojeno poučevanje",
        "Spletni pouk",
        "Španščina · Italijanščina",
        "Razlage v več jezikih",
        "Učna gradiva",
        "Prilagojeno ravnem in starosti",
      ],
    },
    {
      id: "correccion",
      title: "Lektoriranje",
      modalTitle: "Lektoriranje in pisanje",
      icon: "pen",
      tagline:
        "Pravopis, slovnica in slog: skrb za besedilo je umetnost.",
      intro: [
        "Moja strast do jezikov in književnosti me je povsem naravno pripeljala do dela z besedili. Lektoriranje, pisanje in urejanje so zame oblika skrbi: natančno delo, pri katerem štejejo vsaka beseda, vsak odtenek in vsaka slogovna odločitev. Naj gre za knjigo, revijo, diplomsko nalogo, članek ali kateri koli drug pisni projekt, je moj cilj ustvariti kakovostno in premišljeno besedilo za bralca.",
      ],
      experience: [
        {
          role: "Lektorica — *La montaña que atrapó una nube*, avtorice Tjaše Ravnikar",
          date: "2026",
          desc:
            "Jezikovni in slogovni pregled otroške zgodbe, osredotočene na samopodobo, pozitivno mišljenje in komunikacijo.",
        },
        {
          role: "Avtorica prispevkov in lektorica",
          org: "Revija FIF · Capture Life (ed. 3)",
          date: "Apr 2025 – Okt 2025 · prostovoljstvo",
          desc:
            "Pri reviji FIF *Capture Life* sem sodelovala kot avtorica prispevkov in lektorica pri publikaciji, povezani s Festivalom fotografije (FIF Kolumbija). Moje delo je obsegalo pregledovanje, lektoriranje in uredniško oblikovanje umetniških člankov o fotografiji in o sodelujočih fotografih, pri čemer sem skrbela za slog, slovnico, ortotipografijo in jasnost besedil.",
        },
        {
          role: "Lektorica in uredniška asistentka",
          org: "Založba Univerze v Sevilji",
          date: "Sep 2024 – Dec 2024",
          desc:
            "Lektoriranje akademskih knjig, pri katerem sem skrbela ne le za pravopis in slovnico, temveč tudi za slog, koherenco in drobne podrobnosti, zaradi katerih se besedilo bere bolje. Poleg lektoriranja in urejanja sem sodelovala pri pisanju sinopsisov in biografij avtorjev ter pri komunikaciji z njimi med uredniškim procesom. Ta izkušnja mi je omogočila, da sem od blizu spoznala pot, ki jo delo prehodi, preden pride do bralcev, in okrepila moje razumevanje lektoriranja kot oblike skrbi za besedilo. Občasno sem pomagala tudi pri pregledu in obdelavi slik v podporo uredniškemu delu.",
        },
      ],
      skills: [
        "Pravopis in slovnica",
        "Slog in ortotipografija",
        "Urejanje knjig",
        "Sinopsisi in biografije",
        "Uredniški proces",
        "Adobe Photoshop · Camera Raw",
      ],
    },
    {
      id: "traduccion",
      title: "Prevajanje",
      icon: "globe",
      tagline:
        "Španščina, italijanščina, slovenščina in angleščina: prenašanje besed, sporočil in občutkov.",
      intro: [
        "Prevajanje je zelo blizu mojemu razumevanju jezikov: ne pomeni le prenašanja besed iz enega jezika v drugega, temveč prenašanje pomenov, odtenkov, čustev in pogledov na svet.",
        "Imam se za ustvarjalno osebo tudi zunaj poklicnega okolja: glasba, ples in petje so del mojega življenja in mojega načina izražanja. Prav zato mi je prevajanje tako blizu: zahteva občutljivost, poslušanje in natančnost, da sporočilo v drugem jeziku ohrani svoj namen, ton in moč.",
      ],
      experience: [
        {
          role: "Prevajalka — *La montaña que atrapó una nube. Guía digital para padres con actividades divertidas para niños*, avtorice Tjaše Ravnikar",
          date: "2026",
          desc:
            "Prevod iz slovenščine v španščino dodatnega priročnika za starše s priporočili in praktičnimi dejavnostmi za otroke.",
        },
        {
          role: "Prevajanje in tolmačenje",
          org: "Jezikovna šola Carlos V · Sevilja",
          date: "Feb 2024 – Jul 2024",
          desc: [
            "Neposredno prevajanje in tolmačenje med španščino in angleščino ter španščino in italijanščino. Moje delo je bilo tesno povezano s poklicno komunikacijo z učenci, sodelavci in mednarodnimi skupinami ter s podporo v upravnih, izobraževalnih in turističnih okoljih.",
            "Ta izkušnja mi je omogočila delo z jezikom v resničnih komunikacijskih situacijah, kjer ni dovolj le pravilno prevajati: treba je tudi prilagoditi sporočilo, razumeti kontekst in olajšati srečanje med ljudmi iz različnih kultur.",
          ],
        },
      ],
      skills: [
        "Prevajanje ES/IT/SL/EN",
        "Neposredno tolmačenje",
        "Medkulturno posredovanje",
        "Poklicna komunikacija",
      ],
    },
  ],

  projects: [
    {
      kicker: "Instagram · književnost & jezikoslovje",
      title: "Café con letras",
      icon: "mug",
      desc:
        "Café con Letras je prostor, kjer se srečajo jeziki, književnost, umetnost in kava. Tam delim jezikovne zanimivosti, slovnična pravila, razmišljanja, recenzije in priporočila.",
      tag: "Aktivno",
      href: "https://www.instagram.com/cafeconletras89.5/",
      cta: "Poglej na Instagramu",
    },
    {
      kicker: "Projekt v pripravi",
      title: "Virtualna knjižnica",
      icon: "book",
      desc:
        "Osebna spletna knjižnica, kjer beležiš prebrano, pišeš recenzije oz. mnenja, spremljaš svojo bralno pot in odkrivaš, kateri jeziki, avtorji in svetovi naseljujejo tvoje police.",
      tag: "Kmalu",
      href: null,
      cta: null,
    },
  ],

  education: [
    {
      degree: "Magisterij iz hispanistike ter italijanskega jezika in književnosti",
      org: "Filozofska fakulteta · Univerza v Ljubljani",
      date: "2022 – 2025",
      location: "Ljubljana, Slovenija",
    },
    {
      degree: "Diploma iz španskega in italijanskega jezika in književnosti",
      org: "Filozofska fakulteta · Univerza v Ljubljani",
      date: "2018 – 2022",
      location: "Ljubljana, Slovenija",
    },
    {
      degree: "Tehnica za gastronomijo in turizem",
      org: "Srednja šola za gostinstvo in turizem v Ljubljani",
      date: "2014 – 2018",
      location: "Ljubljana, Slovenija",
    },
  ],

  courses: [
    {
      title:
        "Klub lektoriranja — Merila za lektoriranje povedi in tehnološka orodja za napredno lektoriranje",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Okt 2025",
    },
    {
      title:
        "Klub lektoriranja — Postopek pregleda na različnih ravneh in prilagoditev tiskani in digitalni obliki",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Sep 2025",
    },
    {
      title:
        "Klub lektoriranja — Učenje UI za lektoriranje besedil in nastavitev urejevalnega okolja",
      org: "CAL · Correctología y Asesoramiento Lingüístico",
      date: "Avg 2025",
    },
    {
      title: "Poklicno lektoriranje: strast, natančnost in razvoj",
      org: "Mednarodni dnevi lektoriranja besedil (CAL)",
      date: "Feb 2025",
    },
    {
      title:
        "Ključi in strategije za objavo rokopisov pri univerzitetnih založbah",
      org: "Založba Univerze v Sevilji",
      date: "Dec 2024",
    },
  ],

  // One caption per photo, in carousel order (gallery-01 … gallery-43).
  galleryCaptions: [
    "Sevilja, Španija",
    "Galapaški otoki, Ekvador",
    "Baños, Ekvador",
    "Palma de Mallorca, Majorka",
    "Quito, Ekvador",
    "Ibarra, Ekvador",
    "Cádiz, Španija",
    "Sevilja, Španija",
    "Galapaški otoki, Ekvador",
    "Havana, Kuba",
    "Quito, Ekvador",
    "Cotacachi, Ekvador",
    "Galapaški otoki, Ekvador",
    "Quito, Ekvador",
    "Sevilja, Španija",
    "Sevilja, Španija",
    "Andratx, Majorka",
    "Mitad del Mundo, Ekvador",
    "Triana, Španija",
    "Sevilja, Španija",
    "Quito, Ekvador",
    "Tarifa, Španija",
    "Guanabo, Kuba",
    "Galapaški otoki, Ekvador",
    "Sevilja, Španija",
    "Granada, Španija",
    "Havana, Kuba",
    "Cotopaxi, Ekvador",
    "Quito, Ekvador",
    "Pollença, Majorka",
    "Andratx, Majorka",
    "Quito, Ekvador",
    "Córdoba, Španija",
    "Otavalo, Ekvador",
    "Sevilja, Španija",
    "Ronda, Španija",
    "Sevilja, Španija",
    "Sevilja, Španija",
    "Quito, Ekvador",
    "Sevilja, Španija",
    "Galapaški otoki, Ekvador",
    "Setenil de las Bodegas, Španija",
    "Setenil de las Bodegas, Španija",
  ],
};
