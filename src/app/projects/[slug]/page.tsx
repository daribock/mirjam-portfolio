import { SingleProject } from '@/components/Project';
import { projects } from '@/constants/projects';
import { Project } from '@/types/projects';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug, // Ensure this matches the `[slug]` param
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    redirect('/projects');
  }

  return (
    <div className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <SingleProject project={project} />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = projects.find((p) => p.slug === slug) as Project | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: 'Projects | Mirjam Kletter',
      description:
        'Kreative Gestalterin mit Herz und Leidenschaft für visuelle Medien, Musik und ausdrucksstarkes Design.',
    };
  }
}
