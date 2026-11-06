import React, { useState } from 'react';
import {
  DEMO_PROGRAM_EVENTS,
  DemoProgramEvent,
  IMAGES,
  PROGRAM_CATEGORIES,
  ProgramCategory,
} from '../data/chapelData';
import { DOCUMENTED_PAST_ACTIVITIES } from '../data/chapelFacts';
import { ResilientImage } from './ResilientImage';
import { Archive, Calendar, Compass, X } from 'lucide-react';

interface ProgrammSectionProps {
  onInspectRoom: (roomId: string) => void;
  onInquireEventFormat: (event: DemoProgramEvent) => void;
}

export const ProgrammSection: React.FC<ProgrammSectionProps> = ({
  onInspectRoom,
  onInquireEventFormat,
}) => {
  const [sectionTab, setSectionTab] = useState<'retrospective' | 'demo-calendar'>('retrospective');
  const [selectedCategory, setSelectedCategory] = useState<'Alle' | ProgramCategory>('Alle');
  const [selectedEvent, setSelectedEvent] = useState<DemoProgramEvent | null>(null);

  const filteredDemoEvents = DEMO_PROGRAM_EVENTS.filter((ev) =>
    selectedCategory === 'Alle' ? true : ev.category === selectedCategory
  );

  return (
    <section
      id="kultur"
      className="py-20 md:py-24 border-b border-[#134A4B]/20 bg-[#F3E1C8] text-[#134A4B]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#134A4B]/20 items-end">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-2">
              05 · Kultur &amp; Veranstaltungen
            </p>
            <h2 className="text-4xl md:text-5xl font-poster font-bold uppercase text-[#134A4B] text-balance leading-[1.02] tracking-tight">
              Kultur lebt vom Mitmachen.
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-3 text-base text-[#134A4B]/85 leading-relaxed">
            <p>
              Konzerte, Kunst, Gespräche und gemeinsame Feste machen die CHAPEL zu einem lebendigen
              Ort der Stadtkultur.
            </p>
            <p className="font-medium text-[#134A4B]">
              Das Programm entsteht durch die Menschen, Vereine und Initiativen, die ihre Ideen in
              das Haus einbringen.
            </p>
          </div>
        </div>

        {/* Clear Distinction: Verified Retrospective vs. Demonstration Calendar Integration */}
        <div className="py-6 border-b border-[#134A4B]/20 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Ansicht für Kultur und Veranstaltungen wählen"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#FBF2E3] border border-[#134A4B]/20 rounded-lg self-start"
          >
            <button
              type="button"
              onClick={() => setSectionTab('retrospective')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                sectionTab === 'retrospective'
                  ? 'bg-[#134A4B] text-[#FBF2E3]'
                  : 'text-[#134A4B] hover:bg-[#F3E1C8]/60'
              }`}
            >
              <Archive className="w-3.5 h-3.5" aria-hidden="true" />
              Redaktioneller Rückblick (Dokumentierte Aktivitäten)
            </button>
            <button
              type="button"
              onClick={() => setSectionTab('demo-calendar')}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                sectionTab === 'demo-calendar'
                  ? 'bg-[#134A4B] text-[#FBF2E3]'
                  : 'text-[#134A4B] hover:bg-[#F3E1C8]/60'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              Demonstrations-Vorschau: Kalenderanbindung (Teamup)
            </button>
          </div>

          <p className="text-xs text-[#134A4B]/80">
            Aktuell sind keine künftigen Einzeltermine hinterlegt – gezeigt werden dokumentierte
            Aktivitäten sowie die vorbereitete Kalenderstruktur.
          </p>
        </div>

        {sectionTab === 'retrospective' ? (
          /* Editorial Retrospective of Documented Activities */
          <div className="pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DOCUMENTED_PAST_ACTIVITIES.map((act) => (
                <article
                  key={act.id}
                  className="border-2 border-[#134A4B]/20 bg-[#FBF2E3] rounded-lg overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {act.imageUrl ? (
                      <div className="aspect-[16/10] w-full bg-[#134A4B]/10 overflow-hidden">
                        <ResilientImage
                          src={act.imageUrl}
                          alt={act.imageAlt || act.title}
                          fallbackTitle={act.title}
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full bg-[#134A4B] text-[#FBF2E3] flex flex-col justify-center p-6">
                        <span className="text-xs uppercase tracking-widest text-[#D98A3C] font-semibold">
                          Eigenständige Initiative
                        </span>
                        <p className="mt-1 font-poster text-2xl font-bold uppercase text-[#FBF2E3]">
                          {act.title}
                        </p>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wider text-[#6C9A8B] font-semibold">
                        <span>{act.category}</span>
                        <span className="text-[#8B1E1E]">RÜCKBLICK</span>
                      </div>
                      <h3 className="mt-2 font-poster text-2xl font-bold uppercase text-[#134A4B]">
                        {act.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-[#134A4B]/85 leading-relaxed">
                        {act.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-5 pt-3 border-t border-[#134A4B]/15 text-xs text-[#134A4B]/80">
                    Trägerschaft / Einordnung:{' '}
                    <span className="font-semibold text-[#134A4B]">{act.responsibility}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* Demonstration Preview: External Calendar Integration (Teamup) */
          <div className="pt-8">
            <div className="p-4 mb-6 bg-[#FBF2E3] border border-[#134A4B]/25 rounded-lg text-xs text-[#134A4B]/90 leading-relaxed">
              <span className="font-bold text-[#8B1E1E] uppercase tracking-wider">
                Demonstrations-Vorschau (keine realen Terminankündigungen):
              </span>{' '}
              Im regulären Betrieb bindet die CHAPEL ihren Veranstaltungskalender über{' '}
              <span className="font-semibold">Teamup</span> ein. Nachfolgend sehen Sie sowohl die
              bestehende Kalenderstruktur als auch exemplarische Format-Platzhalter.
            </div>

            {/* Category Filter for Demo Formats */}
            <div
              role="group"
              aria-label="Demonstrationsformate nach Kategorie filtern"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#FBF2E3] border border-[#134A4B]/20 rounded-lg mb-8"
            >
              {PROGRAM_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                      isActive
                        ? 'bg-[#8B1E1E] text-[#FBF2E3]'
                        : 'text-[#134A4B] hover:bg-[#F3E1C8]/60'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 Cols: Demo Format List */}
              <div className="lg:col-span-7 divide-y divide-[#134A4B]/15 border-2 border-[#134A4B]/20 bg-[#FBF2E3] rounded-lg px-6">
                {filteredDemoEvents.map((ev) => (
                  <article key={ev.id} className="py-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-wider text-[#6C9A8B] font-semibold tabular-nums">
                      <span>
                        {ev.indexLabel} · {ev.category}
                      </span>
                      <span className="text-[#8B1E1E]">DEMONSTRATIONS-EINTRAG</span>
                    </div>
                    <h3 className="font-poster text-xl md:text-2xl font-bold uppercase text-[#134A4B]">
                      {ev.title}
                    </h3>
                    <p className="text-sm text-[#134A4B]/85 leading-relaxed">{ev.description}</p>
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#134A4B]/80">
                      <span className="font-medium">Raum: {ev.roomName}</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => onInspectRoom(ev.roomId)}
                          className="inline-flex items-center gap-1 font-semibold text-[#134A4B] hover:text-[#8B1E1E] cursor-pointer"
                        >
                          <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                          Raum prüfen
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedEvent(ev)}
                          className="px-3 py-1.5 bg-[#134A4B] text-[#FBF2E3] font-semibold rounded-md hover:bg-[#0E3839] transition-colors cursor-pointer"
                        >
                          Formatdetails
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Right 5 Cols: Authentic Teamup Calendar Reference */}
              <div className="lg:col-span-5">
                <figure className="border-2 border-[#134A4B]/20 bg-[#FBF2E3] rounded-lg p-4">
                  <div className="rounded overflow-hidden border border-[#134A4B]/20 bg-white">
                    <ResilientImage
                      src={IMAGES.teamupKalender.url}
                      expectedPath={IMAGES.teamupKalender.expectedPath}
                      alt={IMAGES.teamupKalender.alt}
                      fallbackTitle="Kalenderstruktur CHAPEL"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs text-[#134A4B]/80 leading-relaxed">
                    {IMAGES.teamupKalender.caption}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#134A4B]/75 backdrop-blur-xs p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-detail-title"
        >
          <div className="bg-[#FBF2E3] border-2 border-[#134A4B] rounded-lg max-w-2xl w-full overflow-hidden shadow-xl my-8 text-[#134A4B]">
            <div className="aspect-[16/9] w-full bg-[#F3E1C8] relative">
              <ResilientImage
                src={selectedEvent.imageUrl}
                expectedPath={selectedEvent.expectedImagePath}
                alt={selectedEvent.imageAlt}
                fallbackTitle={selectedEvent.title}
              />
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                aria-label="Detailansicht schließen"
                className="absolute top-4 right-4 p-2 bg-[#FBF2E3]/95 text-[#134A4B] rounded-full hover:bg-[#FBF2E3] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-[#6C9A8B] font-semibold">
                <span>{selectedEvent.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedEvent.demoSlotLabel}</span>
              </div>

              <h3
                id="event-detail-title"
                className="mt-2 font-poster text-2xl md:text-3xl font-bold uppercase text-[#134A4B]"
              >
                {selectedEvent.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#8B1E1E]">
                {selectedEvent.subtitle}
              </p>

              <p className="mt-4 text-base text-[#134A4B]/85 leading-relaxed">
                {selectedEvent.description}
              </p>

              <dl className="mt-6 divide-y divide-[#134A4B]/15 border-t border-b border-[#134A4B]/20 text-xs">
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#134A4B]/75">Vorgesehener Raum</dt>
                  <dd className="font-semibold text-[#134A4B]">{selectedEvent.roomName}</dd>
                </div>
                <div className="py-2.5 flex justify-between gap-4">
                  <dt className="text-[#134A4B]/75">Kalenderstatus</dt>
                  <dd className="text-[#134A4B]/85">{selectedEvent.organizerNote}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const roomId = selectedEvent.roomId;
                    setSelectedEvent(null);
                    onInspectRoom(roomId);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#134A4B] text-[#134A4B] text-xs font-semibold rounded-md hover:bg-[#F3E1C8] transition-colors cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                  Raum im Grundriss ansehen
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const ev = selectedEvent;
                    setSelectedEvent(null);
                    onInquireEventFormat(ev);
                  }}
                  className="px-4 py-2 bg-[#8B1E1E] text-[#FBF2E3] text-xs font-semibold rounded-md hover:bg-[#701616] transition-colors cursor-pointer"
                >
                  Ähnliches Format anfragen (Demo)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
