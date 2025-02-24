'use client';

import { Project } from '@/types/projects';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { Heading } from './Heading';
import { motion } from 'framer-motion';
import placeholder from '../../public/images/placeholder-image.png';
import { ExternalLink } from 'lucide-react';

export const SingleProject = ({ project }: { project: Project }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    project.thumbnail || placeholder
  );

  return (
    <section>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={project.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      {project.images && (
        <div className="flex flex-row justify-center my-8 flex-wrap">
          {project.images.map((image, idx) => (
            <button
              onClick={() => setActiveImage(image)}
              key={`image-thumbnail-${idx}`}
            >
              <Image
                src={image}
                alt="project thumbnail"
                height="1000"
                width="1000"
                className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
              />
            </button>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-6">
        <Heading className="mb-5">{project.title}</Heading>
        <div className="flex space-x-2">
          {project.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="prose md:prose-lg lg:prose-xl max-w-none text-neutral-600 mt-4">
        <p className="lead">{project.description}</p>
        {project.content}
      </div>
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Live Vorschau
          <ExternalLink size={20} />
        </a>
      )}
    </section>
  );
};
