import { Container } from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { Products } from '@/components/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekte',
  description:
    'Entdecke die kreativen Projekte von Mirjam Kletter – Grafikdesign, digitale Medien, 3D-Modelling und mehr.',
  openGraph: {
    title: 'Projekte | Mirjam Kletter',
    description:
      'Entdecke die kreativen Projekte von Mirjam Kletter – Grafikdesign, digitale Medien, 3D-Modelling und mehr.',
    url: '/projects',
  },
};

export default function Projects() {
  return (
    <Container>
      <PageHeader title="Projekte" showLogo />
      <Products />
    </Container>
  );
}
