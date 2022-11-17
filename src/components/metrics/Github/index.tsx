import React from 'react';
import { Flex } from '@chakra-ui/react';

import GithubRepos from '@/components/metrics/Github/GithubRepos';
import MetricCard from '@/components/metrics/Card';
import { UserRepositoriesResponse, GithubAnalytics } from '@/lib/github';

type GitHubProps = {
  repos: UserRepositoriesResponse;
  analytics: GithubAnalytics;
};

const GitHub: React.FC<GitHubProps> = ({ repos, analytics }) => {
  const link = 'https://github.com/vbrdnk';
  const { followers, reposCount } = analytics;

  return (
    <Flex direction="column">
      <Flex
        w="100%"
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        mb={12}
      >
        <MetricCard header="GitHub Followers" link={link} metric={followers} />
        <MetricCard header="GitHub Repos" link={link} metric={reposCount} />
      </Flex>

      <GithubRepos repos={repos} />
    </Flex>
  );
};

export default GitHub;
