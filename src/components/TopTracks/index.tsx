import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';

import Track from '@/components/Track';
import useTopTracks from '@/hooks/useTopTracks';

const TopTracks: React.FC = () => {
  const { data } = useTopTracks();

  if (!data) {
    return null;
  }

  return (
    <>
      <Heading as="h2" mb={4}>
        Top Tracks
      </Heading>
      <Text mb={4}>
        Curious what I&apos;m currently jamming to? Here&apos;s my top tracks on Spotify updated
        daily.
      </Text>
      <VStack spacing={4} alignItems="flex-start">
        {data.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} track={track} />
        ))}
      </VStack>
    </>
  );
};

export default TopTracks;
