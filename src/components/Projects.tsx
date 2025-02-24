import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/projects';
import { projects } from '@/constants/projects';
import { ExternalLink } from 'lucide-react';
import placeholder from '../../public/images/placeholder-image.png';

export const Products = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {projects.map((project: Project, idx: number) => {
        const { title, description, slug, tags, thumbnail } = project;

        return (
          <article
            key={idx}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={thumbnail || placeholder}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              {tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link
                href={`/projects/${slug}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Mehr erfahren
                <ExternalLink size={16} />
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
