import React, { useState } from 'react';
import {
  ARRANGEMENT_LABELS,
  ArrangementKey,
  CHAPEL_ROOMS,
  ChapelRoom,
  FloorLevel,
  IMAGES,
  LIGHTING_MOODS,
  LightingMood,
} from '../data/chapelData';
import { ResilientImage } from './ResilientImage';
import { ArrowUpRight, Columns3, LayoutGrid, SlidersHorizontal } from 'lucide-react';

interface RaumExplorerProps {
  selectedRoomId: string;
  onSelectRoom: (roomId: string) => void;
  selectedFloor: FloorLevel;
  onSelectFloor: (floor: FloorLevel) => void;
  selectedArrangement: ArrangementKey;
  onSelectArrangement: (arrangement: ArrangementKey) => void;
  lightingMood: LightingMood;
  onSelectLighting: (mood: LightingMood) => void;
  onRequestRoom: (room: ChapelRoom, arrangement: ArrangementKey) => void;
}

const EG_HOTSPOTS: {
  roomId: string;
  label: string;
  sublabel: string;
  style: React.CSSProperties;
}[] = [
  {
    roomId: 'grosser-saal',
    label: 'R14 · Großer Saal',
    sublabel: 'ca. 300 m²',
    style: { left: '25.5%', top: '29%', width: '46.5%', height: '35%' },
  },
  {
    roomId: 'kueche-infrastruktur',
    label: 'R15 · Küche & Infopoint',
    sublabel: 'Infrastruktur',
    style: { left: '53.5%', top: '10%', width: '21%', height: '21%' },
  },
  {
    roomId: 'multiraum',
    label: 'R18 · Multiraum',
    sublabel: 'ca. 44 m²',
    style: { left: '55%', top: '63.5%', width: '14.5%', height: '17%' },
  },
];

export const RaumExplorer: React.FC<RaumExplorerProps> = ({
  selectedRoomId,
  onSelectRoom,
  selectedFloor,
  onSelectFloor,
  selectedArrangement,
  onSelectArrangement,
  lightingMood,
  onSelectLighting,
  onRequestRoom,
}) => {
  const [viewMode, setViewMode] = useState<'explorer' | 'compare'>('explorer');

  const visibleRooms = CHAPEL_ROOMS.filter((room) =>
    selectedFloor === 'ALL' ? true : room.floor === selectedFloor
  );

  const activeRoom =
    CHAPEL_ROOMS.find((r) => r.id === selectedRoomId) || visibleRooms[0] || CHAPEL_ROOMS[0];

  const effectiveArrangement: ArrangementKey = activeRoom.availableArrangements.includes(
    selectedArrangement
  )
    ? selectedArrangement
    : activeRoom.availableArrangements[0];

  const activeArrangementSpec = activeRoom.arrangements[effectiveArrangement];
  const activeLighting = LIGHTING_MOODS[lightingMood];

  const handleFloorChange = (floor: FloorLevel) => {
    onSelectFloor(floor);
    if (floor !== 'ALL') {
      const firstInFloor = CHAPEL_ROOMS.find((r) => r.floor === floor);
      if (firstInFloor && activeRoom.floor !== floor) {
        onSelectRoom(firstInFloor.id);
      }
    }
  };

  const handleSelectRoom = (room: ChapelRoom) => {
    onSelectRoom(room.id);
    if (!room.availableArrangements.includes(selectedArrangement)) {
      onSelectArrangement(room.availableArrangements[0]);
    }
  };

  const ugRooms = CHAPEL_ROOMS.filter((r) => r.floor === 'UG');

  return (
    <section
      id="raeume"
      className="py-20 md:py-24 border-b border-[#134A4B]/20 bg-[#FBF2E3] text-[#134A4B]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#134A4B]/20 items-end">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-2">
              04 · Räume &amp; Möglichkeiten
            </p>
            <h2 className="text-4xl md:text-5xl font-poster font-bold uppercase text-[#134A4B] text-balance leading-[1.02] tracking-tight">
              Raum für Ihre Ideen.
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-3 text-base text-[#134A4B]/85 leading-relaxed">
            <p>
              Vom großen ehemaligen Kirchenraum bis zum kleinen Besprechungsraum bietet die CHAPEL
              Möglichkeiten für Kultur, Bildung, Veranstaltungen und gemeinsames Arbeiten.
            </p>
            <p className="font-medium text-[#134A4B]">
              Entdecken Sie die Räume und finden Sie den passenden Rahmen für Ihr Vorhaben.
            </p>
          </div>
        </div>

        {/* Interactive Controls Bar: Ebene & Ansicht */}
        <div className="py-6 border-b border-[#134A4B]/20 flex flex-col xl:flex-row xl:items-center justify-between gap-5">
          {/* Floor Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#134A4B]/80 font-semibold mr-1">
              Ebene:
            </span>
            <div
              role="group"
              aria-label="Gebäudeebene wählen"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F3E1C8] border border-[#134A4B]/20 rounded-lg"
            >
              {(
                [
                  { id: 'EG', label: 'Erdgeschoss (Grundriss)' },
                  { id: 'UG', label: 'Untergeschoss (Raumkarten)' },
                  { id: 'ALL', label: 'Alle Räume' },
                ] as const
              ).map((item) => {
                const isActive = selectedFloor === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleFloorChange(item.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                      isActive
                        ? 'bg-[#134A4B] text-[#FBF2E3]'
                        : 'text-[#134A4B] hover:bg-[#FBF2E3]/70'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* View Switcher: Grundriss & Raumakte vs. Raumvergleich */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#134A4B]/80 font-semibold mr-1">
              Ansicht:
            </span>
            <div
              role="group"
              aria-label="Ansichtsmodus wählen"
              className="inline-flex items-center gap-1 p-1 bg-[#F3E1C8] border border-[#134A4B]/20 rounded-lg"
            >
              <button
                type="button"
                onClick={() => setViewMode('explorer')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                  viewMode === 'explorer'
                    ? 'bg-[#134A4B] text-[#FBF2E3]'
                    : 'text-[#134A4B] hover:bg-[#FBF2E3]/70'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
                Raumexplorer
              </button>
              <button
                type="button"
                onClick={() => setViewMode('compare')}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                  viewMode === 'compare'
                    ? 'bg-[#134A4B] text-[#FBF2E3]'
                    : 'text-[#134A4B] hover:bg-[#FBF2E3]/70'
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" aria-hidden="true" />
                Räume vergleichen ({visibleRooms.length})
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'compare' ? (
          /* Side-by-Side Room Comparison Table */
          <div className="pt-10">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-poster text-2xl font-bold uppercase text-[#134A4B]">
                Übersicht &amp; Vergleich der Räume
              </h3>
              <p className="text-xs text-[#134A4B]/75 tabular-nums">
                Flächenangaben gemäß vorliegendem Grundriss EG (R14, R15, R18)
              </p>
            </div>

            <div className="overflow-x-auto border-2 border-[#134A4B]/25 rounded-lg bg-white">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-[#134A4B]/20 bg-[#134A4B] text-[#FBF2E3] text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold">Raum</th>
                    <th className="py-3.5 px-4 font-semibold">Ebene</th>
                    <th className="py-3.5 px-4 font-semibold">Grundfläche / Angabe</th>
                    <th className="py-3.5 px-4 font-semibold">Charakter &amp; Nutzung</th>
                    <th className="py-3.5 px-4 font-semibold">Mögliche Anordnungen</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Aktion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#134A4B]/15 text-sm">
                  {visibleRooms.map((room) => (
                    <tr key={room.id} className="hover:bg-[#FBF2E3]/60 transition-colors">
                      <td className="py-4 px-4 align-top">
                        <span className="text-xs text-[#8B1E1E] font-semibold block tabular-nums">
                          {room.code}
                        </span>
                        <span className="font-poster text-lg font-bold uppercase text-[#134A4B]">
                          {room.name}
                        </span>
                      </td>
                      <td className="py-4 px-4 align-top text-[#134A4B]/85 whitespace-nowrap">
                        {room.floorLabel}
                      </td>
                      <td className="py-4 px-4 align-top text-xs font-semibold text-[#134A4B] tabular-nums">
                        {room.verifiedAreaText}
                      </td>
                      <td className="py-4 px-4 align-top text-[#134A4B]/85 max-w-xs leading-relaxed">
                        {room.architecturalCharacter}
                      </td>
                      <td className="py-4 px-4 align-top text-xs text-[#134A4B]/80">
                        {room.availableArrangements
                          .map((key) => ARRANGEMENT_LABELS[key])
                          .join(' · ')}
                      </td>
                      <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              handleSelectRoom(room);
                              setViewMode('explorer');
                            }}
                            className="px-3 py-1.5 text-xs font-semibold text-[#134A4B] border border-[#134A4B]/35 rounded-md hover:bg-[#F3E1C8] transition-colors cursor-pointer"
                          >
                            Details
                          </button>
                          {room.bookable ? (
                            <button
                              type="button"
                              onClick={() =>
                                onRequestRoom(room, room.availableArrangements[0])
                              }
                              className="px-3 py-1.5 text-xs font-semibold bg-[#8B1E1E] text-[#FBF2E3] rounded-md hover:bg-[#701616] transition-colors cursor-pointer"
                            >
                              Anfragen
                            </button>
                          ) : (
                            <span className="text-xs text-[#6C9A8B] font-semibold px-2">
                              Infrastruktur
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Main 2-Column Interactive Workspace */
          <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (7 cols): Interactive Original Ground-Floor Plan (EG) OR Photographic Basement Cards (UG) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {selectedFloor === 'UG' ? (
                /* Basement: Photographic Room Cards (No fabricated basement geometry) */
                <div className="bg-[#F3E1C8] border border-[#134A4B]/20 rounded-lg p-5 md:p-7">
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
                      Untergeschoss · Fotografische Raumübersicht
                    </p>
                    <p className="mt-1 text-sm text-[#134A4B]/85 leading-relaxed">
                      Für das Untergeschoss liegt kein Grundriss vor. Wählen Sie einen der beiden
                      vermietbaren Räume über die Raumkarten aus:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ugRooms.map((room) => {
                      const isSelected = room.id === activeRoom.id;
                      return (
                        <button
                          key={room.id}
                          type="button"
                          onClick={() => handleSelectRoom(room)}
                          aria-pressed={isSelected}
                          className={`text-left rounded-lg overflow-hidden border-2 transition-all cursor-pointer bg-[#FBF2E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                            isSelected
                              ? 'border-[#8B1E1E] shadow-md'
                              : 'border-[#134A4B]/20 hover:border-[#134A4B]'
                          }`}
                        >
                          <div className="aspect-[4/3] w-full bg-[#F3E1C8] overflow-hidden">
                            <ResilientImage
                              src={room.imageUrl}
                              expectedPath={room.expectedImagePath}
                              alt={room.imageAlt}
                              fallbackTitle={room.name}
                            />
                          </div>
                          <div className="p-4">
                            <span className="text-xs uppercase tracking-wider text-[#6C9A8B] font-semibold">
                              {room.floorLabel}
                            </span>
                            <p
                              className={`mt-1 font-poster text-xl uppercase ${
                                isSelected
                                  ? 'font-bold text-[#8B1E1E]'
                                  : 'font-semibold text-[#134A4B]'
                              }`}
                            >
                              {room.name}
                            </p>
                            <p className="mt-1 text-xs text-[#134A4B]/75 leading-relaxed">
                              {room.categoryLabel}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Ground Floor: Interactive Layer on Actual Supplied Floor Plan */
                <div className="bg-[#F3E1C8] border border-[#134A4B]/20 rounded-lg p-5 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-3">
                    <span>INTERAKTIVER GRUNDRISS EG · RAUMBEREICH ANKLICKEN</span>
                    <span className="text-[#8B1E1E] tabular-nums">R14 · R15 · R18</span>
                  </div>

                  <figure>
                    <div className="relative w-full rounded-md overflow-hidden border-2 border-[#134A4B]/30 bg-white select-none">
                      <img
                        src={IMAGES.grundrissEg.url}
                        alt={IMAGES.grundrissEg.alt}
                        className="w-full h-auto block"
                      />

                      {/* Accurately Positioned Interactive Room Hotspots on Original Floor Plan */}
                      {EG_HOTSPOTS.map((spot) => {
                        const room = CHAPEL_ROOMS.find((r) => r.id === spot.roomId);
                        if (!room) return null;
                        const isSelected = room.id === activeRoom.id;
                        return (
                          <button
                            key={spot.roomId}
                            type="button"
                            onClick={() => handleSelectRoom(room)}
                            aria-pressed={isSelected}
                            aria-label={`${spot.label} (${spot.sublabel}) im Grundriss auswählen`}
                            style={spot.style}
                            className={`absolute transition-all cursor-pointer flex flex-col items-center justify-center p-1.5 text-center rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                              isSelected
                                ? 'bg-[#8B1E1E]/22 border-2 border-[#8B1E1E] shadow-xs'
                                : 'bg-[#134A4B]/5 border border-[#134A4B]/40 hover:bg-[#134A4B]/15 hover:border-[#134A4B]'
                            }`}
                          >
                            <span
                              className={`px-2 py-0.5 rounded-xs text-[11px] font-semibold leading-tight shadow-xs ${
                                isSelected
                                  ? 'bg-[#8B1E1E] text-[#FBF2E3]'
                                  : 'bg-[#FBF2E3]/95 text-[#134A4B] border border-[#134A4B]/20'
                              }`}
                            >
                              {spot.label}
                            </span>
                            <span className="mt-0.5 px-1.5 py-0.2 rounded-xs bg-[#FBF2E3]/95 text-[10px] text-[#134A4B] tabular-nums">
                              {spot.sublabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <figcaption className="mt-2.5 text-xs text-[#134A4B]/80 leading-relaxed">
                      {IMAGES.grundrissEg.caption} Klicken Sie auf R14, R18 oder R15, um Details
                      und Fotos anzuzeigen.
                    </figcaption>
                  </figure>
                </div>
              )}

              {/* Room Index List (All visible rooms on selected floor) */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-3">
                  Raumverzeichnis ({visibleRooms.length})
                </h3>
                <div className="divide-y divide-[#134A4B]/20 border-t border-b border-[#134A4B]/20">
                  {visibleRooms.map((room) => {
                    const isSelected = room.id === activeRoom.id;
                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => handleSelectRoom(room)}
                        className={`w-full py-3.5 px-3.5 flex items-center justify-between text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E] ${
                          isSelected ? 'bg-[#F3E1C8]' : 'hover:bg-[#F3E1C8]/45'
                        }`}
                      >
                        <div className="flex items-baseline gap-3 min-w-0">
                          <span className="text-xs font-semibold text-[#8B1E1E] tabular-nums shrink-0">
                            {room.indexLabel}
                          </span>
                          <span
                            className={`font-poster text-lg uppercase truncate ${
                              isSelected
                                ? 'font-bold text-[#8B1E1E]'
                                : 'font-semibold text-[#134A4B]'
                            }`}
                          >
                            {room.name}
                          </span>
                          <span className="hidden sm:inline text-xs text-[#134A4B]/75 truncate">
                            — {room.categoryLabel}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0 ml-4 text-xs font-semibold text-[#134A4B] tabular-nums">
                          <span>{room.floor}</span>
                          {room.id === 'grosser-saal' && <span>ca. 300 m²</span>}
                          {room.id === 'multiraum' && <span>ca. 44 m²</span>}
                          {!room.bookable && (
                            <span className="text-[#6C9A8B]">(Infrastruktur)</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Authentic Photograph, Arrangement Selector & Room Details */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="border-2 border-[#134A4B]/25 bg-[#F3E1C8] rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#134A4B]/10">
                  <ResilientImage
                    src={activeArrangementSpec.imageUrl || activeRoom.imageUrl}
                    expectedPath={activeRoom.expectedImagePath}
                    alt={activeArrangementSpec.imageAlt || activeRoom.imageAlt}
                    fallbackTitle={activeRoom.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${activeLighting.filterClass}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#134A4B]/90 via-[#134A4B]/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[#FBF2E3]">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#F3E1C8] tabular-nums">
                        {activeRoom.floorLabel} · {activeRoom.code}
                      </p>
                      <p className="font-poster text-2xl font-bold uppercase leading-tight">
                        {activeRoom.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle Lighting Atmosphere Switch */}
                <div className="p-4 border-t border-[#134A4B]/20 bg-[#FBF2E3] flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#134A4B] font-semibold">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#8B1E1E]" aria-hidden="true" />
                    Lichtstimmung
                  </span>
                  <div className="inline-flex items-center gap-1 p-0.5 bg-[#F3E1C8] rounded-md">
                    {(Object.keys(LIGHTING_MOODS) as LightingMood[]).map((moodKey) => {
                      const isSelected = lightingMood === moodKey;
                      return (
                        <button
                          key={moodKey}
                          type="button"
                          onClick={() => onSelectLighting(moodKey)}
                          className={`px-3 py-1 text-xs font-semibold rounded-sm transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#134A4B] text-[#FBF2E3]'
                              : 'text-[#134A4B] hover:bg-[#FBF2E3]/70'
                          }`}
                        >
                          {LIGHTING_MOODS[moodKey].label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Room Description & Verified Facts */}
              <div>
                <p className="text-base text-[#134A4B]/85 leading-relaxed mb-5">
                  {activeRoom.description}
                </p>

                {/* Distinct Selector for Alternative Seating & Use Arrangements */}
                <div className="mb-5">
                  <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold mb-2">
                    Mögliche Bestuhlung &amp; Nutzungsform im Raum:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRoom.availableArrangements.map((arrKey) => {
                      const isSelected = effectiveArrangement === arrKey;
                      return (
                        <button
                          key={arrKey}
                          type="button"
                          onClick={() => onSelectArrangement(arrKey)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-[#8B1E1E] text-[#FBF2E3] border-[#8B1E1E]'
                              : 'bg-white text-[#134A4B] border-[#134A4B]/25 hover:border-[#134A4B]'
                          }`}
                        >
                          {ARRANGEMENT_LABELS[arrKey]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <dl className="divide-y divide-[#134A4B]/20 border-t border-b border-[#134A4B]/20 text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#134A4B]/75 shrink-0">Ebene &amp; Grundfläche</dt>
                    <dd className="text-xs font-semibold text-[#134A4B] text-right tabular-nums">
                      {activeRoom.floorLabel} · {activeRoom.verifiedAreaText}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#134A4B]/75 shrink-0">Raumcharakter</dt>
                    <dd className="text-[#134A4B] text-right max-w-xs">
                      {activeRoom.architecturalCharacter}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#134A4B]/75 shrink-0">
                      Anordnung ({ARRANGEMENT_LABELS[effectiveArrangement]})
                    </dt>
                    <dd className="text-[#134A4B] text-right max-w-xs">
                      {activeArrangementSpec.spatialNote}
                    </dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#134A4B]/75 shrink-0">Geeignete Formate</dt>
                    <dd className="text-[#134A4B] text-right max-w-xs">
                      {activeArrangementSpec.suitableFor}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  {activeRoom.bookable ? (
                    <button
                      type="button"
                      onClick={() => onRequestRoom(activeRoom, effectiveArrangement)}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#8B1E1E] text-[#FBF2E3] text-sm font-semibold rounded-md hover:bg-[#701616] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E]"
                    >
                      Unverbindliche Raumanfrage starten
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <p className="text-xs text-[#134A4B] bg-[#F3E1C8] border border-[#134A4B]/20 rounded-md p-3.5 leading-relaxed">
                      Hinweis: Dieser Bereich dient als ergänzende Infrastruktur im Erdgeschoss und
                      wird nicht als eigenständiger Veranstaltungsraum vermietet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
