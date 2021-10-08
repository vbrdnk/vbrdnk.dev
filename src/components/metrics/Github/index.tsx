import React from 'react';
import useSWR from 'swr';
import { Flex } from '@chakra-ui/react';

import GithubRepos from '@/components/metrics/Github/GithubRepos';
import MetricCard from '@/components/metrics/Card';
import { UserRepositoriesResponse } from '@/lib/github';
import fetcher from '@/lib/fetcher';
import { GitHub as IGitHub } from '@/lib/types';

type GitHubProps = {
  repos: UserRepositoriesResponse;
};

const GitHub: React.FC<GitHubProps> = ({ repos }) => {
  const { data } = useSWR<IGitHub>('/api/github', fetcher);

  const followers = data?.followers || 0;
  const reposCount = data?.repos || 0;
  const link = 'https://github.com/vbrdnk';

  return (
    <Flex direction="column">
      <Flex w="100%" justifyContent="space-between" direction={{ base: 'column', md: 'row'}} mb={12}>
        <MetricCard header="GitHub Followers" link={link} metric={followers} />
        <MetricCard header="GitHub Repos" link={link} metric={reposCount} />
      </Flex>

      <GithubRepos repos={repos} />
    </Flex>
  );
};

export default GitHub;
