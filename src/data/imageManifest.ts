export interface ImageManifestEntry {
  id: string;
  expectedPath: string;
  url: string;
  available: boolean;
  actualContent: string;
  intendedUse: string;
  alt: string;
  caption: string;
}

export const IMAGE_MANIFEST: Record<
  | 'logo'
  | 'grundrissEg'
  | 'aussenansichtVorplatz'
  | 'aussenansichtOstseite'
  | 'illuminationNacht'
  | 'grosserSaalReihen'
  | 'grosserSaalTagung'
  | 'grosserSaalFest'
  | 'grosserSaalAbend'
  | 'multiraumEg'
  | 'kleinerSaalUg'
  | 'teamupKalender'
  | 'historic1951'
  | 'besprechungsraum'
  | 'kuecheInfrastruktur',
  ImageManifestEntry
> = {
  logo: {
    id: 'logo',
    expectedPath: '/images/chapel-logo.jpg',
    url: '/images/chapel-logo.jpg',
    available: true,
    actualContent: 'Offizielles rundes CHAPEL-Logo mit Schriftzug „CHAPEL – RAUM FÜR STADTKULTUR“',
    intendedUse: 'Header- und Footer-Branding',
    alt: 'Offizielles Logo CHAPEL – Raum für Stadtkultur',
    caption: 'Offizielles Logo CHAPEL – Raum für Stadtkultur e.V.',
  },
  grundrissEg: {
    id: 'grundrissEg',
    expectedPath: '/images/grundriss-eg.jpeg',
    url: '/images/grundriss-eg.jpeg',
    available: true,
    actualContent:
      'Originaler Grundriss Erdgeschoss (R14 Großer Saal ca. 300 qm, R15 Küche mit Infopoint ca. 14+44 qm, R18 Multiraum ca. 44 qm)',
    intendedUse: 'Raumexplorer (Original-Grundriss EG)',
    alt: 'Originaler Grundriss Erdgeschoss der CHAPEL mit R14 Großer Saal (ca. 300 qm), R15 Küche mit Infopoint (ca. 14+44 qm) und R18 Multiraum (ca. 44 qm)',
    caption: 'Originaler Grundriss Erdgeschoss – Räume R14, R15 und R18.',
  },
  aussenansichtVorplatz: {
    id: 'aussenansichtVorplatz',
    expectedPath: '/images/aussenansicht-vorplatz.jpeg',
    url: '/images/aussenansicht-vorplatz.jpeg',
    available: true,
    actualContent: 'Außenansicht der CHAPEL mit Vorplatz, Bäumen, Tischen und CHAPEL-Logo-Schild',
    intendedUse: 'Startseite (Gebäudevergleich & Quartiersfest) & Stadtlabor Südstadt',
    alt: 'Außenansicht der CHAPEL in Heidelberg-Südstadt mit Vorplatz, Bäumen und Sitzgelegenheiten',
    caption: 'Abb. — Außenansicht der CHAPEL mit Vorplatz in der Heidelberger Südstadt.',
  },
  aussenansichtOstseite: {
    id: 'aussenansichtOstseite',
    expectedPath: '/images/aussenansicht-ostseite.jpg',
    url: '/images/aussenansicht-ostseite.jpg',
    available: true,
    actualContent: 'Außenansicht der Ostseite (Apsis mit Rundbogenfenstern, Aufnahme 2021)',
    intendedUse: 'Startseite Hero / Gebäudegeschichte & Stadtlabor',
    alt: 'Außenansicht der Ostseite der CHAPEL mit heller Fassade und hohen Rundbogenfenstern zwischen Bäumen (2021)',
    caption: 'Abb. — Ostseite der CHAPEL mit den charakteristischen Rundbogenfenstern (2021).',
  },
  illuminationNacht: {
    id: 'illuminationNacht',
    expectedPath: '/images/illumination-nacht.jpg',
    url: '/images/illumination-nacht.jpg',
    available: true,
    actualContent: 'Nächtliche Architektur-Illumination der CHAPEL-Fassade (2021)',
    intendedUse: 'Stadtlabor Südstadt („Kultur im Stadtteil“)',
    alt: 'Nächtliche blaue Illumination der CHAPEL-Fassade hinter Bäumen (2021)',
    caption: 'Abb. — Nächtliche Illumination der CHAPEL (2021).',
  },
  grosserSaalReihen: {
    id: 'grosserSaalReihen',
    expectedPath: '/images/grosser-saal-reihen.webp',
    url: '/images/grosser-saal-reihen.webp',
    available: true,
    actualContent:
      'Großer Saal (R14) mit hellen Innenwandflächen, historischen Buntglasfenstern, Holzboden, ehemaligem Altarbereich, Traversen und Reihenbestuhlung',
    intendedUse: 'Startseite Hero & Raumexplorer (Großer Saal R14 – Reihenbestuhlung)',
    alt: 'Großer Saal (R14) der CHAPEL mit hellen Wänden, Buntglasfenstern im ehemaligen Altarbereich, Holzboden, Traversen und Reihenbestuhlung',
    caption:
      'Abb. — Großer Saal (R14, ca. 300 m²) mit hellen Innenwandflächen, historischen Buntglasfenstern, Holzboden und ehemaligem Altarbereich.',
  },
  grosserSaalTagung: {
    id: 'grosserSaalTagung',
    expectedPath: '/images/grosser-saal-tagung.jpeg',
    url: '/images/grosser-saal-tagung.jpeg',
    available: true,
    actualContent:
      'Großer Saal (R14) mit U-förmiger Tagungsbestuhlung, Holzboden, Leinwand und farbigem Lichteinfall durch die Buntglasfenster',
    intendedUse: 'Raumexplorer (Großer Saal R14 – Tische & Seminar) & Programm (Diskurs)',
    alt: 'Großer Saal (R14) mit U-förmiger Tisch- und Stuhlanordnung, Leinwand im ehemaligen Altarbereich und Lichteinfall durch Buntglasfenster',
    caption: 'Abb. — Großer Saal (R14) in U-förmiger Tagungs- und Seminaranordnung.',
  },
  grosserSaalFest: {
    id: 'grosserSaalFest',
    expectedPath: '/images/grosser-saal-fest.jpeg',
    url: '/images/grosser-saal-fest.jpeg',
    available: true,
    actualContent:
      'Großer Saal (R14) festlich gedeckt mit weißen Tafeln, Lampions, Rundfenster und Holzboden',
    intendedUse: 'Startseite („Kultur erleben“), Raumexplorer (Großer Saal – Fest/Bankett) & Programm',
    alt: 'Großer Saal (R14) der CHAPEL festlich eingedeckt mit weißen Tischen, Lampions und rundem Buntglasfenster',
    caption: 'Abb. — Großer Saal (R14) bei einer festlichen Veranstaltung mit Bankettbestuhlung.',
  },
  grosserSaalAbend: {
    id: 'grosserSaalAbend',
    expectedPath: '/images/grosser-saal-abend.webp',
    url: '/images/grosser-saal-abend.webp',
    available: true,
    actualContent:
      'Großer Saal (R14) in Abendbeleuchtung mit Stehtischen, Traversen, Empore und rundem Buntglasfenster',
    intendedUse: 'Raumexplorer (Großer Saal – Stehtische / Abendformat) & Programm (Musik)',
    alt: 'Großer Saal (R14) in Abendbeleuchtung mit Stehtischen, Traversen und Blick zur Empore',
    caption: 'Abb. — Großer Saal (R14) in Abendstimmung mit Stehtischen und Lichttechnik.',
  },
  multiraumEg: {
    id: 'multiraumEg',
    expectedPath: '/images/multiraum-eg.jpeg',
    url: '/images/multiraum-eg.jpeg',
    available: true,
    actualContent:
      'Multiraum (R18) im Erdgeschoss mit hellen Wänden, Holzboden, Buntglasfenster-Detail und U-förmiger Tischgruppe',
    intendedUse: 'Raumexplorer (Multiraum R18, ca. 44 m²)',
    alt: 'Multiraum (R18) im Erdgeschoss der CHAPEL mit hellen Wänden, Holzboden und Tischen mit roten Stühlen',
    caption: 'Abb. — Multiraum (R18, ca. 44 m²) im Erdgeschoss für Gruppen und Workshops.',
  },
  kleinerSaalUg: {
    id: 'kleinerSaalUg',
    expectedPath: '/images/kleiner-saal-ug.jpeg',
    url: '/images/kleiner-saal-ug.jpeg',
    available: true,
    actualContent:
      'Kleiner Saal im Untergeschoss mit weißen Säulen, Oberlichtfenstern und Seminarbestuhlung',
    intendedUse: 'Startseite („Gemeinschaft gestalten“), Raumexplorer (Kleiner Saal UG) & Programm',
    alt: 'Kleiner Saal im Untergeschoss der CHAPEL mit weißen Säulen und U-förmiger Seminarbestuhlung',
    caption: 'Abb. — Kleiner Saal im Untergeschoss für Seminare, Kurse und Nachbarschaftstreffen.',
  },
  teamupKalender: {
    id: 'teamupKalender',
    expectedPath: '/images/teamup-kalender.png',
    url: '/images/teamup-kalender.png',
    available: true,
    actualContent: 'Ansicht des bestehenden Veranstaltungskalenders „Veranstaltungen in der CHAPEL“',
    intendedUse: 'Programm & Kultur (Referenz für externe Kalenderanbindung)',
    alt: 'Ansicht des Veranstaltungskalenders der CHAPEL mit Terminliste und Monatsübersicht',
    caption: 'Abb. — Bestehende Kalenderstruktur „Veranstaltungen in der CHAPEL“.',
  },
  historic1951: {
    id: 'historic1951',
    expectedPath: '/images/chapel-historisch-1951.jpg',
    url: '',
    available: false,
    actualContent: 'Historische Archivaufnahme aus dem Jahr 1951 (nicht im Upload enthalten)',
    intendedUse: 'Startseite (Historischer Vergleich)',
    alt: 'Platzhalter für historische Archivaufnahme aus dem Jahr 1951',
    caption: 'Abb. — Historische Archivaufnahme von 1951 (nicht im Bildpaket enthalten · Platzhalter).',
  },
  besprechungsraum: {
    id: 'besprechungsraum',
    expectedPath: '/images/besprechungsraum.jpg',
    url: '',
    available: false,
    actualContent: 'Separates Foto des Besprechungsraums (nicht im Upload enthalten)',
    intendedUse: 'Raumexplorer (Besprechungsraum)',
    alt: 'Platzhalter für separates Foto des Besprechungsraums',
    caption: 'Abb. — Besprechungsraum (separates Foto nicht im Bildpaket enthalten · Platzhalter).',
  },
  kuecheInfrastruktur: {
    id: 'kuecheInfrastruktur',
    expectedPath: '/images/kueche-infrastruktur.jpg',
    url: '',
    available: false,
    actualContent: 'Separates Foto von Küche & Infopoint R15 (nicht im Upload enthalten)',
    intendedUse: 'Raumexplorer (Küche mit Infopoint R15)',
    alt: 'Platzhalter für separates Foto von Küche und Infopoint (R15)',
    caption:
      'Abb. — Küche mit Infopoint (R15, ca. 14+44 m² laut Grundriss · separates Foto nicht im Bildpaket enthalten).',
  },
};
