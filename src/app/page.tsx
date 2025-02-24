import HomePageHeader from '@/components/HomePageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Mirjam Kletter',
  description:
    'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HomePageHeader />
      <section className="py-16 bg-primary/5 rounded-3xl px-8 mb-16">
        <blockquote className="text-3xl md:text-4xl text-center max-w-4xl mx-auto text-gray-800 font-lacquer">
          &quot;Ich bringe Ideen zum Leben und lasse Kreativität in all ihren
          Formen erstrahlen.&quot;
        </blockquote>
      </section>
    </div>
  );
}
