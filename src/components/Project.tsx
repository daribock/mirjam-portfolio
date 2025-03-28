'use client';

import { Project } from '@/types/projects';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { Heading } from './Heading';
import { motion } from 'framer-motion';
import placeholder from '../../public/images/placeholder-image.png';
import { ExternalLink } from 'lucide-react';
import { buttonVariants } from './ui/button';
import { Badge } from './ui/badge';

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
        <div className="absolute bottom-0 bg-white h-10 lg:h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
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
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="prose md:prose-lg lg:prose-xl max-w-none text-neutral-600 mt-4">
        <p className="lead">{project.description}</p>
        {project.content}
      </div>
      {project.actionButtons?.length && (
        <div className="flex flex-wrap gap-4">
          {project.actionButtons.map(({ href, icon, primary, text }) => {
            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  primary
                    ? buttonVariants({ variant: 'default' })
                    : buttonVariants({ variant: 'outline' })
                }
              >
                {text}
                {icon ? icon : <ExternalLink size={20} />}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};
