import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header className="py-16 md:py-24">
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              <span className="block font-mplus">Mirjam</span>
              <span className="block font-lacquer">Kletter</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Kreative Gestalterin mit Herz und Leidenschaft für visuelle
              Medien, Musik und ausdrucksstarkes Design.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Projekte ansehen
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="hidden md:block md:w-80">
            <Image
              src="/images/logo/Logo_Blau.png"
              alt="Logo Mirjam Kletter"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </header>

      <section className="py-16 bg-primary/5 rounded-3xl px-8 mb-16">
        <blockquote className="text-3xl md:text-4xl text-center max-w-4xl mx-auto text-gray-800 font-lacquer">
          "Ich bringe Ideen zum Leben und lasse Kreativität in all ihren Formen
          erstrahlen."
        </blockquote>
      </section>
    </div>
  );
}
