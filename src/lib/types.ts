import { ReadTimeResults } from 'reading-time';

export type Post = {
  title: string;
  description?: string;
  slug: string;
  createdAt: string;
};

export enum FileType {
  Blog = 'blog',
}

export type FrontMatterResponse = {
  code: string;
  frontMatter: {
    wordCount: number;
    readingTime: ReadTimeResults;
    slug: string | null;
    [key: string]: any;
  };
};
