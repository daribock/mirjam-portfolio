import { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  description: string;
  thumbnail?: StaticImageData;
  href?: string;
  images?: StaticImageData[] | string[];
  slug?: string;
  tags?: string[];
  content?: React.ReactNode | string;
};
