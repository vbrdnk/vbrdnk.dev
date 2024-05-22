import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import { join } from 'path';
import readingTime from 'reading-time';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { FileType, FrontMatterResponse, Post } from './types';

export async function getFiles(type: FileType) {
  return readdirSync(join(process.cwd(), 'data', type));
}

export async function getFileBySlug(type: FileType, slug?: string): Promise<FrontMatterResponse> {
  const source = slug
    ? readFileSync(join(process.cwd(), 'data', type, `${slug}.mdx`), 'utf8')
    : readFileSync(join(process.cwd(), 'data', `${type}.mdx`), 'utf8');

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
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

export async function getAllFilesFrontMatter(type: FileType): Promise<Post[]> {
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
