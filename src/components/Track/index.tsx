import React from 'react';
import { Divider, Flex, Text, Link } from '@chakra-ui/react';

import { Song } from '@/lib/types';

type TrackProps = {
  ranking: number;
  track: Song;
};

const Track: React.FC<TrackProps> = ({ ranking, track }) => {
  return (
    <Flex mb={4} display="column">
      <Flex alignItems="baseline">
        <Text mr={4}>{ranking}</Text>
        <Flex display="column">
          <Link isExternal href={track.songUrl} rel="noopener noreferrer">
            {track.title}
          </Link>
          <Text color="gray.500">{track.artist}</Text>
        </Flex>
      </Flex>
      <Divider />
    </Flex>
  );
};

export default Track;
