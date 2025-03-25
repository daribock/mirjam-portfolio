'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonVariants } from './ui/button';
import { Heading } from './Heading';

export default function HomePageHeader() {
  return (
    <header className="py-16 md:py-24">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative"
      >
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <Heading>
              <span className="block font-mplus">Mirjam</span>
              <span className="block font-lacquer">Kletter</span>
            </Heading>
            <p className="text-xl text-gray-600 max-w-xl">
              Kreative Gestalterin mit Herz und Leidenschaft für visuelle
              Medien, Musik und ausdrucksstarkes Design.
            </p>
            <Link href="/projects" className={buttonVariants({ size: 'lg' })}>
              Projekte ansehen
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="hidden md:block md:w-80">
            <Image
              src="/images/logo/logo-blau.png"
              alt="Logo Mirjam Kletter"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
