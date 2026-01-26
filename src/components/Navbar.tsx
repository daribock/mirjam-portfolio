'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navlinks } from '@/constants/navlinks';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-950/5 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-primary font-semibold text-xl">
            Mirjam Kletter
          </Link>

          {/* Mobile menu button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="ghost"
            size="icon"
            className="md:hidden bg-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({
  mobile,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}) {
  return (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}`}>
      {navlinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-primary transition-colors"
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
