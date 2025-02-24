import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={twMerge('text-sm md:text-lg font-normal', className)}>
      {children}
    </p>
  );
};
