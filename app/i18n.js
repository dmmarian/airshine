// Translation dictionaries for the site.
//
// All user-visible copy lives here, keyed by string, with one object per locale.
// `app/site-markup.js` is a function `siteHtml(t)` that interpolates one of these
// objects into the HTML; `app/page.js` picks the active locale and re-renders.
//
// To add another language: copy the `en` object, translate the values, and add it
// under a new key in `dict` plus an entry in `locales`. Keep the SHAPE identical —
// the markup reads these exact keys/arrays. Values may contain HTML entities and
// inline markup (they are injected as innerHTML). Price numbers, the count-up
// `data-count` values, and ✓/— symbols stay in the markup, not here.

const en = {
  lang: "en",

  nav: {
    about: "About",
    services: "Services",
    pricing: "Pricing",
    fleet: "Fleet",
    gallery: "Gallery",
    contact: "Contact",
  },

  hero: {
    imgLabel: "↳ hero image · private jet, low light tarmac",
    eyebrow: "Aviation-safe &nbsp;·&nbsp; Fully insured &nbsp;·&nbsp; Before/after reporting",
    title: "Aviation-Grade Aircraft<br>Cleaning &amp; Detailing",
    subtitle:
      "Premium, careful, fully insured care for private jets and business aircraft &mdash; OEM-compatible products, trained crews, and a before-and-after report on every job.",
    cta: "Get in touch &nbsp;→",
    scroll: "Scroll",
  },

  about: {
    eyebrow: "Why owners trust us",
    title: "Care worthy of the airframe it touches.",
    body: "Aircraft are unforgiving of the wrong product, the wrong cloth, or the wrong hand near a sensor. We treat every job as a maintenance-adjacent task &mdash; methodical, documented, and reversible &mdash; so your aircraft leaves cleaner and exactly as sound as it arrived.",
    link: "Talk to us about your aircraft &nbsp;→",
    cards: [
      {
        title: "Aviation-safe by default",
        body: "OEM-compatible products only, matched to your airframe, paint system and interior materials &mdash; never automotive shortcuts.",
      },
      {
        title: "Trained &amp; insured crews",
        body: "Ramp-safety-aware teams, fully insured, briefed on your handling procedures before anyone approaches the aircraft.",
      },
      {
        title: "Nothing touched it shouldn't be",
        body: "No avionics, sensors or pitot ports handled outside agreed procedures &mdash; protected and documented as standard.",
      },
      {
        title: "Proof on every job",
        body: "Before-and-after photo reporting documents the condition we deliver &mdash; full transparency, handover to handover.",
      },
    ],
  },

  stats: {
    fully: "Fully",
    labels: [
      "Aviation-safe, OEM-compatible products",
      "Avionics touched outside agreed procedures",
      "Before &amp; after report on every job",
      "Insured &amp; ramp-safety aware",
    ],
  },

  services: {
    eyebrow: "What we do",
    title: "A complete care programme, inside and out.",
    intro:
      "From a between-flights freshen-up to a full reset and recurring fleet upkeep &mdash; every service uses aviation-grade methods and materials.",
    items: [
      { title: "Interior detailing", body: "Vacuum, carpets, leather &amp; plastics, stains and a careful cockpit wipe-down." },
      { title: "Exterior wash &amp; dry wash", body: "Full wet or waterless dry wash, bug removal and belly light cleaning." },
      { title: "Paint protection &amp; wax", body: "Polish, wax and sealant to protect the finish and ease the next wash." },
      { title: "Brightwork", body: "Careful polishing of polished-metal and bright trim to a clean, even lustre." },
      { title: "Leading edges &amp; windows", body: "Bug-strike removal on leading edges and streak-free, scratch-safe windows." },
      { title: "Fleet maintenance contracts", body: "Scheduled, recurring upkeep across multiple aircraft &mdash; on one agreement." },
    ],
  },

  pricing: {
    eyebrow: "Packages &amp; Pricing",
    title: "Transparent pricing, built around your aircraft.",
    intro:
      "Two service tracks &mdash; interior and exterior &mdash; at clear levels, priced by cabin size. All figures are estimates in EUR, exclude VAT, and are confirmed after an inspection.",
    from: "from",
    perAircraft: "per aircraft",
    recommended: "Recommended",
    packages: [
      {
        name: "Basic Maintenance",
        tags: ["Interior · Basic", "Exterior · Basic"],
        desc: "Recurring upkeep for aircraft already in good condition.",
      },
      {
        name: "Standard Maintenance",
        tags: ["Interior · Detailed", "Exterior · Standard"],
        desc: "A complete clean inside and out, without polishing.",
      },
      {
        name: "First Clean",
        tags: ["Interior · Detailed", "Exterior · Full Dry Wash"],
        desc: "Our recommended first job &mdash; sets a documented baseline with a full before/after report.",
      },
      {
        name: "Premium / Polish",
        tags: ["Interior · Detailed", "Exterior · Polish / Correction"],
        priceText: "Custom quote",
        unitText: "after surface test",
        desc: "Adds fine-scratch removal &amp; polish &mdash; only after inspection, approval and a surface test.",
      },
    ],
    packagesNote:
      "Package &ldquo;from&rdquo; prices combine the smallest cabin category (1&ndash;3 seats) and scale with aircraft size &mdash; see the full per-level table below.",

    levelsEyebrow: "Service levels",
    levelsTitle: "Per-aircraft prices, by level &amp; cabin size",
    levelsIntro:
      "Interior runs at two levels, exterior at four. Prices are in EUR, exclude VAT, and are confirmed on inspection. Highlighted columns form the Recommended First Clean.",

    interiorTable: {
      heading: "Interior cleaning",
      sub: "2 levels · price per aircraft",
      thSize: "Aircraft size",
      thL1: "Level 1",
      thL1sub: "· Basic",
      thL2: "Level 2",
      thL2sub: "· Detailed",
      rows: [
        "Single-engine / very light",
        "Personal / very light jet",
        "Light / midsize jet",
        "Midsize / super-midsize",
        "Large-cabin",
      ],
      customQuote: "Custom quote",
    },

    exteriorTable: {
      heading: "Exterior cleaning",
      sub: "4 levels · price per aircraft",
      thSize: "Aircraft size",
      l1: "Basic",
      l2: "Standard",
      l3: "Full Dry Wash",
      l4: "Polish",
      rows: ["Very light", "Personal jet", "Light / midsize", "Super-midsize", "Large-cabin"],
      custom: "Custom",
      note: "Exterior Level 4 (polish / paint correction) is always custom-quoted &mdash; fine-scratch removal requires paint, material and surface-condition approval and a local test first.",
    },

    included: {
      eyebrow: "What&rsquo;s included",
      title: "Exactly what each level covers",
      tabInterior: "Interior",
      tabExterior: "Exterior",
      thService: "Service",
      yes: "If equipped",
      ifMaterial: "If material allows",
      onApproval: "On approval only",
      afterApproval: "After approval",
      interiorL1: "L1 · Basic",
      interiorL2: "L2 · Detailed",
      interiorRows: [
        "Before / after photo report",
        "Defect / scratch / dent photo report",
        "Cabin arrangement: snacks, drinks, pillows, blankets",
        "Cabin vacuuming &amp; waste removal",
        "High-touch wipe-down: tables, cabinets, panels, cup holders",
        "Interior window cleaning",
        "Light seat cleaning / vacuuming",
        "Lavatory cleaning",
        "Interior windshield + dashboard cleaning",
        "Cockpit: light wipe / vacuum, if permitted",
        "Detailed cleaning of seats &amp; seatbelts",
        "Detailed carpet cleaning / stain treatment",
        "Detailed lavatory cleaning / disinfection",
        "Leather treatment",
        "Detailed cockpit cleaning",
      ],
      interiorNote:
        "Detailed cockpit cleaning is done only with explicit approval and never involves work on critical systems.",
      exteriorL1: "Basic",
      exteriorL2: "Standard",
      exteriorL3: "Full Dry Wash",
      exteriorL4: "Polish",
      exteriorRows: [
        "Before / after photo report",
        "Defect / scratch / dent report",
        "Exterior windows: windshield + passenger",
        "Dry wash: wing leading edges &amp; tail, if accessible",
        "Nose / radome / propeller; bug &amp; dirt removal",
        "Wheel cleaning",
        "Dry wash: engine cowls / propeller area",
        "Belly spot-cleaning",
        "Full fuselage dry wash",
        "Full wing dry wash",
        "Full aircraft belly dry wash",
        "Detailed visible defect / dent &amp; buckle report (not Part&nbsp;145-approved)",
        "Fine scratch removal / polish",
      ],
      exteriorNote:
        "Level 4 polish / paint correction is performed only after inspection, written approval and a local surface test.",
    },

    goodToKnow: {
      eyebrow: "Good to know",
      title: "How the final price is set",
      cards: [
        {
          title: "EUR · excludes VAT",
          body: "All prices are estimates in EUR and exclude VAT, confirmed after an inspection of configuration, access and condition.",
        },
        {
          title: "Condition surcharge",
          body: 'Heavy soiling, oil traces, hardened insects, mould, deep stains or persistent odours: <span style="color:#c6a667;">+20&ndash;60%</span>, agreed before work starts.',
        },
        {
          title: "Access &amp; timing",
          body: 'Night work, weekends, urgent deadlines or difficult airport / hangar access: <span style="color:#c6a667;">+15&ndash;30%</span>.',
        },
        {
          title: "Wet vs dry wash",
          body: "Wet wash only where the airport / hangar allows water use and proper wastewater handling &mdash; otherwise dry wash is used.",
        },
        {
          title: "Safety first",
          body: "No work on sensors, pitot / static ports, antennas, avionics or critical systems without operator / authorised approval.",
        },
        {
          title: "Aviation-safe products",
          body: "pH-neutral solutions, ammonia-free glass care, materials compatible with aviation leather, plastics and carpets &mdash; SDS available.",
        },
      ],
    },

    ctaPre: "For a quote tailored to your aircraft and fleet, ",
    ctaLink: "get in touch",
    ctaPost: ".",
  },

  fleet: {
    eyebrow: "For fleets &amp; operators",
    title: "Recurring upkeep, without the chasing.",
    body: "Own or manage more than one aircraft? We start with a full reset across the fleet, then keep everything to standard on a monthly or biweekly plan &mdash; one agreement, one point of contact, fleet pricing.",
    cta: "Request a fleet quote &nbsp;→",
    steps: [
      { title: "Initial fleet reset", body: "A full deep clean of every aircraft brings the whole fleet to one baseline standard." },
      { title: "Recurring maintenance", body: "Scheduled monthly or biweekly visits keep cabins and exteriors consistently sharp." },
      { title: "Fleet discount", body: "Volume across the fleet is reflected in your rate &mdash; quoted to your schedule." },
    ],
  },

  gallery: {
    eyebrow: "The work",
    title: "Drag to see the difference.",
    intro:
      "Before-and-after pairs from real jobs &mdash; the same documentation you receive on every visit.",
    ba1After: "after · leading edges",
    before: "before",
    ba2After: "after · cabin leather",
    mosaic: ["jet in hangar", "clean cabin", "windows", "detailing in progress", "brightwork"],
  },

  trust: [
    "Aviation-safe products",
    "Fully insured",
    "Before/after reporting",
    "Trained &amp; ramp-safety aware",
  ],

  contact: {
    eyebrow: "Get in touch",
    title: "Tell us about your aircraft.",
    body: "Send a note or call &mdash; we'll talk through type, access and scope, then quote after a quick inspection.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    areaLabel: "Service area",
    areaValue: "[ Region &mdash; FBOs &amp; private terminals ]",
  },

  footer: {
    tagline:
      "Fully insured &amp; aviation-compliant &nbsp;·&nbsp; Aviation-safe, OEM-compatible products only",
    copyright: "© 2026 AirShine. All rights reserved.",
  },
};

const ro = {
  lang: "ro",

  nav: {
    about: "Despre",
    services: "Servicii",
    pricing: "Prețuri",
    fleet: "Flotă",
    gallery: "Galerie",
    contact: "Contact",
  },

  hero: {
    imgLabel: "↳ imagine principală · jet privat, pistă în lumină slabă",
    eyebrow: "Sigur pentru aviație &nbsp;·&nbsp; Complet asigurat &nbsp;·&nbsp; Raport înainte/după",
    title: "Curățare &amp; detailing<br>la standard de aviație",
    subtitle:
      "Îngrijire premium, atentă și complet asigurată pentru jeturi private și aeronave de afaceri &mdash; produse compatibile OEM, echipe instruite și un raport înainte-și-după la fiecare lucrare.",
    cta: "Contactează-ne &nbsp;→",
    scroll: "Derulează",
  },

  about: {
    eyebrow: "De ce ne acordă încredere proprietarii",
    title: "O îngrijire pe măsura aeronavei pe care o atinge.",
    body: "Aeronavele nu iartă produsul greșit, laveta greșită sau mâna greșită lângă un senzor. Tratăm fiecare lucrare ca pe o activitate conexă mentenanței &mdash; metodică, documentată și reversibilă &mdash; astfel încât aeronava pleacă mai curată și exact la fel de sigură cum a sosit.",
    link: "Discută cu noi despre aeronava ta &nbsp;→",
    cards: [
      {
        title: "Sigur pentru aviație din start",
        body: "Doar produse compatibile OEM, potrivite cu fuzelajul, sistemul de vopsea și materialele interioare &mdash; niciodată scurtături din auto.",
      },
      {
        title: "Echipe instruite &amp; asigurate",
        body: "Echipe conștiente de siguranța pe platformă, complet asigurate, instruite asupra procedurilor tale de handling înainte ca cineva să se apropie de aeronavă.",
      },
      {
        title: "Nimic atins ce nu trebuie atins",
        body: "Fără intervenții pe avionică, senzori sau prize Pitot în afara procedurilor agreate &mdash; protejate și documentate ca standard.",
      },
      {
        title: "Dovadă la fiecare lucrare",
        body: "Raportul foto înainte-și-după documentează starea pe care o livrăm &mdash; transparență totală, de la predare la predare.",
      },
    ],
  },

  stats: {
    fully: "Complet",
    labels: [
      "Produse sigure pentru aviație, compatibile OEM",
      "Intervenții pe avionică în afara procedurilor agreate",
      "Raport înainte &amp; după la fiecare lucrare",
      "Asigurați &amp; conștienți de siguranța pe platformă",
    ],
  },

  services: {
    eyebrow: "Ce facem",
    title: "Un program complet de îngrijire, interior și exterior.",
    intro:
      "De la o împrospătare între zboruri la o resetare completă și întreținere recurentă a flotei &mdash; fiecare serviciu folosește metode și materiale la standard de aviație.",
    items: [
      { title: "Detailing interior", body: "Aspirare, mochete, piele &amp; plastice, pete și o ștergere atentă a cabinei de pilotaj." },
      { title: "Spălare exterioară &amp; spălare uscată", body: "Spălare umedă completă sau spălare uscată fără apă, îndepărtarea insectelor și curățarea ușoară a burții." },
      { title: "Protecția vopselei &amp; ceară", body: "Polish, ceară și sealant pentru a proteja finisajul și a ușura următoarea spălare." },
      { title: "Elemente lucioase", body: "Lustruirea atentă a metalului lucios și a ornamentelor strălucitoare până la un luciu curat și uniform." },
      { title: "Borduri de atac &amp; geamuri", body: "Îndepărtarea insectelor de pe bordurile de atac și geamuri fără urme, fără zgârieturi." },
      { title: "Contracte de întreținere a flotei", body: "Întreținere programată și recurentă pentru mai multe aeronave &mdash; pe un singur contract." },
    ],
  },

  pricing: {
    eyebrow: "Pachete &amp; Prețuri",
    title: "Prețuri transparente, construite în jurul aeronavei tale.",
    intro:
      "Două direcții de serviciu &mdash; interior și exterior &mdash; la niveluri clare, tarifate după mărimea cabinei. Toate sumele sunt estimări în EUR, fără TVA, și se confirmă după o inspecție.",
    from: "de la",
    perAircraft: "per aeronavă",
    recommended: "Recomandat",
    packages: [
      {
        name: "Întreținere de bază",
        tags: ["Interior · De bază", "Exterior · De bază"],
        desc: "Întreținere recurentă pentru aeronave deja în stare bună.",
      },
      {
        name: "Întreținere standard",
        tags: ["Interior · Detaliat", "Exterior · Standard"],
        desc: "O curățare completă interior și exterior, fără lustruire.",
      },
      {
        name: "Prima curățare",
        tags: ["Interior · Detaliat", "Exterior · Spălare uscată completă"],
        desc: "Prima lucrare pe care o recomandăm &mdash; stabilește un punct de referință documentat, cu un raport complet înainte/după.",
      },
      {
        name: "Premium / Lustruire",
        tags: ["Interior · Detaliat", "Exterior · Lustruire / Corecție"],
        priceText: "Ofertă personalizată",
        unitText: "după test de suprafață",
        desc: "Adaugă îndepărtarea zgârieturilor fine &amp; lustruire &mdash; doar după inspecție, aprobare și un test de suprafață.",
      },
    ],
    packagesNote:
      "Prețurile &bdquo;de la&rdquo; ale pachetelor combină cea mai mică categorie de cabină (1&ndash;3 locuri) și cresc cu mărimea aeronavei &mdash; vezi tabelul complet pe niveluri mai jos.",

    levelsEyebrow: "Niveluri de serviciu",
    levelsTitle: "Prețuri per aeronavă, după nivel &amp; mărimea cabinei",
    levelsIntro:
      "Interiorul are două niveluri, exteriorul patru. Prețurile sunt în EUR, fără TVA, și se confirmă la inspecție. Coloanele evidențiate formează Prima Curățare recomandată.",

    interiorTable: {
      heading: "Curățare interior",
      sub: "2 niveluri · preț per aeronavă",
      thSize: "Mărimea aeronavei",
      thL1: "Nivel 1",
      thL1sub: "· De bază",
      thL2: "Nivel 2",
      thL2sub: "· Detaliat",
      rows: [
        "Monomotor / foarte ușoară",
        "Jet personal / foarte ușor",
        "Jet ușor / mediu",
        "Mediu / super-mediu",
        "Cabină mare",
      ],
      customQuote: "Ofertă personalizată",
    },

    exteriorTable: {
      heading: "Curățare exterior",
      sub: "4 niveluri · preț per aeronavă",
      thSize: "Mărimea aeronavei",
      l1: "De bază",
      l2: "Standard",
      l3: "Spălare uscată completă",
      l4: "Lustruire",
      rows: ["Foarte ușoară", "Jet personal", "Ușoară / medie", "Super-medie", "Cabină mare"],
      custom: "La cerere",
      note: "Nivelul 4 exterior (lustruire / corecția vopselei) se cotează întotdeauna personalizat &mdash; îndepărtarea zgârieturilor fine necesită aprobarea vopselei, materialului și stării suprafeței și un test local mai întâi.",
    },

    included: {
      eyebrow: "Ce este inclus",
      title: "Exact ce acoperă fiecare nivel",
      tabInterior: "Interior",
      tabExterior: "Exterior",
      thService: "Serviciu",
      yes: "Dacă există dotare",
      ifMaterial: "Dacă materialul permite",
      onApproval: "Doar cu aprobare",
      afterApproval: "După aprobare",
      interiorL1: "L1 · De bază",
      interiorL2: "L2 · Detaliat",
      interiorRows: [
        "Raport foto înainte / după",
        "Raport foto defecte / zgârieturi / lovituri",
        "Aranjarea cabinei: gustări, băuturi, perne, pături",
        "Aspirarea cabinei &amp; îndepărtarea deșeurilor",
        "Ștergerea zonelor des atinse: mese, dulapuri, panouri, suporturi de pahare",
        "Curățarea geamurilor la interior",
        "Curățare ușoară / aspirarea scaunelor",
        "Curățarea toaletei",
        "Curățarea parbrizului interior + bord",
        "Cabină de pilotaj: ștergere ușoară / aspirare, dacă e permis",
        "Curățarea detaliată a scaunelor &amp; centurilor",
        "Curățarea detaliată a mochetei / tratarea petelor",
        "Curățarea detaliată a toaletei / dezinfecție",
        "Tratarea pielii",
        "Curățarea detaliată a cabinei de pilotaj",
      ],
      interiorNote:
        "Curățarea detaliată a cabinei de pilotaj se face doar cu aprobare explicită și nu implică niciodată lucrul la sisteme critice.",
      exteriorL1: "De bază",
      exteriorL2: "Standard",
      exteriorL3: "Spălare uscată completă",
      exteriorL4: "Lustruire",
      exteriorRows: [
        "Raport foto înainte / după",
        "Raport defecte / zgârieturi / lovituri",
        "Geamuri exterioare: parbriz + pasageri",
        "Spălare uscată: bordurile de atac ale aripilor &amp; coada, dacă sunt accesibile",
        "Bot / radom / elice; îndepărtarea insectelor &amp; murdăriei",
        "Curățarea roților",
        "Spălare uscată: carcasele motorului / zona elicei",
        "Curățarea pe porțiuni a burții",
        "Spălarea uscată completă a fuzelajului",
        "Spălarea uscată completă a aripilor",
        "Spălarea uscată completă a burții aeronavei",
        "Raport detaliat al defectelor vizibile / loviturilor &amp; deformărilor (neaprobat Part&nbsp;145)",
        "Îndepărtarea zgârieturilor fine / lustruire",
      ],
      exteriorNote:
        "Nivelul 4 lustruire / corecția vopselei se efectuează doar după inspecție, aprobare scrisă și un test local de suprafață.",
    },

    goodToKnow: {
      eyebrow: "Bine de știut",
      title: "Cum se stabilește prețul final",
      cards: [
        {
          title: "EUR · fără TVA",
          body: "Toate prețurile sunt estimări în EUR și nu includ TVA, confirmate după o inspecție a configurației, accesului și stării.",
        },
        {
          title: "Supliment pentru stare",
          body: 'Murdărie intensă, urme de ulei, insecte întărite, mucegai, pete adânci sau mirosuri persistente: <span style="color:#c6a667;">+20&ndash;60%</span>, agreate înainte de începerea lucrării.',
        },
        {
          title: "Acces &amp; program",
          body: 'Lucru pe timp de noapte, weekend, termene urgente sau acces dificil la aeroport / hangar: <span style="color:#c6a667;">+15&ndash;30%</span>.',
        },
        {
          title: "Spălare umedă vs uscată",
          body: "Spălarea umedă doar acolo unde aeroportul / hangarul permite folosirea apei și gestionarea corectă a apei uzate &mdash; altfel se folosește spălarea uscată.",
        },
        {
          title: "Siguranța întâi",
          body: "Nu se lucrează la senzori, prize Pitot / statice, antene, avionică sau sisteme critice fără aprobarea operatorului / persoanei autorizate.",
        },
        {
          title: "Produse sigure pentru aviație",
          body: "Soluții cu pH neutru, îngrijirea geamurilor fără amoniac, materiale compatibile cu pielea, plasticele și mochetele de aviație &mdash; fișe SDS disponibile.",
        },
      ],
    },

    ctaPre: "Pentru o ofertă adaptată aeronavei și flotei tale, ",
    ctaLink: "contactează-ne",
    ctaPost: ".",
  },

  fleet: {
    eyebrow: "Pentru flote &amp; operatori",
    title: "Întreținere recurentă, fără bătăi de cap.",
    body: "Deții sau administrezi mai multe aeronave? Începem cu o resetare completă a întregii flote, apoi menținem totul la standard printr-un plan lunar sau bisăptămânal &mdash; un singur contract, un singur punct de contact, prețuri pentru flotă.",
    cta: "Cere o ofertă pentru flotă &nbsp;→",
    steps: [
      { title: "Resetarea inițială a flotei", body: "O curățare profundă completă a fiecărei aeronave aduce întreaga flotă la un standard de referință unitar." },
      { title: "Întreținere recurentă", body: "Vizitele programate lunar sau bisăptămânal mențin cabinele și exterioarele impecabile constant." },
      { title: "Discount pentru flotă", body: "Volumul din întreaga flotă se reflectă în tariful tău &mdash; cotat după programul tău." },
    ],
  },

  gallery: {
    eyebrow: "Lucrările",
    title: "Trage pentru a vedea diferența.",
    intro:
      "Perechi înainte-și-după din lucrări reale &mdash; aceeași documentație pe care o primești la fiecare vizită.",
    ba1After: "după · borduri de atac",
    before: "înainte",
    ba2After: "după · piele cabină",
    mosaic: ["jet în hangar", "cabină curată", "geamuri", "detailing în desfășurare", "elemente lucioase"],
  },

  trust: [
    "Produse sigure pentru aviație",
    "Complet asigurat",
    "Raport înainte/după",
    "Instruiți &amp; conștienți de siguranța pe platformă",
  ],

  contact: {
    eyebrow: "Contactează-ne",
    title: "Spune-ne despre aeronava ta.",
    body: "Trimite-ne un mesaj sau sună &mdash; discutăm tipul, accesul și amploarea, apoi oferim un preț după o inspecție rapidă.",
    emailLabel: "Email",
    phoneLabel: "Telefon",
    areaLabel: "Zonă de operare",
    areaValue: "[ Regiune &mdash; FBO-uri &amp; terminale private ]",
  },

  footer: {
    tagline:
      "Complet asigurat &amp; conform aviației &nbsp;·&nbsp; Doar produse sigure pentru aviație, compatibile OEM",
    copyright: "© 2026 AirShine. Toate drepturile rezervate.",
  },
};

export const dict = { en, ro };

// Order/labels for the language switcher in the nav.
export const locales = [
  { code: "en", label: "EN" },
  { code: "ro", label: "RO" },
];

export const defaultLocale = "en";

export function resolveLocale(code) {
  return dict[code] ? code : defaultLocale;
}
