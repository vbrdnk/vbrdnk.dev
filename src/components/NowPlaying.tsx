'use client';

import React from 'react';
import { Text, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

import { useNowPlaying } from '@/hooks/useNowPlaying';
import SpotifyIcon from '@/styles/icons/spotify';

export const NowPlaying = (): JSX.Element => {
  const { data } = useNowPlaying();

  return (
    <Flex alignItems="center">
      <SpotifyIcon mr={2} fill="#1ED760" />
      <Flex alignItems="baseline" justifyContent="space-between">
        {data?.songUrl ? (
          <Link href={data.songUrl} target="_blank" rel="noopener noreferrer">
            {data.title}
          </Link>
        ) : (
          <Text>Not Playing</Text>
        )}
        <Text color="gray.500">&nbsp;-&nbsp;{data?.artist ?? 'Spotify'}</Text>
      </Flex>
    </Flex>
  );
};
