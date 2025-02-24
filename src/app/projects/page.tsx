import { Container } from '@/components/Container';
import PageHeader from '@/components/PageHeader';
import { Products } from '@/components/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Mirjam Kletter',
  description:
    'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
};

export default function Projects() {
  return (
    <Container>
      <PageHeader title="Projekte" showLogo />
      <Products />
    </Container>
  );
}
