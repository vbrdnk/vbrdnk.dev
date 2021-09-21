import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';
import readingTime from 'reading-time';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

export enum FileType {
  Blog = 'blog',
}

export type Post = {
  title: string;
  description?: string;
  slug: string;
  createdAt: string;
};

export async function getFiles(type: FileType) {
  return readdirSync(join(process.cwd(), 'data', type));
}

export async function getFileBySlug(type: FileType, slug?: string) {
  const source = slug
    ? readFileSync(join(process.cwd(), 'data', type, `${slug}.mdx`), 'utf8')
    : readFileSync(join(process.cwd(), 'data', `${type}.mdx`), 'utf8');

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
      ] as any;
      return options;
    },
  });

  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}

export async function getAllFilesFrontMatter(type: FileType) {
  const files = readdirSync(join(process.cwd(), 'data', type));

  return files.reduce((allPosts: any, fileName: string) => {
    const source = readFileSync(join(process.cwd(), 'data', type, fileName), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: fileName.replace('.mdx', ''),
      } as Post,
      ...allPosts,
    ];
  }, []);
}
