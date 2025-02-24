import { SingleProject } from '@/components/Project';
import { projects } from '@/constants/projects';
import { Project } from '@/types/projects';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));
}

export default async function ProjectPage(props: Params) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug) as
    | Project
    | undefined;

  if (!project) {
    redirect('/projects');
  }

  return (
    <div className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <SingleProject project={project} />
    </div>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const product = projects.find((p) => p.slug === params.slug) as
    | Project
    | undefined;

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
