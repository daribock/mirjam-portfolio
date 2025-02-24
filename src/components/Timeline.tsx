'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Timeline() {
  const [openSection, setOpenSection] = useState<string | null>('education');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-8">
      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('education')}
          className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
        >
          <h3 className="text-xl font-lacquer text-primary">
            Schulische Laufbahn
          </h3>
          {openSection === 'education' ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openSection === 'education' && (
          <div className="px-6 py-4 space-y-4">
            <TimelineItem
              year="2022-2025"
              title="Berufsschule"
              description="Mediengestaltung Gestaltung Digital"
            />
            <TimelineItem
              year="2018-2022"
              title="FOS"
              description="Schwerpunkt: Wirtschaft"
            />
            <TimelineItem
              year="2013-2018"
              title="Realschule"
              description="Schwerpunkt: Wirtschaft"
            />
          </div>
        )}
      </div>

      <div className="border rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection('work')}
          className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
        >
          <h3 className="text-xl font-lacquer text-primary">
            Berufliche Laufbahn
          </h3>
          {openSection === 'work' ? <ChevronUp /> : <ChevronDown />}
        </button>
        {openSection === 'work' && (
          <div className="px-6 py-4 space-y-4">
            <TimelineItem
              year="2022-2025"
              title="Ausbildung"
              description="EDAG PS - Ausbildung als Mediengestalterin Digital"
            />
            <TimelineItem
              year="2018-Jetzt"
              title="Ehrenamtlich"
              description="Betania Ingolstadt: Content Creation und Produktion"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-primary pl-4 py-2">
      <div className="font-medium text-gray-600">{year}</div>
      <div className="font-bold text-gray-800">{title}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}
