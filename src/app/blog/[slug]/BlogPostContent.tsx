'use client';

import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import components from '../../MDXComponents';

export const BlogPostContent = ({ code }: { code: string }) => {
  const MDXContentComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <MDXContentComponent
      components={
        {
          ...components,
        } as any
      }
    />
  );
};
