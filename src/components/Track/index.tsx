import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

import { Song } from '@/lib/types';

type TrackProps = {
  ranking: number;
  track: Song;
};

const Track: React.FC<TrackProps> = ({ ranking, track }) => {
  return (
    <Flex display="column">
      <Flex alignItems="baseline">
        <Text mr={4}>{ranking}</Text>
        <Flex display="column">
          <Link isExternal className='link' href={track.songUrl} rel="noopener noreferrer">
            {track.title}
          </Link>
          <Text color="gray.500">{track.artist}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Track;
