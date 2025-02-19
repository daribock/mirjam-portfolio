import type { Metadata } from 'next';
import { M_PLUS_1_Code, Lacquer } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mplus = M_PLUS_1_Code({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mplus',
});

const lacquer = Lacquer({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lacquer',
});

export const metadata: Metadata = {
  title: 'Mirjam Kletter - Portfolio',
  description: 'Portfolio von Mirjam Kletter - Mediengestalterin',
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
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
