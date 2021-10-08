import React from 'react';
import { Box, Text, Link, HStack } from '@chakra-ui/react';
import { StarIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import { UserRepository } from '@/lib/github';

type GithubRepoProps = {
  repo: UserRepository;
};

const GithubRepo: React.FC<GithubRepoProps> = ({ repo }) => {
  return (
    <Box p="6" className="border-gradient border-gradient-purple" w="100%">
      <Link mt="1" href={repo.html_url} isExternal>
        {repo.name} <ExternalLinkIcon />
      </Link>
      <Text mt="1" color="gray.500" fontSize="small">
        {repo.description}
      </Text>
      <HStack align="center" spacing={8}>
        {repo.language && <Text>{repo.language}</Text>}
        {repo.stargazers_count && (
          <HStack align="center">
            <StarIcon />
            <Text>{repo.stargazers_count}</Text>
          </HStack>
        )}
      </HStack>
    </Box>
  );
};

export default GithubRepo;
