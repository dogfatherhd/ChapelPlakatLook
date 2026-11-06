/**
 * Centralized Factual Database for CHAPEL – Raum für Stadtkultur e.V.
 * Strictly separated into three categories:
 * 1. VERIFIED_FACTS
 * 2. DOCUMENTED_PAST_ACTIVITIES
 * 3. EXPERIMENTAL_FUTURE_IDEAS
 */

export const VERIFIED_FACTS = {
  institution: {
    officialName: 'CHAPEL – Raum für Stadtkultur e.V.',
    shortName: 'CHAPEL',
    subtitle: 'Raum für Stadtkultur.',
    address: {
      street: 'Rheinstraße 12/4',
      zipCity: '69126 Heidelberg',
      district: 'Heidelberg-Südstadt',
    },
    existingWebsite: 'https://chapel-heidelberg.com/',
    missionPillars: [
      'Kultur',
      'Bildung',
      'Soziale Begegnung',
      'Bürgerschaftliche Teilhabe',
      'Stadtteilentwicklung',
      'Zusammenarbeit lokaler Organisationen',
    ] as const,
    historicalContext:
      'Das Bürger- und Kulturzentrum CHAPEL ging aus der Konversion ehemaliger amerikanischer Militärflächen in der Heidelberger Südstadt hervor. Es wurde von Beginn an als offener Ort für Kultur, Bildung, soziale Begegnung und aktives Nachbarschaftsleben konzipiert.',
  },
  milestones: [
    {
      year: '1951',
      title: 'Errichtung als amerikanische Militärkirche',
      detail:
        'Bau der ehemaligen amerikanischen Garnisonskapelle in der Heidelberger Südstadt.',
    },
    {
      year: '2016',
      title: 'Gründung des Trägervereins',
      detail:
        'Gründung des gemeinnützigen Trägervereins CHAPEL – Raum für Stadtkultur e.V.',
    },
    {
      year: 'September 2021',
      title: 'Eröffnung als Bürger- und Kulturzentrum',
      detail:
        'Nach der Sanierung und Umgestaltung öffnet das Haus im September 2021 als öffentliches Bürger- und Kulturzentrum.',
    },
  ],
  foundingOrganizations: [
    {
      name: 'Stadtteilverein Heidelberg-Südstadt e.V.',
      roleDescription: 'Gründungsorganisation aus dem Stadtteil Heidelberg-Südstadt.',
    },
    {
      name: 'Caritasverband Heidelberg Rhein-Neckar',
      roleDescription: 'Gründungsorganisation im Bereich Soziales und Gemeinwesen.',
    },
    {
      name: 'effata Eine-Welt-Kreis e.V.',
      roleDescription: 'Gründungsorganisation für globale Verantwortung und Begegnung.',
    },
    {
      name: 'formAD e.V.',
      roleDescription: 'Gründungsorganisation für Architektur, Gestaltung und Baukultur.',
    },
  ],
  spaces: {
    groundFloorPlanReference: '/images/grundriss-eg.jpeg',
    bookableRooms: [
      {
        id: 'grosser-saal',
        code: 'R14',
        name: 'Großer Saal',
        floor: 'EG' as const,
        floorLabel: 'Erdgeschoss',
        areaNote: 'ca. 300 m² (laut Grundriss EG)',
      },
      {
        id: 'multiraum',
        code: 'R18',
        name: 'Multiraum',
        floor: 'EG' as const,
        floorLabel: 'Erdgeschoss',
        areaNote: 'ca. 44 m² (laut Grundriss EG)',
      },
      {
        id: 'kleiner-saal-ug',
        code: 'UG',
        name: 'Kleiner Saal im Untergeschoss',
        floor: 'UG' as const,
        floorLabel: 'Untergeschoss',
        areaNote: 'Laut offiziellen Vermietungsinformationen (kein Grundriss vorhanden)',
      },
      {
        id: 'besprechungsraum',
        code: 'UG',
        name: 'Besprechungsraum',
        floor: 'UG' as const,
        floorLabel: 'Untergeschoss',
        areaNote: 'Laut offiziellen Vermietungsinformationen (kein Grundriss vorhanden)',
      },
    ],
    supportingInfrastructure: [
      {
        id: 'kueche-infopoint',
        code: 'R15',
        name: 'Küche mit Infopoint',
        floor: 'EG' as const,
        floorLabel: 'Erdgeschoss',
        areaNote: 'ca. 14+44 m² (laut Grundriss EG · ergänzende Infrastruktur, nicht eigenständig buchbar)',
      },
    ],
  },
} as const;

export interface DocumentedActivity {
  id: string;
  title: string;
  category: string;
  responsibility: 'CHAPEL e.V. / Hausprogramm' | 'Eigenständige bürgerschaftliche Initiative';
  summary: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const DOCUMENTED_PAST_ACTIVITIES: DocumentedActivity[] = [
  {
    id: 'suedstadtfest',
    title: 'Südstadtfest',
    category: 'Stadtteil & Gemeinschaft',
    responsibility: 'CHAPEL e.V. / Hausprogramm',
    summary:
      'Dokumentiertes Nachbarschafts- und Stadtteilfest rund um die CHAPEL und den Vorplatz in der Heidelberger Südstadt.',
    imageUrl: '/images/aussenansicht-vorplatz.jpeg',
    imageAlt: 'Außenansicht der CHAPEL mit Vorplatz und Tischen',
  },
  {
    id: 'chapel-jubilaeum',
    title: 'CHAPEL-Jubiläum',
    category: 'Haus & Verein',
    responsibility: 'CHAPEL e.V. / Hausprogramm',
    summary:
      'Dokumentierte Jubiläumsveranstaltung des Bürger- und Kulturzentrums seit der Eröffnung im September 2021.',
    imageUrl: '/images/grosser-saal-fest.jpeg',
    imageAlt: 'Großer Saal (R14) festlich gedeckt',
  },
  {
    id: 'st-martins-umzug',
    title: 'St.-Martins-Umzug',
    category: 'Begegnung & Nachbarschaft',
    responsibility: 'CHAPEL e.V. / Hausprogramm',
    summary:
      'Dokumentierter Laternen- und St.-Martins-Umzug für Familien und Nachbarschaft in der Südstadt.',
    imageUrl: '/images/illumination-nacht.jpg',
    imageAlt: 'Abendliche Illumination der CHAPEL-Fassade',
  },
  {
    id: 'nachbarschafts-kulturveranstaltungen',
    title: 'Nachbarschafts- und Kulturveranstaltungen',
    category: 'Kultur & Bildung',
    responsibility: 'CHAPEL e.V. / Hausprogramm',
    summary:
      'Konzerte, Tagungen, Vorträge, Kurse und Versammlungen von Vereinen, Kulturschaffenden und Gruppen aus dem Stadtteil.',
    imageUrl: '/images/grosser-saal-reihen.webp',
    imageAlt: 'Großer Saal (R14) mit Reihenbestuhlung',
  },
  {
    id: 'roemer30',
    title: 'Römer30',
    category: 'Bürgerschaftliche Initiative',
    responsibility: 'Eigenständige bürgerschaftliche Initiative',
    summary:
      'Eigenständige bürgerschaftliche Initiative in der Heidelberger Südstadt zu Fragen des öffentlichen Raums und der Verkehrssicherheit (keine Trägerschaft durch CHAPEL e.V.).',
  },
];

export const EXPERIMENTAL_FUTURE_IDEAS = {
  disclaimer:
    'Experimentelles Konzept · Kein beschlossenes Vereinsprogramm von CHAPEL – Raum für Stadtkultur e.V.',
  editorialStatement: 'Ein Haus. Viele Möglichkeiten.',
  editorialStatementNote:
    'Redaktioneller Leitgedanke dieser konzeptionellen Website – kein offiziell beschlossener Slogan.',
  stadtlaborHeadline: 'Die Südstadt gemeinsam weiterdenken.',
  stadtlaborText: [
    'Die bauliche Veränderung der Südstadt hat neue Räume geschaffen. Ihre gesellschaftliche Entwicklung geht weiter.',
    'Wie wollen wir unsere Straßen und Plätze nutzen? Wie schaffen wir Begegnung? Und wie können Menschen ihre Nachbarschaft aktiv mitgestalten?',
    'Das Stadtlabor zeigt Ideen und Möglichkeiten einer lebendigen Südstadt.',
  ],
} as const;
