import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/projects';
import { projects } from '@/constants/projects';
import { ExternalLink } from 'lucide-react';
import placeholder from '../../public/images/placeholder-image.png';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export const Products = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {projects
        .filter((project) => project.public)
        .map((project: Project, idx: number) => {
          const { title, description, slug, tags, thumbnail } = project;

          return (
            <article key={idx}>
              <Card className="group overflow-hidden relativ h-full">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={thumbnail || placeholder}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  {tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {description}
                  </CardDescription>
                  <Link
                    href={`/projects/${slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    Mehr erfahren
                    <ExternalLink size={16} />
                  </Link>
                </CardContent>
              </Card>
            </article>
          );
        })}
    </section>
  );
};
