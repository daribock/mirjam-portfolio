import type { Metadata } from 'next';
import { M_PLUS_1_Code, Lacquer } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { siteUrl } from '@/constants/site';

const mplus = M_PLUS_1_Code({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mplus',
  display: 'swap',
});

const lacquer = Lacquer({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lacquer',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mirjam Kletter',
    template: '%s | Mirjam Kletter',
  },
  description:
    'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
  keywords: [
    'Mirjam Kletter',
    'Mediengestalterin',
    'Grafikdesign',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Portfolio',
    'Kreativdesign',
    'Digitale Medien',
  ],
  authors: [{ name: 'Mirjam Kletter', url: siteUrl }],
  creator: 'Mirjam Kletter',
  icons: [
    { rel: 'icon', url: '/images/logo/logo-weis.png' },
    { rel: 'apple-touch-icon', url: '/images/logo/logo-blau.png' },
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: 'Mirjam Kletter',
    title: 'Mirjam Kletter – Kreative Mediengestalterin',
    description:
      'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
    images: [
      {
        url: '/images/logo/logo-blau.png',
        width: 400,
        height: 400,
        alt: 'Mirjam Kletter Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Mirjam Kletter – Kreative Mediengestalterin',
    description:
      'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
    images: ['/images/logo/logo-blau.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mirjam Jennifer Kletter',
  url: siteUrl,
  jobTitle: 'Mediengestalterin',
  description:
    'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
  image: `${siteUrl}/images/logo/logo-blau.png`,
  email: 'mirjamkletter@yahoo.com',
  knowsAbout: [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe Premiere Pro',
    'Grafikdesign',
    'Digitale Medien',
    'Blender',
    '3D-Modelling',
  ],
  sameAs: ['https://www.instagram.com/betaniaingolstadt/'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${mplus.variable} ${lacquer.variable} antialiased`}
    >
      <body className="min-h-screen font-mplus flex flex-col">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="flex-grow py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
