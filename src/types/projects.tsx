import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  slug: string;
  description: string;
  thumbnail?: StaticImageData;
  href?: string;
  images?: StaticImageData[] | string[];
  tags?: string[];
  content?: React.ReactNode | string;
};
