import React, { useEffect, useState } from 'react';
import {
  ARRANGEMENT_LABELS,
  ArrangementKey,
  CHAPEL_ROOMS,
} from '../data/chapelData';
import { Check, Info, X } from 'lucide-react';

interface RaumAnfrageModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialArrangement?: ArrangementKey;
  initialEventType?: string;
}

export const RaumAnfrageModal: React.FC<RaumAnfrageModalProps> = ({
  isOpen,
  onClose,
  initialRoomId = 'grosser-saal',
  initialArrangement = 'reihenbestuhlung',
  initialEventType = '',
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [roomId, setRoomId] = useState(initialRoomId);
  const [eventType, setEventType] = useState(
    initialEventType || ARRANGEMENT_LABELS[initialArrangement]
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [participants, setParticipants] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setRoomId(initialRoomId);
    setEventType(initialEventType || ARRANGEMENT_LABELS[initialArrangement]);
    setSubmitted(false);
  }, [initialRoomId, initialArrangement, initialEventType, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedRoom = CHAPEL_ROOMS.find((r) => r.id === roomId) || CHAPEL_ROOMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demonstration mode only: no personal data is transmitted or persisted.
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#134A4B]/75 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-[#FBF2E3] border-2 border-[#134A4B] rounded-lg max-w-xl w-full p-6 md:p-8 shadow-xl my-8 text-[#134A4B]">
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#134A4B]/20">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#8B1E1E] font-semibold">
              CHAPEL – Raum für Stadtkultur e.V. · Demonstrationsformular
            </p>
            <h3
              id="modal-title"
              className="text-2xl md:text-3xl font-poster font-bold uppercase text-[#134A4B] mt-1 tracking-tight"
            >
              Unverbindliche Raumanfrage
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Dialog schließen"
            className="p-2 text-[#134A4B] hover:bg-[#134A4B] hover:text-[#FBF2E3] rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mandatory Prototype / Privacy Notice */}
        <div className="mt-5 p-3.5 bg-[#F3E1C8] border border-[#D98A3C]/50 rounded-md flex items-start gap-2.5 text-xs text-[#134A4B] leading-relaxed">
          <Info className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <span className="font-semibold">Hinweis zum Prototyp:</span> Dies ist ein
            unverbindliches Demonstrationsformular. Bis zur Einrichtung eines datenschutzkonformen
            Backends werden keine personenbezogenen Daten gespeichert oder übermittelt.
          </p>
        </div>

        {submitted ? (
          <div className="py-6">
            <div className="w-10 h-10 rounded-full bg-[#6C9A8B]/25 text-[#134A4B] flex items-center justify-center mb-4">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-poster text-2xl font-bold uppercase text-[#134A4B] mb-2">
              Demonstrations-Vorschau der Anfrage
            </h4>
            <p className="text-sm text-[#134A4B]/85 leading-relaxed mb-5">
              Im produktiven Betrieb würde Ihre unverbindliche Anfrage für den Raum{' '}
              <span className="font-semibold text-[#8B1E1E]">{selectedRoom.name}</span> an das
              Team von CHAPEL e.V. weitergeleitet. In dieser Prototyp-Ansicht wurden keine Daten
              gesendet.
            </p>
            <dl className="divide-y divide-[#134A4B]/15 border-t border-b border-[#134A4B]/20 text-xs mb-6">
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#134A4B]/75">Gewünschter Raum</dt>
                <dd className="font-semibold text-[#134A4B]">
                  {selectedRoom.name} ({selectedRoom.code})
                </dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#134A4B]/75">Art der Veranstaltung</dt>
                <dd className="text-[#134A4B]">{eventType || 'Nicht angegeben'}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#134A4B]/75">Wunschtermin</dt>
                <dd className="text-[#134A4B] tabular-nums">{preferredDate || 'Offen'}</dd>
              </div>
              <div className="py-2.5 flex justify-between gap-4">
                <dt className="text-[#134A4B]/75">Geschätzte Personenzahl</dt>
                <dd className="text-[#134A4B] tabular-nums">
                  {participants ? `${participants} Personen` : 'Nicht angegeben'}
                </dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="flex-1 py-2.5 px-4 border border-[#134A4B] text-[#134A4B] text-sm font-medium rounded-md hover:bg-[#F3E1C8] transition-colors cursor-pointer"
              >
                Eingaben anpassen
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 px-4 bg-[#134A4B] text-[#FBF2E3] text-sm font-medium rounded-md hover:bg-[#0E3839] transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="req-name"
                  className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
                >
                  Name *
                </label>
                <input
                  id="req-name"
                  type="text"
                  required
                  placeholder="Vor- und Nachname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] placeholder:text-[#134A4B]/45 focus:outline-none focus:border-[#8B1E1E]"
                />
              </div>

              <div>
                <label
                  htmlFor="req-org"
                  className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
                >
                  Organisation (falls zutreffend)
                </label>
                <input
                  id="req-org"
                  type="text"
                  placeholder="Verein, Initiative oder Gruppe"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] placeholder:text-[#134A4B]/45 focus:outline-none focus:border-[#8B1E1E]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="req-email"
                className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
              >
                E-Mail-Adresse *
              </label>
              <input
                id="req-email"
                type="email"
                required
                placeholder="name@beispiel.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] placeholder:text-[#134A4B]/45 focus:outline-none focus:border-[#8B1E1E]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="req-room"
                  className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
                >
                  Gewünschter Raum
                </label>
                <select
                  id="req-room"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] focus:outline-none focus:border-[#8B1E1E]"
                >
                  {CHAPEL_ROOMS.filter((r) => r.bookable).map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} ({r.floor})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="req-event-type"
                  className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
                >
                  Art der Veranstaltung
                </label>
                <input
                  id="req-event-type"
                  type="text"
                  placeholder="z. B. Konzert, Workshop, Treffen"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] placeholder:text-[#134A4B]/45 focus:outline-none focus:border-[#8B1E1E]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="req-date"
                  className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
                >
                  Wunschtermin
                </label>
                <input
                  id="req-date"
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] tabular-nums focus:outline-none focus:border-[#8B1E1E]"
                />
              </div>

              <div>
                <label
                  htmlFor="req-guests"
                  className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
                >
                  Geschätzte Personenzahl
                </label>
                <input
                  id="req-guests"
                  type="number"
                  min={1}
                  placeholder="z. B. 40"
                  value={participants}
                  onChange={(e) => setParticipants(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] tabular-nums placeholder:text-[#134A4B]/45 focus:outline-none focus:border-[#8B1E1E]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="req-notes"
                className="block text-xs uppercase tracking-wider text-[#134A4B] font-semibold mb-1.5"
              >
                Nachricht
              </label>
              <textarea
                id="req-notes"
                rows={3}
                placeholder="Beschreiben Sie kurz Ihr Vorhaben, gewünschte Zeiten oder Fragen..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#134A4B]/30 rounded-md text-sm text-[#134A4B] placeholder:text-[#134A4B]/45 focus:outline-none focus:border-[#8B1E1E]"
              />
            </div>

            <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#134A4B]/20">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm text-[#134A4B]/80 hover:text-[#134A4B] transition-colors cursor-pointer"
              >
                Abbrechen
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#8B1E1E] text-[#FBF2E3] text-sm font-semibold rounded-md hover:bg-[#701616] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E1E]"
              >
                Vorschau anzeigen (Demo)
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
