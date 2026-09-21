'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ItemData {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  title: string;
  sectionKey: string;
  openSection: string | null;
  toggleSection: (section: string) => void;
  items: ItemData[];
}

function TimelineSection({
  title,
  sectionKey,
  openSection,
  toggleSection,
  items,
}: TimelineSectionProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
      >
        <h3 className="text-xl font-lacquer text-primary">{title}</h3>
        {openSection === sectionKey ? <ChevronUp /> : <ChevronDown />}
      </button>
      {openSection === sectionKey && (
        <div className="px-6 py-4 space-y-4">
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Timeline() {
  const [openSection, setOpenSection] = useState<string | null>('education');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const educationItems: ItemData[] = [
    {
      year: '2022-2025',
      title: 'Berufsschule',
      description: 'Mediengestaltung Gestaltung Digital',
    },
    {
      year: '2018-2022',
      title: 'FOS',
      description: 'Schwerpunkt: Wirtschaft',
    },
    {
      year: '2013-2018',
      title: 'Realschule',
      description: 'Schwerpunkt: Wirtschaft',
    },
  ];

  const workItems: ItemData[] = [
    {
      year: '2022-2025',
      title: 'Ausbildung',
      description: 'EDAG PS - Ausbildung als Mediengestalterin Digital',
    },
    {
      year: '2018-Jetzt',
      title: 'Ehrenamtlich',
      description: 'Betania Ingolstadt: Content Creation und Produktion',
    },
  ];

  return (
    <div className="space-y-8">
      <TimelineSection
        title="Schulische Laufbahn"
        sectionKey="education"
        openSection={openSection}
        toggleSection={toggleSection}
        items={educationItems}
      />
      <TimelineSection
        title="Berufliche Laufbahn"
        sectionKey="work"
        openSection={openSection}
        toggleSection={toggleSection}
        items={workItems}
      />
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
