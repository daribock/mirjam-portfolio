'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader title="About" showLogo />

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-lacquer text-primary mb-6">Hallo,</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            ich bin <strong>Mirjam Jennifer Kletter</strong>, eine kreative
            Seele mit einer tiefen Liebe zur Musik und einem festen Glauben, der
            mein Leben prägt. Seit meiner Kindheit ist Musik ein zentraler Teil
            meines Weges – vom Klavierspiel bis hin zu meiner Stimme, die ich
            als Ausdruck meiner Persönlichkeit und meines Glaubens sehe.
          </p>
          <p>
            Musik ist für mich mehr als Klang; sie ist ein Weg, Emotionen zu
            teilen, Geschichten zu erzählen und Verbindungen zu schaffen. Meine
            Kreativität zeigt sich jedoch nicht nur in der Musik. Ob durch
            Design, digitale Medien oder die Entwicklung von Inhalten, ich liebe
            es, Dinge zu erschaffen, die berühren und inspirieren.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <Timeline />
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-lacquer text-primary mb-8">Fähigkeiten</h2>
        <div className="space-y-6">
          <SkillBar name="Adobe Photoshop" percentage={85} />
          <SkillBar name="Adobe Illustrator" percentage={75} />
          <SkillBar name="Adobe Premiere Pro" percentage={80} />
          <SkillBar name="HTML" percentage={65} />
          <SkillBar name="CSS" percentage={60} />
          <SkillBar name="Autodesk Maya" percentage={63} />
          <SkillBar name="Blender" percentage={55} />
        </div>
      </section>
    </div>
  );
}

function Timeline() {
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

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
