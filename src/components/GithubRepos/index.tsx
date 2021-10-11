import React from 'react';
import useSWR from 'swr';
import { Text, VStack, Heading } from '@chakra-ui/react';

import fetcher from '@/lib/fetcher';
import { UserRepository } from '@/lib/github';
import { GithubUserRepositories } from '@/lib/types';
import GithubRepo from '../GithubRepo/index';

const GithubRepos: React.FC = () => {
  const { data } = useSWR<GithubUserRepositories>('/api/github-repos', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <Heading as="h2" mb={4}>
        Top repositories
      </Heading>
      <Text mb={4}>
        Curious what I&apos;m currently working on? Here&apos;s a few repositories on Github.
      </Text>
      <VStack spacing={8} maxW="40rem">
        {data.repos
          .filter(repo => !repo.fork)
          .map(repo => {
            return <GithubRepo key={repo.id} repo={repo as UserRepository} />;
          })}
      </VStack>
    </>
  );
};

export default GithubRepos;
