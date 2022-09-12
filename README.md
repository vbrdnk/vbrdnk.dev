Personal [blog](https://vbrdnk.dev) where I share my knowledge and thoughts on different (mostly front-end related) technical topics.

# vbrdnk.dev ![example workflow](https://github.com/vbrdnk/vbrdnk.dev/actions/workflows/playwright.yml/badge.svg)

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [blog](https://vbrdnk.dev).
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/vbrdnk/vbrdnk.dev.git
$ cd vbrdnk.dev
$ yarn
$ yarn dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/vbrdnk/vbrdnk.dev/blob/main/.env.example).
