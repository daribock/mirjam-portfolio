import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type ActionButtonType = {
  href: string;
  text: string;
  primary?: boolean;
  icon?: ReactNode;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  public: boolean;
  thumbnail?: StaticImageData;
  actionButtons?: ActionButtonType[];
  pdfDownload?: string;
  images?: StaticImageData[] | string[];
  tags?: string[];
  content?: React.ReactNode | string;
};
