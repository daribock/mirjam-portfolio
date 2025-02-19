import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
              src="/images/logo/Logo_Blau.png"
              alt="Logo Mirjam Kletter"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        )}
      </div>
    </header>
  );
}
