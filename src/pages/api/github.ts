import type { NextApiRequest, NextApiResponse } from 'next';

import { getGithubUser } from '@/lib/github';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const user = await getGithubUser();
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json({
    followers: user.followers,
    repos: user.public_repos,
  });
}
