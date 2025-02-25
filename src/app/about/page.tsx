import PageHeader from '@/components/PageHeader';
import Timeline from '@/components/Timeline';
import aboutImage from '../../../public/images/about-image.svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Mirjam Kletter',
  description:
    'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
};

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader
        title="About"
        image={{ staticImageData: aboutImage, height: 100, width: 100 }}
      />

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-lacquer text-primary mb-6">Hallo,</h2>
        <div className="prose md:prose-lg lg:prose-xl max-w-none text-neutral-600">
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
