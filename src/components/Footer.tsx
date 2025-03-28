import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <p className="font-medium">Mirjam Jennifer Kletter</p>
            <p>Mediengestalterin</p>
          </div>

          <div className="text-center">
            <div className="w-16 mx-auto">
              <Image
                src="/images/logo/logo-weis.png"
                alt="Logo Mirjam Kletter"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2">Kontaktieren Sie mich:</p>
            <Link
              href="mailto:mirjamkletter@yahoo.com"
              className="text-white hover:text-gray-200 transition-colors"
            >
              mirjamkletter@yahoo.com
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
