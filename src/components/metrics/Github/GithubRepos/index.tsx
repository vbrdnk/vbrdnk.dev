import React from 'react';
import { Text, VStack, Heading } from '@chakra-ui/react';

import GithubRepo from '@/components/metrics/Github/GithubRepo';
import { UserRepository, UserRepositoriesResponse } from '@/lib/github';

type GithubReposProps = {
  repos: UserRepositoriesResponse;
};

const GithubRepos: React.FC<GithubReposProps> = ({ repos }) => {
  return (
    <>
      <Heading as='h2' mb={4}>
        Top repositories
      </Heading>
      <Text mb={4}>
        Curious what I&apos;m currently working on? Here&apos;s a few repositories on Github.
      </Text>
      <VStack spacing={8} maxW='40rem'>
        {repos
          .filter(repo => !repo.fork)
          .map(repo => <GithubRepo key={repo.id} repo={repo as UserRepository} />)}
      </VStack>
    </>
  );
};

export default GithubRepos;
