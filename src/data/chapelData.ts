import { IMAGE_MANIFEST } from './imageManifest';
import { VERIFIED_FACTS } from './chapelFacts';

export type FloorLevel = 'EG' | 'UG' | 'ALL';

export type ArrangementKey =
  | 'reihenbestuhlung'
  | 'tische-seminar'
  | 'offener-raum'
  | 'gespraechskreis';

export type LightingMood = 'tageslicht' | 'abendstimmung';

export interface ArrangementOption {
  label: string;
  spatialNote: string;
  suitableFor: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface ChapelRoom {
  id: string;
  code: string;
  indexLabel: string;
  name: string;
  categoryLabel: string;
  floor: 'EG' | 'UG';
  floorLabel: string;
  verifiedAreaText: string;
  bookable: boolean;
  imageUrl: string;
  expectedImagePath: string;
  imageAlt: string;
  imageCaption: string;
  description: string;
  architecturalCharacter: string;
  availableArrangements: ArrangementKey[];
  arrangements: Record<ArrangementKey, ArrangementOption>;
  svgBounds: {
    x: number;
    y: number;
    width: number;
    height: number;
    labelX: number;
    labelY: number;
  };
}

export type ProgramCategory =
  | 'Musik & Konzerte'
  | 'Kunst & Ausstellungen'
  | 'Begegnung & Nachbarschaft'
  | 'Workshops & Bildung'
  | 'Gespräche & Diskussionen'
  | 'Feste & Gemeinschaft';

export interface DemoProgramEvent {
  id: string;
  indexLabel: string;
  category: ProgramCategory;
  title: string;
  subtitle: string;
  demoSlotLabel: string;
  weekdayShort: string;
  dayNumber: string;
  timeWindow: string;
  roomId: string;
  roomName: string;
  organizerNote: string;
  description: string;
  imageUrl: string;
  expectedImagePath: string;
  imageAlt: string;
}

export interface ParticipationArea {
  id: string;
  indexLabel: string;
  title: string;
  statusNote: string;
  summary: string;
  currentPossibilities: string[];
  futurePerspectives: string[];
}

export interface StadtlaborProject {
  id: string;
  indexLabel: string;
  title: string;
  focusArea: string;
  summary: string;
  guidingQuestions: string[];
  imageUrl: string;
  expectedImagePath: string;
  imageAlt: string;
  imageCaption: string;
}

export interface HistoricalMilestone {
  year: string;
  title: string;
  detail: string;
}

export interface FoundingOrganization {
  name: string;
  roleDescription: string;
}

export const INSTITUTION_INFO = {
  officialName: VERIFIED_FACTS.institution.officialName,
  shortName: VERIFIED_FACTS.institution.shortName,
  subtitle: VERIFIED_FACTS.institution.subtitle,
  editorialStatement: 'Ein Haus. Viele Möglichkeiten.',
  visionaryStatement: 'Die Südstadt gemeinsam weiterdenken.',
  editorialProposalNote:
    'Redaktioneller Leitgedanke dieser konzeptionellen Website – kein offiziell beschlossener Vereinsslogan.',
  dimensions: VERIFIED_FACTS.institution.missionPillars,
  address: VERIFIED_FACTS.institution.address,
  existingWebsite: VERIFIED_FACTS.institution.existingWebsite,
};

export const IMAGES = {
  exterior: IMAGE_MANIFEST.aussenansichtVorplatz,
  eastSide: IMAGE_MANIFEST.aussenansichtOstseite,
  illumination: IMAGE_MANIFEST.illuminationNacht,
  stainedGlassHall: IMAGE_MANIFEST.grosserSaalReihen,
  mainHall: IMAGE_MANIFEST.grosserSaalTagung,
  communityGathering: IMAGE_MANIFEST.grosserSaalFest,
  eveningHall: IMAGE_MANIFEST.grosserSaalAbend,
  seminarLower: IMAGE_MANIFEST.kleinerSaalUg,
  multiraum: IMAGE_MANIFEST.multiraumEg,
  foyerInfrastructure: IMAGE_MANIFEST.kuecheInfrastruktur,
  historic1951: IMAGE_MANIFEST.historic1951,
  grundrissEg: IMAGE_MANIFEST.grundrissEg,
  teamupKalender: IMAGE_MANIFEST.teamupKalender,
};

export const ARRANGEMENT_LABELS: Record<ArrangementKey, string> = {
  reihenbestuhlung: 'Reihenbestuhlung',
  'tische-seminar': 'Tische & Seminar',
  'offener-raum': 'Offener Raum / Ausstellung',
  gespraechskreis: 'Gesprächskreis / Plenum',
};

export const LIGHTING_MOODS: Record<
  LightingMood,
  { label: string; filterClass: string; description: string }
> = {
  tageslicht: {
    label: 'Tageslicht',
    filterClass: 'brightness-100 contrast-100 saturate-100',
    description: 'Natürliches Licht durch die Fensteröffnungen',
  },
  abendstimmung: {
    label: 'Abendstimmung',
    filterClass: 'brightness-90 contrast-105 sepia-[0.12]',
    description: 'Gedimmte Innenbeleuchtung für Abendformate',
  },
};

export const CHAPEL_ROOMS: ChapelRoom[] = [
  {
    id: 'grosser-saal',
    code: 'R14',
    indexLabel: '01.',
    name: 'Großer Saal',
    categoryLabel: 'Zentraler Veranstaltungsraum',
    floor: 'EG',
    floorLabel: 'Erdgeschoss',
    verifiedAreaText: 'ca. 300 m² (laut Grundriss EG)',
    bookable: true,
    imageUrl: IMAGE_MANIFEST.grosserSaalReihen.url,
    expectedImagePath: IMAGE_MANIFEST.grosserSaalReihen.expectedPath,
    imageAlt: IMAGE_MANIFEST.grosserSaalReihen.alt,
    imageCaption: IMAGE_MANIFEST.grosserSaalReihen.caption,
    description:
      'Der Große Saal (R14) bildet mit rund 300 m² Grundfläche das räumliche Zentrum des Hauses. Helle Innenwandflächen, historische Buntglasfenster, ein warmer Holzboden, der ehemalige Altarbereich sowie moderne Veranstaltungsinfrastruktur prägen den flexiblen zentralen Saal für Konzerte, Versammlungen, Ausstellungen und Stadtteilfeste.',
    architecturalCharacter:
      'Flexibler zentraler Saal mit hellen Innenwandflächen, historischen Buntglasfenstern, Holzboden, ehemaligem Altarbereich und moderner Veranstaltungsinfrastruktur.',
    availableArrangements: [
      'reihenbestuhlung',
      'tische-seminar',
      'offener-raum',
      'gespraechskreis',
    ],
    arrangements: {
      reihenbestuhlung: {
        label: 'Reihenbestuhlung',
        spatialNote: 'Gerichtete Bestuhlung mit Mittelgang und Blick auf den ehemaligen Altarbereich.',
        suitableFor: 'Konzerte, Vorträge, Lesungen, Filmabende und öffentliche Foren',
        imageUrl: IMAGE_MANIFEST.grosserSaalReihen.url,
        imageAlt: IMAGE_MANIFEST.grosserSaalReihen.alt,
      },
      'tische-seminar': {
        label: 'Tische & Seminar',
        spatialNote: 'U-förmige Tagungs- oder Gruppentischanordnung im offenen Saalraum.',
        suitableFor: 'Tagungen, Stadtteilversammlungen, Workshops und Seminare',
        imageUrl: IMAGE_MANIFEST.grosserSaalTagung.url,
        imageAlt: IMAGE_MANIFEST.grosserSaalTagung.alt,
      },
      'offener-raum': {
        label: 'Fest & Bankett / Offener Raum',
        spatialNote: 'Festliche Tafeln oder freie Saalfläche für offene Bewegung im Raum.',
        suitableFor: 'Feste, Ausstellungen, Installationen, Märkte und offene Begegnung',
        imageUrl: IMAGE_MANIFEST.grosserSaalFest.url,
        imageAlt: IMAGE_MANIFEST.grosserSaalFest.alt,
      },
      gespraechskreis: {
        label: 'Abendformat & Stehtische',
        spatialNote: 'Stehtische und flexible Lichttechnik für Abendveranstaltungen.',
        suitableFor: 'Empfänge, Kulturabende, Bürgerdialoge und partizipative Formate',
        imageUrl: IMAGE_MANIFEST.grosserSaalAbend.url,
        imageAlt: IMAGE_MANIFEST.grosserSaalAbend.alt,
      },
    },
    svgBounds: {
      x: 150,
      y: 65,
      width: 320,
      height: 180,
      labelX: 310,
      labelY: 152,
    },
  },
  {
    id: 'multiraum',
    code: 'R18',
    indexLabel: '02.',
    name: 'Multiraum',
    categoryLabel: 'Flexibler Gruppen- und Projektraum',
    floor: 'EG',
    floorLabel: 'Erdgeschoss',
    verifiedAreaText: 'ca. 44 m² (laut Grundriss EG)',
    bookable: true,
    imageUrl: IMAGE_MANIFEST.multiraumEg.url,
    expectedImagePath: IMAGE_MANIFEST.multiraumEg.expectedPath,
    imageAlt: IMAGE_MANIFEST.multiraumEg.alt,
    imageCaption: IMAGE_MANIFEST.multiraumEg.caption,
    description:
      'Der Multiraum (R18) im Erdgeschoss bietet mit rund 44 m² einen überschaubaren, wandelbaren Rahmen für kleinere Gruppen, Bildungsangebote, Proben, Vereinsarbeit oder begleitende Workshop-Formate bei größeren Veranstaltungen.',
    architecturalCharacter:
      'Überschaubarer, gut proportionierter Erdgeschossraum mit direkter Anbindung an die Infrastruktur des Hauses.',
    availableArrangements: ['tische-seminar', 'gespraechskreis', 'reihenbestuhlung', 'offener-raum'],
    arrangements: {
      'tische-seminar': {
        label: 'Tische & Seminar',
        spatialNote: 'Flexible Arbeitstische für konzentriertes Arbeiten in kleiner Runde.',
        suitableFor: 'Seminare, Sprachkurse, Redaktions- und Projektgruppen',
      },
      gespraechskreis: {
        label: 'Gesprächskreis / Plenum',
        spatialNote: 'Offener Stuhlkreis ohne Tische für den direkten Austausch.',
        suitableFor: 'Initiativentreffen, Supervision, Erzählcafés und Moderationen',
      },
      reihenbestuhlung: {
        label: 'Reihenbestuhlung',
        spatialNote: 'Kompakte Stuhlreihen für kleinere Präsentationen.',
        suitableFor: 'Kammerlesungen, Impulsvorträge und Filmgespräche',
      },
      'offener-raum': {
        label: 'Offener Raum / Ausstellung',
        spatialNote: 'Freie Bodenfläche für Bewegung oder kleinere Präsentationen.',
        suitableFor: 'Bewegungsangebote, Proben oder begleitende Ausstellungsstationen',
      },
    },
    svgBounds: {
      x: 470,
      y: 65,
      width: 95,
      height: 115,
      labelX: 517,
      labelY: 120,
    },
  },
  {
    id: 'kueche-infrastruktur',
    code: 'R15',
    indexLabel: '03.',
    name: 'Küche mit Infopoint & Infrastruktur',
    categoryLabel: 'Versorgung & Nebenräume im Erdgeschoss',
    floor: 'EG',
    floorLabel: 'Erdgeschoss',
    verifiedAreaText: 'ca. 14+44 m² (laut Grundriss EG · nicht eigenständig buchbar)',
    bookable: false,
    imageUrl: IMAGE_MANIFEST.kuecheInfrastruktur.url,
    expectedImagePath: IMAGE_MANIFEST.kuecheInfrastruktur.expectedPath,
    imageAlt: IMAGE_MANIFEST.kuecheInfrastruktur.alt,
    imageCaption: IMAGE_MANIFEST.kuecheInfrastruktur.caption,
    description:
      'An das Erdgeschoss sind eine Küche sowie ergänzende Neben- und Sanitärräume angebunden. Sie unterstützen Veranstaltungen im Großen Saal und im Multiraum – vom Nachbarschaftskaffee bis zur Bewirtung bei Stadtteilfesten.',
    architecturalCharacter:
      'Funktionale Erdgeschoss-Infrastruktur mit kurzen Wegen zu den Veranstaltungsräumen.',
    availableArrangements: ['offener-raum', 'tische-seminar'],
    arrangements: {
      'offener-raum': {
        label: 'Offener Raum / Ausgabe',
        spatialNote: 'Nutzung als Vorbereitungs- und Ausgabebereich begleitend zu Veranstaltungen.',
        suitableFor: 'Empfänge, Pausenbewirtung, Nachbarschaftscafés und Feste',
      },
      'tische-seminar': {
        label: 'Gemeinschaftliches Kochen',
        spatialNote: 'Einbindung in kulinarische Nachbarschafts- und Begegnungsformate.',
        suitableFor: 'Kochgruppen, Stadtteilfrühstück und interkulturelle Abende',
      },
      reihenbestuhlung: {
        label: 'Reihenbestuhlung',
        spatialNote: 'Nicht vorgesehen (Infrastrukturbereich).',
        suitableFor: 'Unterstützende Infrastruktur',
      },
      gespraechskreis: {
        label: 'Gesprächskreis',
        spatialNote: 'Nicht vorgesehen (Infrastrukturbereich).',
        suitableFor: 'Unterstützende Infrastruktur',
      },
    },
    svgBounds: {
      x: 45,
      y: 65,
      width: 105,
      height: 180,
      labelX: 97,
      labelY: 152,
    },
  },
  {
    id: 'kleiner-saal-ug',
    code: 'UG-SAAL',
    indexLabel: '04.',
    name: 'Kleiner Saal im Untergeschoss',
    categoryLabel: 'Veranstaltungs- und Seminarraum',
    floor: 'UG',
    floorLabel: 'Untergeschoss',
    verifiedAreaText: 'Untergeschoss (laut offiziellen Vermietungsinformationen)',
    bookable: true,
    imageUrl: IMAGE_MANIFEST.kleinerSaalUg.url,
    expectedImagePath: IMAGE_MANIFEST.kleinerSaalUg.expectedPath,
    imageAlt: IMAGE_MANIFEST.kleinerSaalUg.alt,
    imageCaption: IMAGE_MANIFEST.kleinerSaalUg.caption,
    description:
      'Im Untergeschoss der CHAPEL befindet sich ein eigener Veranstaltungs- und Seminarraum. Er eignet sich besonders für Workshops, Bildungsformate, Proben, Vereinsversammlungen und regelmäßige Gruppenangebote im Stadtteil.',
    architecturalCharacter:
      'Ruhiger, eigenständiger Veranstaltungs- und Seminarbereich im Untergeschoss des Gebäudes.',
    availableArrangements: ['tische-seminar', 'reihenbestuhlung', 'gespraechskreis', 'offener-raum'],
    arrangements: {
      'tische-seminar': {
        label: 'Tische & Seminar',
        spatialNote: 'Gruppentische oder parlamentarische Anordnung für Lern- und Arbeitsformate.',
        suitableFor: 'Workshops, Fortbildungen, Nachbarschaftswerkstätten und Kurse',
      },
      reihenbestuhlung: {
        label: 'Reihenbestuhlung',
        spatialNote: 'Geschlossene Bestuhlung für Vorträge und Vorführungen im kleineren Rahmen.',
        suitableFor: 'Vorträge, Lesungen, Vereinsversammlungen und Filmabende',
      },
      gespraechskreis: {
        label: 'Gesprächskreis / Plenum',
        spatialNote: 'Offener Stuhlkreis für moderierte Runden und Gruppenprozesse.',
        suitableFor: 'Stadtteilforen, Selbsthilfegruppen und Diskussionsrunden',
      },
      'offener-raum': {
        label: 'Offener Raum',
        spatialNote: 'Freie Fläche für bewegungsorientierte oder szenische Proben.',
        suitableFor: 'Theaterproben, Chor- und Musikgruppen, Bewegungsangebote',
      },
    },
    svgBounds: {
      x: 150,
      y: 65,
      width: 245,
      height: 180,
      labelX: 272,
      labelY: 152,
    },
  },
  {
    id: 'besprechungsraum',
    code: 'UG-BESPR',
    indexLabel: '05.',
    name: 'Besprechungsraum',
    categoryLabel: 'Raum für Treffen & Arbeitsgruppen',
    floor: 'UG',
    floorLabel: 'Untergeschoss',
    verifiedAreaText: 'Untergeschoss (laut offiziellen Vermietungsinformationen)',
    bookable: true,
    imageUrl: IMAGE_MANIFEST.besprechungsraum.url,
    expectedImagePath: IMAGE_MANIFEST.besprechungsraum.expectedPath,
    imageAlt: IMAGE_MANIFEST.besprechungsraum.alt,
    imageCaption: IMAGE_MANIFEST.besprechungsraum.caption,
    description:
      'Für kleinere Treffen, Vorstandssitzungen, Beratungen und Projektplanungen steht ein separater Besprechungsraum zur Verfügung. Er bietet Initiativen und Gruppen aus der Südstadt einen verlässlichen Ort für regelmäßigen Austausch.',
    architecturalCharacter:
      'Abgeschirmter Besprechungsraum für konzentrierte Gespräche in kleiner Runde.',
    availableArrangements: ['tische-seminar', 'gespraechskreis'],
    arrangements: {
      'tische-seminar': {
        label: 'Besprechungstisch',
        spatialNote: 'Gemeinsamer Arbeitstisch für Sitzungen und Planungsrunden.',
        suitableFor: 'Vereins- und Initiativensitzungen, Beratungen, Redaktionstreffen',
      },
      gespraechskreis: {
        label: 'Gesprächskreis',
        spatialNote: 'Informelle Sitzrunde für vertrauliche Gespräche.',
        suitableFor: 'Austauschrunden, Mentoring und Nachbarschaftsberatung',
      },
      reihenbestuhlung: {
        label: 'Reihenbestuhlung',
        spatialNote: 'Für diesen Raum nicht vorgesehen.',
        suitableFor: 'Kleingruppenarbeit',
      },
      'offener-raum': {
        label: 'Offener Raum',
        spatialNote: 'Für diesen Raum nicht vorgesehen.',
        suitableFor: 'Kleingruppenarbeit',
      },
    },
    svgBounds: {
      x: 395,
      y: 65,
      width: 170,
      height: 180,
      labelX: 480,
      labelY: 152,
    },
  },
];

export const PROGRAM_CATEGORIES: ('Alle' | ProgramCategory)[] = [
  'Alle',
  'Musik & Konzerte',
  'Kunst & Ausstellungen',
  'Begegnung & Nachbarschaft',
  'Workshops & Bildung',
  'Gespräche & Diskussionen',
  'Feste & Gemeinschaft',
];

export const DEMO_PROGRAM_EVENTS: DemoProgramEvent[] = [
  {
    id: 'demo-musik-abend',
    indexLabel: '01.',
    category: 'Musik & Konzerte',
    title: 'Klang im Großen Saal: Offener Konzertabend',
    subtitle: 'Demonstrations-Eintrag · Beispielformat für Kammermusik und akustische Ensembles',
    demoSlotLabel: 'Demonstrations-Eintrag · Exemplarischer Freitagabend',
    weekdayShort: 'FR',
    dayNumber: '01',
    timeWindow: 'Abendveranstaltung (Beispiel)',
    roomId: 'grosser-saal',
    roomName: 'Großer Saal (R14)',
    organizerNote: 'Platzhalter für künftige Kalendereinträge (z. B. via Teamup)',
    description:
      'Dieser Demonstrations-Eintrag zeigt, wie Konzert- und Musikformate im Großen Saal präsentiert werden können. Im realen Betrieb werden hier verifizierte Termine, Mitwirkende und Hinweise zum Einlass direkt aus dem Veranstaltungskalender eingebunden.',
    imageUrl: IMAGE_MANIFEST.grosserSaalAbend.url,
    expectedImagePath: IMAGE_MANIFEST.grosserSaalAbend.expectedPath,
    imageAlt: IMAGE_MANIFEST.grosserSaalAbend.alt,
  },
  {
    id: 'demo-ausstellung-licht',
    indexLabel: '02.',
    category: 'Kunst & Ausstellungen',
    title: 'Raum & Buntglas: Temporäre Werkschau aus dem Stadtteil',
    subtitle: 'Demonstrations-Eintrag · Beispielformat für bildende Kunst und Installation',
    demoSlotLabel: 'Demonstrations-Eintrag · Exemplarisches Wochenende',
    weekdayShort: 'SA',
    dayNumber: '02',
    timeWindow: 'Tagesöffnung (Beispiel)',
    roomId: 'grosser-saal',
    roomName: 'Großer Saal (R14)',
    organizerNote: 'Platzhalter für künftige Kalendereinträge (z. B. via Teamup)',
    description:
      'Beispielhafte Darstellung einer Ausstellung im Großen Saal. Die offene Fläche von rund 300 m², die hellen Innenwandflächen und das Tageslicht der historischen Buntglasfenster ermöglichen Präsentationen von Künstlerinnen und Künstlern aus Heidelberg und der Region.',
    imageUrl: IMAGE_MANIFEST.grosserSaalReihen.url,
    expectedImagePath: IMAGE_MANIFEST.grosserSaalReihen.expectedPath,
    imageAlt: IMAGE_MANIFEST.grosserSaalReihen.alt,
  },
  {
    id: 'demo-nachbarschaft-cafe',
    indexLabel: '03.',
    category: 'Begegnung & Nachbarschaft',
    title: 'Offener Treffpunkt Südstadt: Kaffee, Gespräch & Austausch',
    subtitle: 'Demonstrations-Eintrag · Beispielformat für generationenübergreifende Begegnung',
    demoSlotLabel: 'Demonstrations-Eintrag · Exemplarischer Sonntagnachmittag',
    weekdayShort: 'SO',
    dayNumber: '03',
    timeWindow: 'Nachmittag (Beispiel)',
    roomId: 'multiraum',
    roomName: 'Multiraum (R18) & Küche',
    organizerNote: 'Platzhalter für künftige Kalendereinträge (z. B. via Teamup)',
    description:
      'Ein offenes Begegnungsformat für Nachbarinnen und Nachbarn aller Generationen. Die Verbindung von Multiraum und Erdgeschoss-Küche schafft einen unkomplizierten Rahmen zum Kennenlernen und Verweilen.',
    imageUrl: IMAGE_MANIFEST.kuecheInfrastruktur.url,
    expectedImagePath: IMAGE_MANIFEST.kuecheInfrastruktur.expectedPath,
    imageAlt: IMAGE_MANIFEST.kuecheInfrastruktur.alt,
  },
  {
    id: 'demo-workshop-bildung',
    indexLabel: '04.',
    category: 'Workshops & Bildung',
    title: 'Nachbarschaftswerkstatt: Gemeinsam Projekte im Quartier planen',
    subtitle: 'Demonstrations-Eintrag · Beispielformat für Seminare und Arbeitsgruppen',
    demoSlotLabel: 'Demonstrations-Eintrag · Exemplarischer Dienstagabend',
    weekdayShort: 'DI',
    dayNumber: '04',
    timeWindow: 'Abendtermin (Beispiel)',
    roomId: 'kleiner-saal-ug',
    roomName: 'Kleiner Saal im Untergeschoss',
    organizerNote: 'Platzhalter für künftige Kalendereinträge (z. B. via Teamup)',
    description:
      'Im Kleinen Saal im Untergeschoss finden Workshops, Kurse und offene Arbeitsgruppen Platz. Dieser Beispiel-Eintrag veranschaulicht die Einbindung von Bildungs- und Beteiligungsangeboten.',
    imageUrl: IMAGE_MANIFEST.kleinerSaalUg.url,
    expectedImagePath: IMAGE_MANIFEST.kleinerSaalUg.expectedPath,
    imageAlt: IMAGE_MANIFEST.kleinerSaalUg.alt,
  },
  {
    id: 'demo-diskurs-stadt',
    indexLabel: '05.',
    category: 'Gespräche & Diskussionen',
    title: 'Südstadt-Gespräch: Öffentliche Räume und Zusammenleben',
    subtitle: 'Demonstrations-Eintrag · Beispielformat für Podium und Bürgerdialog',
    demoSlotLabel: 'Demonstrations-Eintrag · Exemplarischer Donnerstagabend',
    weekdayShort: 'DO',
    dayNumber: '05',
    timeWindow: 'Abendtermin (Beispiel)',
    roomId: 'grosser-saal',
    roomName: 'Großer Saal (R14)',
    organizerNote: 'Platzhalter für künftige Kalendereinträge (z. B. via Teamup)',
    description:
      'Als Ort öffentlicher Debatte bietet die CHAPEL Raum für Gesprächsrunden zu Stadtentwicklung, Kultur und gesellschaftlichem Zusammenhalt in Heidelberg.',
    imageUrl: IMAGE_MANIFEST.grosserSaalTagung.url,
    expectedImagePath: IMAGE_MANIFEST.grosserSaalTagung.expectedPath,
    imageAlt: IMAGE_MANIFEST.grosserSaalTagung.alt,
  },
  {
    id: 'demo-fest-gemeinschaft',
    indexLabel: '06.',
    category: 'Feste & Gemeinschaft',
    title: 'Gemeinsames Quartiersfest rund um die CHAPEL',
    subtitle: 'Demonstrations-Eintrag · Beispielformat für saisonale Feste im Stadtteil',
    demoSlotLabel: 'Demonstrations-Eintrag · Exemplarischer Samstag',
    weekdayShort: 'SA',
    dayNumber: '06',
    timeWindow: 'Ganztägig (Beispiel)',
    roomId: 'grosser-saal',
    roomName: 'Gesamtes Haus (EG & UG)',
    organizerNote: 'Platzhalter für künftige Kalendereinträge (z. B. via Teamup)',
    description:
      'Bei Stadtteilfesten wirken alle Bereiche des Hauses zusammen – vom Großen Saal über den Multiraum bis zur Küche und den Räumen im Untergeschoss.',
    imageUrl: IMAGE_MANIFEST.aussenansichtVorplatz.url,
    expectedImagePath: IMAGE_MANIFEST.aussenansichtVorplatz.expectedPath,
    imageAlt: IMAGE_MANIFEST.aussenansichtVorplatz.alt,
  },
];

export const PARTICIPATION_AREAS: ParticipationArea[] = [
  {
    id: 'engagement',
    indexLabel: '01.',
    title: 'ENGAGEMENT',
    statusNote: 'Bestehende Mitwirkung & künftige Ausbaumöglichkeiten',
    summary:
      'Ein Bürger- und Kulturzentrum lebt davon, dass Menschen Verantwortung übernehmen – bei der Vorbereitung von Veranstaltungen, in der Organisation oder in Arbeitsgruppen des Trägervereins.',
    currentPossibilities: [
      'Mitwirkung im Trägerverein CHAPEL – Raum für Stadtkultur e.V. und seinen Arbeitskreisen',
      'Praktische Unterstützung bei Veranstaltungen, Aufbau und Nachbarschaftsangeboten',
    ],
    futurePerspectives: [
      'Koordinierte Ehrenamts- und Gastgeberdienste für regelmäßige offene Hauszeiten',
      'Strukturierte Begleitung neuer Engagementgruppen im Stadtteil',
    ],
  },
  {
    id: 'initiativen',
    indexLabel: '02.',
    title: 'INITIATIVEN',
    statusNote: 'Räume & Vernetzung für Gruppen im Stadtteil',
    summary:
      'Vereine, Nachbarschaftsinitiativen und kulturelle Gruppen finden in der CHAPEL Räume für Treffen, Proben, Vorträge und gemeinsame Projekte.',
    currentPossibilities: [
      'Nutzung der Räume (Großer Saal, Multiraum, Kleiner Saal im UG, Besprechungsraum) nach Anfrage',
      'Austausch mit den vier Gründungs- und Trägerorganisationen vor Ort',
    ],
    futurePerspectives: [
      'Regelmäßige Vernetzungstreffen der Initiativen in der Südstadt',
      'Gemeinsame Themenwochen und kooperative Veranstaltungsreihen',
    ],
  },
  {
    id: 'begegnung',
    indexLabel: '03.',
    title: 'BEGEGNUNG',
    statusNote: 'Offene Orte für alle Generationen',
    summary:
      'Die CHAPEL versteht sich als niederschwelliger Treffpunkt, an dem Menschen unterschiedlicher Herkunft, Lebenslagen und Generationen ins Gespräch kommen können.',
    currentPossibilities: [
      'Teilnahme an öffentlichen Kultur-, Bildungs- und Nachbarschaftsveranstaltungen im Haus',
      'Offene Formate in Zusammenarbeit mit sozialen und kulturellen Trägern',
    ],
    futurePerspectives: [
      'Verlässliche offene Nachbarschaftszeiten als Treffpunkt im Quartier',
      'Generationenübergreifende Erzähl-, Musik- und Lernformate',
    ],
  },
  {
    id: 'ideen-einbringen',
    indexLabel: '04.',
    title: 'IDEEN EINBRINGEN',
    statusNote: 'Offene Einladung zur Mitgestaltung',
    summary:
      'Ob Konzertidee, Diskussionsabend, Workshop oder Nachbarschaftsprojekt: Die CHAPEL lebt von Impulsen aus der Stadtgesellschaft.',
    currentPossibilities: [
      'Unverbindliche Raum- und Projektanfrage für eigene Veranstaltungsformate',
      'Direkte Kontaktaufnahme mit dem Verein CHAPEL e.V.',
    ],
    futurePerspectives: [
      'Offene Ideenwerkstätten für neue Kultur- und Gemeinschaftsformate',
      'Kuratorische Begleitung für Erstveranstalterinnen und Erstveranstalter aus dem Stadtteil',
    ],
  },
];

export const STADTLABOR_PROJECTS: StadtlaborProject[] = [
  {
    id: 'roemerstrasse',
    indexLabel: '01.',
    title: 'RÖMERSTRASSE NEU DENKEN',
    focusArea: 'Verkehr, Sicherheit, öffentlicher Raum und Aufenthaltsqualität',
    summary:
      'Wie kann eine zentrale Verkehrsachse der Südstadt zu einem sichereren, ruhigeren und lebenswerteren Stadtraum für Fußgängerinnen, Radfahrende und Anwohnende werden? Das Themenfeld sammelt Beobachtungen und Ideen aus der Nachbarschaft.',
    guidingQuestions: [
      'Wo fehlen sichere Querungen, Aufenthaltsflächen und Begrünung?',
      'Wie lassen sich Schulwege, Radverkehr und Nachbarschaftsleben besser verbinden?',
    ],
    imageUrl: IMAGE_MANIFEST.aussenansichtVorplatz.url,
    expectedImagePath: IMAGE_MANIFEST.aussenansichtVorplatz.expectedPath,
    imageAlt: IMAGE_MANIFEST.aussenansichtVorplatz.alt,
    imageCaption: 'Impulsfeld 01 — Stadtraum und Wegebeziehungen rund um die CHAPEL.',
  },
  {
    id: 'kultur-im-stadtteil',
    indexLabel: '02.',
    title: 'KULTUR IM STADTTEIL',
    focusArea: 'Veranstaltungen, Feste, öffentliche Kulturaktivitäten und Nachbarschaftskooperation',
    summary:
      'Kultur findet nicht nur hinter geschlossenen Türen statt. Dieses Experimentierfeld fragt, wie Musik, Kunst und Literatur im Alltag der Südstadt sichtbar werden und neue Kooperationen zwischen Kulturschaffenden und Vereinen entstehen können.',
    guidingQuestions: [
      'Welche kulturellen Formate erreichen Menschen, die selten klassische Kulturorte besuchen?',
      'Wie können lokale Initiativen, Schulen und Kulturschaffende gemeinsam Programme entwickeln?',
    ],
    imageUrl: IMAGE_MANIFEST.illuminationNacht.url,
    expectedImagePath: IMAGE_MANIFEST.illuminationNacht.expectedPath,
    imageAlt: IMAGE_MANIFEST.illuminationNacht.alt,
    imageCaption: 'Impulsfeld 02 — Kulturelle Teilhabe und offene Formate im Quartier.',
  },
  {
    id: 'oeffentliche-raeume',
    indexLabel: '03.',
    title: 'ÖFFENTLICHE RÄUME GESTALTEN',
    focusArea: 'Orte für Begegnung, Barrierefreiheit und gemeinschaftliche Nutzung',
    summary:
      'Gute öffentliche Räume laden zum Verweilen ein, ohne Konsumzwang und ohne Hürden. Im Fokus stehen Zugänglichkeit, Barrierefreiheit und die Frage, wie Innen- und Außenräume gemeinschaftlich genutzt werden können.',
    guidingQuestions: [
      'Was macht einen öffentlichen Ort für ältere Menschen, Familien und Jugendliche gleichermaßen einladend?',
      'Wie können Barrieren im physischen und sozialen Zugang abgebaut werden?',
    ],
    imageUrl: IMAGE_MANIFEST.aussenansichtOstseite.url,
    expectedImagePath: IMAGE_MANIFEST.aussenansichtOstseite.expectedPath,
    imageAlt: IMAGE_MANIFEST.aussenansichtOstseite.alt,
    imageCaption: 'Impulsfeld 03 — Offene, barrierearme Räume für gemeinschaftliche Nutzung.',
  },
  {
    id: 'gemeinsam-stadt-entwickeln',
    indexLabel: '04.',
    title: 'GEMEINSAM STADT ENTWICKELN',
    focusArea: 'Beteiligung, bürgerschaftliche Initiativen und Zusammenarbeit',
    summary:
      'Nach der baulichen Konversion der Südstadt beginnt die soziale Gestaltung des Quartiers. Dieses Feld untersucht, wie bürgerschaftliche Beteiligung verstetigt und Ideen aus der Nachbarschaft in konkrete Projekte übersetzt werden können.',
    guidingQuestions: [
      'Welche Werkzeuge erleichtern die Zusammenarbeit zwischen Initiativen, Verwaltung und Bürgerschaft?',
      'Wie kann die CHAPEL als offene Plattform für Stadtteilentwicklung wirken?',
    ],
    imageUrl: IMAGE_MANIFEST.kleinerSaalUg.url,
    expectedImagePath: IMAGE_MANIFEST.kleinerSaalUg.expectedPath,
    imageAlt: IMAGE_MANIFEST.kleinerSaalUg.alt,
    imageCaption: 'Impulsfeld 04 — Kooperative Stadtentwicklung und Nachbarschaftsdialog.',
  },
];

export const HISTORICAL_MILESTONES: HistoricalMilestone[] = [...VERIFIED_FACTS.milestones];

export const FOUNDING_ORGANIZATIONS: FoundingOrganization[] = [
  ...VERIFIED_FACTS.foundingOrganizations,
];
