import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

const projects = [
  {
    title: 'Digitale Bildbearbeitung',
    slug: 'digital-image-processing',
    description:
      'Eine Reihe von Photoshop-Projekten, die meine Fähigkeiten in der digitalen Bildmanipulation demonstrieren.',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop&q=60',
    tags: ['Photoshop', 'Bildbearbeitung', 'Digital Art'],
  },
  {
    title: 'Motion Design',
    slug: 'motion-design',
    description:
      'Animationsprojekte und Bewegtbild-Designs für verschiedene Medienformate.',
    image:
      'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&auto=format&fit=crop&q=60',
    tags: ['After Effects', 'Animation', 'Motion Graphics'],
  },
  {
    title: '3D Visualisierung',
    slug: '3d-visualisation',
    description:
      'Dreidimensionale Modellierungen und Visualisierungen für verschiedene Anwendungsbereiche.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    tags: ['Blender', 'Maya', '3D Modeling'],
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <PageHeader title="Projekte" showLogo />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  );
}

function ProjectCard({
  title,
  slug,
  description,
  image,
  tags,
}: {
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
}) {
  return (
    <article className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`projects/${slug}`}
          className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          Mehr erfahren
          <ExternalLink size={16} />
        </Link>
      </div>
    </article>
  );
}
