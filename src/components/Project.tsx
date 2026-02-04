'use client';

import { Project } from '@/types/projects';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Heading } from './Heading';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { ExternalLink } from 'lucide-react';
import { buttonVariants } from './ui/button';
import { Badge } from './ui/badge';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';

export const SingleProject = ({ project }: { project: Project }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    api.on('pointerUp', Autoplay);
  }, [api]);

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
        <div className="flex flex-col gap-6">
          <Heading className="mb-5">{project.title}</Heading>
          <div className="flex space-x-2">
            {project.tags?.map((tag: string) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>
        {project.images && (
          <>
            <Carousel
              setApi={setApi}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent className="flex items-center">
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={image}
                          alt="project thumbnail"
                          height="450"
                          width="800"
                          className="object-cover object-top border rounded-lg border-neutral-100"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-sm">
              Slide {current} of {count}
            </div>
          </>
        )}
      </motion.div>
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
