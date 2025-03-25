'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Heading } from './Heading';

type imageType = {
  staticImageData: StaticImageData;
  width?: number;
  height?: number;
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: imageType;
  showLogo?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  image,
  showLogo,
}: PageHeaderProps) {
  const renderImage = () => {
    if (image) {
      return (
        <div className="hidden md:block">
          <Image
            src={image.staticImageData}
            alt="Logo Mirjam Kletter"
            width={image.width || 400}
            height={image.height || 400}
            className="w-3xs h-auto"
            priority
          />
        </div>
      );
    }

    if (showLogo) {
      return (
        <div className="hidden md:block md:w-64">
          <Image
            src={'/images/logo/logo-blau.png'}
            alt="Logo Mirjam Kletter"
            width={400}
            height={400}
            className="w-3xs h-auto"
            priority
          />
        </div>
      );
    }

    return null;
  };

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
              <span className="block font-mplus">{title}</span>
              <span className="block font-lacquer">{title}</span>
            </Heading>
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-xl">{subtitle}</p>
            )}
          </div>
          {renderImage()}
        </div>
      </motion.div>
    </header>
  );
}
