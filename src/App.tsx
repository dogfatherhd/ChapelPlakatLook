/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import {
  ArrangementKey,
  CHAPEL_ROOMS,
  ChapelRoom,
  DemoProgramEvent,
  FloorLevel,
  FOUNDING_ORGANIZATIONS,
  HISTORICAL_MILESTONES,
  IMAGES,
  INSTITUTION_INFO,
  LightingMood,
  PARTICIPATION_AREAS,
  STADTLABOR_PROJECTS,
} from './data/chapelData';
import { EXPERIMENTAL_FUTURE_IDEAS, VERIFIED_FACTS } from './data/chapelFacts';
import { ChapelLogo } from './components/ChapelLogo';
import { MonsteraFoliageAccent, StringLightsDivider } from './components/PosterMotifs';
import { ResilientImage } from './components/ResilientImage';
import { ProgrammSection } from './components/ProgrammSection';
import { RaumExplorer } from './components/RaumExplorer';
import { RaumAnfrageModal } from './components/RaumAnfrageModal';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';

export default function App() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('grosser-saal');
  const [selectedFloor, setSelectedFloor] = useState<FloorLevel>('EG');
  const [selectedArrangement, setSelectedArrangement] =
    useState<ArrangementKey>('reihenbestuhlung');
  const [lightingMood, setLightingMood] = useState<LightingMood>('tageslicht');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalRoomId, setModalRoomId] = useState<string>('grosser-saal');
  const [modalArrangement, setModalArrangement] =
    useState<ArrangementKey>('reihenbestuhlung');
  const [modalEventType, setModalEventType] = useState<string>('');

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileMenuOpen]);

  const handleOpenRoomRequest = (room: ChapelRoom, arrangement: ArrangementKey) => {
    setModalRoomId(room.id);
    setModalArrangement(arrangement);
    setModalEventType('');
    setModalOpen(true);
  };

  const handleOpenHeaderRequest = () => {
    setModalRoomId(selectedRoomId);
    setModalArrangement(selectedArrangement);
    setModalEventType('');
    setModalOpen(true);
  };

  const handleInquireEventFormat = (ev: DemoProgramEvent) => {
    setModalRoomId(ev.roomId);
    setModalArrangement('reihenbestuhlung');
    setModalEventType(`${ev.category}: ${ev.title}`);
    setModalOpen(true);
  };

  const handleInspectRoom = (roomId: string) => {
    const targetRoom = CHAPEL_ROOMS.find((r) => r.id === roomId);
    if (targetRoom) {
      setSelectedFloor(targetRoom.floor);
      setSelectedRoomId(targetRoom.id);
      const el = document.getElementById('raeume');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div id="startseite" className="min-h-screen flex flex-col bg-[#FBF2E3] text-[#134A4B]">
      {/* WCAG 2.2 AA Skip Link */}
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#8B1E1E] focus:text-[#FBF2E3] focus:rounded-md focus:text-xs focus:font-semibold"
      >
        Zum Hauptinhalt springen
      </a>

      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FBF2E3]/95 backdrop-blur-xs border-b-2 border-[#134A4B]/20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Official Circular CHAPEL Logo (Strong Black) + Wordmark */}
          <a
            href="#startseite"
            className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] rounded-md"
          >
            <ChapelLogo variant="light" size={38} />
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#134A4B]"
          >
            <a
              href="#das-haus"
              className="hover:text-[#8B1E1E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Das Haus
            </a>
            <a
              href="#raeume"
              className="hover:text-[#8B1E1E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Räume
            </a>
            <a
              href="#kultur"
              className="hover:text-[#8B1E1E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Kultur
            </a>
            <a
              href="#gemeinschaft"
              className="hover:text-[#8B1E1E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Gemeinschaft
            </a>
            <a
              href="#stadtlabor"
              className="hover:text-[#8B1E1E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Stadtlabor
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleOpenHeaderRequest}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FBF2E3] bg-[#8B1E1E] rounded-md hover:bg-[#701616] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E]"
            >
              Raum anfragen
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 text-[#134A4B] hover:text-[#8B1E1E] rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="lg:hidden border-t border-[#134A4B]/20 bg-[#FBF2E3] px-6 py-4 flex flex-col gap-2 text-sm font-semibold text-[#134A4B]"
          >
            <a
              href="#das-haus"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#8B1E1E]"
            >
              Das Haus &amp; Geschichte
            </a>
            <a
              href="#leben-im-haus"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#8B1E1E]"
            >
              Leben in der CHAPEL
            </a>
            <a
              href="#raeume"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#8B1E1E]"
            >
              Räume &amp; Grundriss
            </a>
            <a
              href="#kultur"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#8B1E1E]"
            >
              Kultur &amp; Veranstaltungen
            </a>
            <a
              href="#gemeinschaft"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#8B1E1E]"
            >
              Gemeinschaft &amp; Mitmachen
            </a>
            <a
              href="#stadtlabor"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#8B1E1E]"
            >
              Stadtlabor Südstadt
            </a>
          </nav>
        )}
      </header>

      <main id="hauptinhalt" className="flex-1">
        {/* =====================================================================
            SECTION 1 – HERO (Anniversary Poster Visual Universe)
            ===================================================================== */}
        <section className="border-b border-[#134A4B]/20 bg-[#FBF2E3] relative overflow-hidden">
          {/* Stylized Botanical Monstera Foliage in Soft Sage (#6C9A8B) */}
          <MonsteraFoliageAccent className="hidden md:block absolute -top-6 -right-6 w-56 h-56 pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12 md:py-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left 6 Columns: Bold Condensed Poster Typography */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#134A4B] font-semibold mb-3">
                    {INSTITUTION_INFO.officialName} · {INSTITUTION_INFO.address.district}
                  </p>

                  <h1 className="font-poster text-6xl sm:text-7xl lg:text-[5.25rem] font-bold uppercase text-[#8B1E1E] leading-[0.95] tracking-tight">
                    {INSTITUTION_INFO.shortName}
                    <span className="block text-3xl sm:text-4xl lg:text-[2.65rem] text-[#134A4B] mt-2">
                      {INSTITUTION_INFO.subtitle}
                    </span>
                  </h1>

                  {/* Deep Petrol Accent Rule & Poster Motto */}
                  <div className="mt-6 pt-5 border-t-4 border-[#134A4B] max-w-lg">
                    <p className="font-poster text-2xl sm:text-3xl font-bold uppercase text-[#134A4B] leading-tight">
                      {INSTITUTION_INFO.editorialStatement}
                    </p>
                    <p className="mt-1.5 text-xs uppercase tracking-wider text-[#8B1E1E] font-semibold">
                      Raum für Stadtkultur · Für alle · Seit 2016
                    </p>
                  </div>

                  <p className="mt-5 text-base text-[#134A4B]/85 leading-relaxed max-w-lg">
                    Mitten in der Heidelberger Südstadt steht ein Haus, das Menschen
                    zusammenbringt. Die ehemalige amerikanische Garnisonskirche ist heute ein
                    offener Ort für Kultur, Begegnung und gemeinsames Engagement.
                  </p>
                </div>

                {/* Three Direct Calls to Action */}
                <div className="mt-8 pt-6 border-t border-[#134A4B]/20 flex flex-wrap items-center gap-3">
                  <a
                    href="#kultur"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#8B1E1E] text-[#FBF2E3] text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-[#701616] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E]"
                  >
                    Programm entdecken
                    <ArrowDown className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#raeume"
                    className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#134A4B] text-[#FBF2E3] text-sm font-semibold uppercase tracking-wider rounded-md hover:bg-[#0E3839] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#134A4B]"
                  >
                    Räume kennenlernen
                  </a>
                  <a
                    href="#gemeinschaft"
                    className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[#134A4B] hover:text-[#8B1E1E] transition-colors whitespace-nowrap shrink-0"
                  >
                    Mitmachen
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right 6 Columns: Large Authentic Interior Photograph Framed in Warm Peach */}
              <div className="lg:col-span-6 flex flex-col">
                <figure className="flex-1 flex flex-col bg-[#F3E1C8] p-3.5 border-2 border-[#134A4B]/25 rounded-lg">
                  <div className="relative flex-1 min-h-[320px] lg:min-h-[450px] rounded-md overflow-hidden border border-[#134A4B]/20 bg-[#FBF2E3]">
                    <ResilientImage
                      src={IMAGES.mainHall.url}
                      expectedPath={IMAGES.mainHall.expectedPath}
                      alt={IMAGES.mainHall.alt}
                      fallbackTitle="CHAPEL Heidelberg – Großer Saal (R14)"
                      priority={true}
                      className="w-full h-full lg:h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-xs text-[#134A4B]/80 mt-3 px-1 leading-relaxed">
                    {IMAGES.mainHall.caption}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Warm Ochre Festive String-Light Divider */}
          <StringLightsDivider className="w-full h-9 bg-[#FBF2E3]" />

          {/* Full-Width Deep Petrol Ribbon: Six Original Mission Pillars */}
          <div className="bg-[#134A4B] text-[#FBF2E3]">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10">
              <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#FBF2E3]/20">
                {VERIFIED_FACTS.institution.missionPillars.map((pillar, idx) => (
                  <div key={pillar} className="py-5 px-3.5 first:pl-0 last:pr-0">
                    <dt className="text-xs uppercase tracking-widest text-[#D98A3C] font-semibold tabular-nums">
                      0{idx + 1}
                    </dt>
                    <dd className="mt-1 font-poster text-lg font-bold uppercase text-[#FBF2E3] leading-snug">
                      {pillar}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 2 – THE BUILDING (Warm Peach Background & Architectural Story)
            ===================================================================== */}
        <section
          id="das-haus"
          className="py-20 md:py-24 border-b border-[#134A4B]/20 bg-[#F3E1C8] text-[#134A4B]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left 5 Columns: Narrative & Verified Milestones */}
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-2">
                  02 · Das Gebäude &amp; seine Geschichte
                </p>
                <h2 className="text-4xl md:text-5xl font-poster font-bold uppercase text-[#134A4B] text-balance leading-[1.02] tracking-tight">
                  Ein Gebäude mit Geschichte. Ein Ort mit Zukunft.
                </h2>

                <div className="mt-6 space-y-4 text-base text-[#134A4B]/85 leading-relaxed">
                  <p>{VERIFIED_FACTS.institution.historicalContext}</p>
                  <p>
                    Helle Innenwandflächen, historische Buntglasfenster, ein warmer Holzboden und
                    der ehemalige Altarbereich verbinden die Geschichte des Hauses mit moderner
                    Veranstaltungsinfrastruktur.
                  </p>
                </div>

                {/* Verified Historical Timeline */}
                <ol className="mt-8 p-6 bg-[#FBF2E3] border-2 border-[#134A4B]/20 rounded-lg space-y-5">
                  {HISTORICAL_MILESTONES.map((item) => (
                    <li
                      key={item.year}
                      className="pb-5 border-b border-[#134A4B]/15 last:border-b-0 last:pb-0"
                    >
                      <span className="inline-block px-2.5 py-0.5 bg-[#8B1E1E] text-[#FBF2E3] text-xs font-bold uppercase tracking-wider rounded-xs tabular-nums">
                        {item.year}
                      </span>
                      <h3 className="font-poster text-xl font-bold uppercase text-[#134A4B] mt-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#134A4B]/80 leading-relaxed mt-1">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Right 7 Columns: Large Authentic Architectural Photography */}
              <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                <figure className="flex flex-col bg-[#FBF2E3] p-3.5 border-2 border-[#134A4B]/20 rounded-lg">
                  <div className="aspect-[16/10] w-full rounded-md overflow-hidden border border-[#134A4B]/20 bg-[#F3E1C8]">
                    <ResilientImage
                      src={IMAGES.eastSide.url}
                      expectedPath={IMAGES.eastSide.expectedPath}
                      alt={IMAGES.eastSide.alt}
                      fallbackTitle="Ostseite der CHAPEL (2021)"
                    />
                  </div>
                  <figcaption className="mt-3 px-1 text-xs text-[#134A4B]/80">
                    {IMAGES.eastSide.caption}
                  </figcaption>
                </figure>

                <figure className="flex flex-col bg-[#FBF2E3] p-3.5 border-2 border-[#134A4B]/20 rounded-lg">
                  <div className="aspect-[16/9] w-full rounded-md overflow-hidden border border-[#134A4B]/20 bg-[#F3E1C8]">
                    <ResilientImage
                      src={IMAGES.exterior.url}
                      expectedPath={IMAGES.exterior.expectedPath}
                      alt={IMAGES.exterior.alt}
                      fallbackTitle="Außenansicht mit Vorplatz"
                    />
                  </div>
                  <figcaption className="mt-3 px-1 text-xs text-[#134A4B]/80">
                    {IMAGES.exterior.caption}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3 – LIFE INSIDE CHAPEL (Deep Petrol Section with Warm Cream Cards)
            ===================================================================== */}
        <section
          id="leben-im-haus"
          className="py-20 md:py-24 border-b border-[#FBF2E3]/20 bg-[#134A4B] text-[#FBF2E3]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 items-end">
              <div className="lg:col-span-6">
                <p className="text-xs uppercase tracking-widest text-[#D98A3C] font-semibold mb-2">
                  03 · Leben in der CHAPEL
                </p>
                <h2 className="text-4xl md:text-5xl font-poster font-bold uppercase text-[#FBF2E3] text-balance leading-[1.02] tracking-tight">
                  Ein Ort, der verbindet.
                </h2>
              </div>
              <div className="lg:col-span-6 text-base text-[#F3E1C8] leading-relaxed">
                <p>
                  Hier finden Veranstaltungen statt, Initiativen begegnen sich und Ideen bekommen
                  Raum. Drei Zugänge zeigen, wie das Haus im Alltag genutzt wird:
                </p>
              </div>
            </div>

            {/* Three Primary Pathways with Authentic Event & Community Photographs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-[#FBF2E3] text-[#134A4B] rounded-lg overflow-hidden flex flex-col justify-between border-2 border-[#D98A3C]/40">
                <div>
                  <div className="aspect-[4/3] w-full bg-[#F3E1C8] overflow-hidden">
                    <ResilientImage
                      src={IMAGES.communityGathering.url}
                      expectedPath={IMAGES.communityGathering.expectedPath}
                      alt={IMAGES.communityGathering.alt}
                      fallbackTitle="Kultur erleben"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
                      01 · Kultur erleben
                    </p>
                    <h3 className="mt-2 font-poster text-2xl font-bold uppercase text-[#134A4B]">
                      KULTUR ERLEBEN
                    </h3>
                    <p className="mt-3 text-sm text-[#134A4B]/85 leading-relaxed">
                      Konzerte, Ausstellungen, Gespräche, Feste und Veranstaltungen. Kultur wird
                      lebendig, wenn Menschen sie miteinander teilen.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-3 border-t border-[#134A4B]/15">
                  <a
                    href="#kultur"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8B1E1E] hover:underline"
                  >
                    Zu Kultur &amp; Veranstaltungen
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="bg-[#FBF2E3] text-[#134A4B] rounded-lg overflow-hidden flex flex-col justify-between border-2 border-[#6C9A8B]/50">
                <div>
                  <div className="aspect-[4/3] w-full bg-[#F3E1C8] overflow-hidden">
                    <ResilientImage
                      src={IMAGES.stainedGlassHall.url}
                      expectedPath={IMAGES.stainedGlassHall.expectedPath}
                      alt={IMAGES.stainedGlassHall.alt}
                      fallbackTitle="Räume nutzen"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-[#6C9A8B] font-semibold">
                      02 · Räume nutzen
                    </p>
                    <h3 className="mt-2 font-poster text-2xl font-bold uppercase text-[#134A4B]">
                      RÄUME NUTZEN
                    </h3>
                    <p className="mt-3 text-sm text-[#134A4B]/85 leading-relaxed">
                      Vom großen ehemaligen Kirchenraum bis zum kleinen Besprechungsraum: Die CHAPEL
                      bietet Platz für unterschiedliche Menschen, Ideen und Anlässe.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-3 border-t border-[#134A4B]/15">
                  <a
                    href="#raeume"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#134A4B] hover:text-[#8B1E1E]"
                  >
                    Räume &amp; Grundriss entdecken
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="bg-[#FBF2E3] text-[#134A4B] rounded-lg overflow-hidden flex flex-col justify-between border-2 border-[#D98A3C]/40">
                <div>
                  <div className="aspect-[4/3] w-full bg-[#F3E1C8] overflow-hidden">
                    <ResilientImage
                      src={IMAGES.seminarLower.url}
                      expectedPath={IMAGES.seminarLower.expectedPath}
                      alt={IMAGES.seminarLower.alt}
                      fallbackTitle="Gemeinschaft gestalten"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
                      03 · Gemeinschaft gestalten
                    </p>
                    <h3 className="mt-2 font-poster text-2xl font-bold uppercase text-[#134A4B]">
                      GEMEINSCHAFT GESTALTEN
                    </h3>
                    <p className="mt-3 text-sm text-[#134A4B]/85 leading-relaxed">
                      Vereine, Initiativen, Nachbarn und Engagierte finden hier Möglichkeiten, sich
                      zu begegnen, zusammenzuarbeiten und selbst aktiv zu werden.
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-3 border-t border-[#134A4B]/15">
                  <a
                    href="#gemeinschaft"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8B1E1E] hover:underline"
                  >
                    Mitmachen &amp; vernetzen
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 4 – ROOM EXPLORER (Interactive Ground-Floor Plan + Basement Cards)
            ===================================================================== */}
        <RaumExplorer
          selectedRoomId={selectedRoomId}
          onSelectRoom={setSelectedRoomId}
          selectedFloor={selectedFloor}
          onSelectFloor={setSelectedFloor}
          selectedArrangement={selectedArrangement}
          onSelectArrangement={setSelectedArrangement}
          lightingMood={lightingMood}
          onSelectLighting={setLightingMood}
          onRequestRoom={handleOpenRoomRequest}
        />

        {/* =====================================================================
            SECTION 5 – CULTURE AND EVENTS (Editorial Retrospective + Calendar Preview)
            ===================================================================== */}
        <ProgrammSection
          onInspectRoom={handleInspectRoom}
          onInquireEventFormat={handleInquireEventFormat}
        />

        {/* =====================================================================
            SECTION 6 – PEOPLE AND COMMUNITY (Associations, Volunteers & Cooperation)
            ===================================================================== */}
        <section
          id="gemeinschaft"
          className="py-20 md:py-24 border-b border-[#134A4B]/20 bg-[#FBF2E3] text-[#134A4B] relative overflow-hidden"
        >
          <MonsteraFoliageAccent className="hidden lg:block absolute -bottom-10 -right-10 w-52 h-52 pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#134A4B]/20 items-end">
              <div className="lg:col-span-6">
                <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-2">
                  06 · Menschen &amp; Gemeinschaft
                </p>
                <h2 className="text-4xl md:text-5xl font-poster font-bold uppercase text-[#134A4B] text-balance leading-[1.02] tracking-tight">
                  Eine lebendige Stadt entsteht gemeinsam.
                </h2>
              </div>
              <div className="lg:col-span-6 space-y-3 text-base text-[#134A4B]/85 leading-relaxed">
                <p className="font-semibold text-[#134A4B]">
                  Nachbarschaft braucht Orte der Begegnung.
                </p>
                <p>
                  Die CHAPEL bringt Menschen, Vereine und Initiativen zusammen. Hier können
                  gemeinsame Projekte entstehen, Erfahrungen ausgetauscht und neue Verbindungen
                  geknüpft werden.
                </p>
              </div>
            </div>

            {/* Authentic Community & Group Photography Strip */}
            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <figure className="flex flex-col bg-[#F3E1C8] p-3.5 border-2 border-[#134A4B]/20 rounded-lg">
                <div className="aspect-[16/10] w-full rounded-md overflow-hidden border border-[#134A4B]/20 bg-[#FBF2E3]">
                  <ResilientImage
                    src={IMAGES.multiraum.url}
                    expectedPath={IMAGES.multiraum.expectedPath}
                    alt={IMAGES.multiraum.alt}
                    fallbackTitle="Multiraum (R18) für Arbeitsgruppen"
                  />
                </div>
                <figcaption className="mt-3 px-1 text-xs text-[#134A4B]/80">
                  {IMAGES.multiraum.caption}
                </figcaption>
              </figure>

              <figure className="flex flex-col bg-[#F3E1C8] p-3.5 border-2 border-[#134A4B]/20 rounded-lg">
                <div className="aspect-[16/10] w-full rounded-md overflow-hidden border border-[#134A4B]/20 bg-[#FBF2E3]">
                  <ResilientImage
                    src={IMAGES.eveningHall.url}
                    expectedPath={IMAGES.eveningHall.expectedPath}
                    alt={IMAGES.eveningHall.alt}
                    fallbackTitle="Abendliche Begegnung im Großen Saal"
                  />
                </div>
                <figcaption className="mt-3 px-1 text-xs text-[#134A4B]/80">
                  {IMAGES.eveningHall.caption}
                </figcaption>
              </figure>
            </div>

            {/* Four Participation Dimensions */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {PARTICIPATION_AREAS.map((area) => (
                <article
                  key={area.id}
                  className="p-7 border-2 border-[#134A4B]/20 bg-white rounded-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wider text-[#6C9A8B] font-semibold tabular-nums">
                      <span>{area.indexLabel}</span>
                      <span>{area.statusNote}</span>
                    </div>
                    <h3 className="mt-2 font-poster text-2xl md:text-3xl font-bold uppercase text-[#134A4B]">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#134A4B]/85 leading-relaxed">{area.summary}</p>

                    <div className="mt-6 pt-5 border-t border-[#134A4B]/15 grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                      <div>
                        <p className="uppercase tracking-widest text-[#134A4B] font-bold mb-2">
                          Bestehende Möglichkeiten
                        </p>
                        <ul className="space-y-2 text-[#134A4B]/85 leading-relaxed list-disc pl-4">
                          {area.currentPossibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-widest text-[#8B1E1E] font-bold mb-2">
                          Mögliche künftige Angebote
                        </p>
                        <ul className="space-y-2 text-[#134A4B]/85 leading-relaxed list-disc pl-4">
                          {area.futurePerspectives.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Four Founding Organizations of CHAPEL e.V. */}
            <div className="mt-14 pt-12 border-t border-[#134A4B]/20">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-1.5">
                    Trägerverein · {VERIFIED_FACTS.institution.officialName}
                  </p>
                  <h3 className="font-poster text-2xl md:text-3xl font-bold uppercase text-[#134A4B]">
                    Die vier Gründungsorganisationen
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleOpenHeaderRequest}
                  className="px-5 py-2.5 bg-[#8B1E1E] text-[#FBF2E3] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#701616] transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
                >
                  Idee / Raum anfragen (Demo)
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {FOUNDING_ORGANIZATIONS.map((org, idx) => (
                  <div
                    key={org.name}
                    className="p-5 bg-[#F3E1C8] border border-[#134A4B]/20 rounded-lg"
                  >
                    <span className="text-xs font-bold text-[#8B1E1E] tabular-nums">
                      0{idx + 1}
                    </span>
                    <h4 className="mt-1 font-poster text-lg font-bold uppercase text-[#134A4B]">
                      {org.name}
                    </h4>
                    <p className="mt-1.5 text-xs text-[#134A4B]/85 leading-relaxed">
                      {org.roleDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 7 – FUTURE (Experimental Stadtlabor Südstadt — Deep Petrol Section)
            ===================================================================== */}
        <section
          id="stadtlabor"
          className="py-20 md:py-24 border-b border-[#FBF2E3]/20 bg-[#134A4B] text-[#FBF2E3]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            {/* Mandatory Discreet Label */}
            <div className="mb-8 pb-4 border-b border-[#FBF2E3]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs uppercase tracking-widest text-[#D98A3C] font-semibold">
                07 · Zukunft &amp; Stadtlabor Südstadt
              </span>
              <p className="text-xs text-[#F3E1C8]">{EXPERIMENTAL_FUTURE_IDEAS.disclaimer}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 items-start">
              <div className="lg:col-span-6">
                <h2 className="text-4xl md:text-5xl font-poster font-bold uppercase text-[#FBF2E3] text-balance leading-[1.02] tracking-tight">
                  {EXPERIMENTAL_FUTURE_IDEAS.stadtlaborHeadline}
                </h2>
                <p className="mt-4 text-xs uppercase tracking-wider text-[#D98A3C] font-semibold">
                  Experimentelles Konzept · Nicht offiziell von CHAPEL e.V. oder der Stadt
                  Heidelberg beschlossen
                </p>
              </div>
              <div className="lg:col-span-6 space-y-4 text-base text-[#F3E1C8] leading-relaxed">
                {EXPERIMENTAL_FUTURE_IDEAS.stadtlaborText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Four Experimental Project Presentations with Authentic Documentary Photographs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {STADTLABOR_PROJECTS.map((proj) => (
                <article
                  key={proj.id}
                  className="bg-[#FBF2E3] text-[#134A4B] rounded-lg overflow-hidden flex flex-col justify-between border-2 border-[#D98A3C]/40"
                >
                  <div>
                    <div className="aspect-[16/9] w-full bg-[#F3E1C8] overflow-hidden">
                      <ResilientImage
                        src={proj.imageUrl}
                        expectedPath={proj.expectedImagePath}
                        alt={proj.imageAlt}
                        fallbackTitle={proj.title}
                      />
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wider text-[#6C9A8B] font-semibold tabular-nums">
                        <span>{proj.indexLabel}</span>
                        <span className="text-[#8B1E1E]">EXPERIMENTELLES IMPULSFELD</span>
                      </div>
                      <h3 className="mt-2 font-poster text-2xl font-bold uppercase text-[#134A4B]">
                        {proj.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#8B1E1E]">{proj.focusArea}</p>
                      <p className="mt-3 text-sm text-[#134A4B]/85 leading-relaxed">
                        {proj.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 md:px-7 pb-6 pt-4 border-t border-[#134A4B]/15 bg-[#F3E1C8]/55">
                    <p className="text-xs uppercase tracking-widest text-[#134A4B] font-bold mb-2">
                      Leitfragen im Denkraum
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#134A4B]/85 list-disc pl-4">
                      {proj.guidingQuestions.map((q, idx) => (
                        <li key={idx}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Institutional Footer */}
      <footer className="bg-[#134A4B] text-[#FBF2E3] py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FBF2E3]/20">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <ChapelLogo variant="dark" size={38} />
                <span className="text-[#D98A3C]">·</span>
                <p className="font-poster text-xl font-bold uppercase text-[#FBF2E3]">
                  Raum für Stadtkultur e.V.
                </p>
              </div>
              <p className="mt-3 text-sm text-[#F3E1C8] leading-relaxed max-w-sm">
                Bürger- und Kulturzentrum in der Heidelberger Südstadt. Ein offener Ort für Kultur,
                Bildung, soziale Begegnung und bürgerschaftliche Teilhabe.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleOpenHeaderRequest}
                  className="px-4 py-2.5 bg-[#8B1E1E] text-[#FBF2E3] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#701616] transition-colors cursor-pointer"
                >
                  Unverbindliche Raumanfrage (Demo)
                </button>
              </div>
            </div>

            <div className="md:col-span-4 space-y-3 text-sm">
              <h3 className="text-xs uppercase tracking-widest text-[#D98A3C] font-semibold">
                Adresse &amp; Standort
              </h3>
              <p className="text-[#FBF2E3]">
                {INSTITUTION_INFO.officialName}
                <br />
                {INSTITUTION_INFO.address.street}
                <br />
                {INSTITUTION_INFO.address.zipCity}
              </p>
              <p className="text-xs text-[#F3E1C8]">
                Offizielle Website:{' '}
                <a
                  href={INSTITUTION_INFO.existingWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FBF2E3] underline underline-offset-4 hover:text-[#D98A3C]"
                >
                  chapel-heidelberg.com
                </a>
              </p>
            </div>

            <div className="md:col-span-3 space-y-3 text-sm">
              <h3 className="text-xs uppercase tracking-widest text-[#D98A3C] font-semibold">
                Bereiche der Website
              </h3>
              <ul className="space-y-2 text-xs text-[#F3E1C8] tabular-nums">
                <li>
                  <a href="#startseite" className="hover:text-white transition-colors">
                    01 · Startseite
                  </a>
                </li>
                <li>
                  <a href="#das-haus" className="hover:text-white transition-colors">
                    02 · Das Gebäude &amp; Geschichte
                  </a>
                </li>
                <li>
                  <a href="#leben-im-haus" className="hover:text-white transition-colors">
                    03 · Leben in der CHAPEL
                  </a>
                </li>
                <li>
                  <a href="#raeume" className="hover:text-white transition-colors">
                    04 · Räume &amp; Grundriss
                  </a>
                </li>
                <li>
                  <a href="#kultur" className="hover:text-white transition-colors">
                    05 · Kultur &amp; Veranstaltungen
                  </a>
                </li>
                <li>
                  <a href="#gemeinschaft" className="hover:text-white transition-colors">
                    06 · Menschen &amp; Gemeinschaft
                  </a>
                </li>
                <li>
                  <a href="#stadtlabor" className="hover:text-white transition-colors">
                    07 · Stadtlabor Südstadt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F3E1C8]/80">
            <p>
              {INSTITUTION_INFO.officialName} · {INSTITUTION_INFO.address.street},{' '}
              {INSTITUTION_INFO.address.zipCity}
            </p>
            <p>CHAPEL e.V. · Corporate Design System</p>
          </div>
        </div>
      </footer>

      {/* Interactive Room & Event Inquiry Modal (Demonstration Mode) */}
      <RaumAnfrageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialRoomId={modalRoomId}
        initialArrangement={modalArrangement}
        initialEventType={modalEventType}
      />
    </div>
  );
}
