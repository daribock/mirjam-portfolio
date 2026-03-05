import { SingleProject } from '@/components/Project';
import { projects } from '@/constants/projects';
import { siteUrl } from '@/constants/site';
import { Project } from '@/types/projects';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Script from 'next/script';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
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

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    creator: {
      '@type': 'Person',
      name: 'Mirjam Jennifer Kletter',
      url: siteUrl,
    },
    ...(project.thumbnail && {
      image: `${siteUrl}${project.thumbnail.src}`,
    }),
  };

  return (
    <div className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <Script
        id={`project-jsonld-${project.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
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
      openGraph: {
        title: `${product.title} | Mirjam Kletter`,
        description: product.description,
        url: `/projects/${product.slug}`,
        ...(product.thumbnail && {
          images: [
            {
              url: product.thumbnail.src,
              alt: product.title,
            },
          ],
        }),
      },
      twitter: {
        card: 'summary_large_image',
        title: `${product.title} | Mirjam Kletter`,
        description: product.description,
        ...(product.thumbnail && {
          images: [product.thumbnail.src],
        }),
      },
    };
  } else {
    return {
      title: 'Projekte',
      description:
        'Entdecke die kreativen Projekte von Mirjam Kletter – Grafikdesign, digitale Medien, 3D-Modelling und mehr.',
    };
  }
}
