import React, { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

export const Heading = ({
  className,
  children,
  as: Tag = 'h1',
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        'text-5xl md:text-7xl font-bold text-primary',
        className
      )}
    >
      <span className="block font-lacquer">{children}</span>
    </Tag>
  );
};
