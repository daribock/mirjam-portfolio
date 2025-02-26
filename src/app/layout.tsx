import type { Metadata } from 'next';
import { M_PLUS_1_Code, Lacquer } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  title: 'Mirjam Kletter',
  description:
    'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
  icons: [{ url: '/images/logo/logo-weis.png' }],
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
        <Navbar />
        <main className="flex-grow py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
