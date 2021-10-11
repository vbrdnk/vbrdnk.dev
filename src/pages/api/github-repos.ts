import type { NextApiRequest, NextApiResponse } from 'next';
import { getGithubRepos } from '@/lib/github';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const repos = await getGithubRepos();

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
  return res.status(200).json({ repos });
}
