'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  showLogo,
}: PageHeaderProps) {
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
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              <span className="block font-mplus">{title}</span>
              <span className="block font-lacquer">{title}</span>
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-xl">{subtitle}</p>
            )}
          </div>

          {showLogo && (
            <div className="hidden md:block md:w-64">
              <Image
                src="/images/logo/logo-blau.png"
                alt="Logo Mirjam Kletter"
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          )}
        </div>
      </motion.div>
    </header>
  );
}
