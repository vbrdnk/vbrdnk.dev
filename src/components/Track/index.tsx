import React from 'react';
import { Box, Divider, Wrap, Text } from '@chakra-ui/react';
import { ISong } from 'lib/types';

import styles from './Track.module.scss';

type TrackProps = {
  ranking: number;
  track: ISong;
};

const Track: React.FC<TrackProps> = ({ ranking, track }) => {
  return (
    <Wrap alignItems="flex-start">
      <Box className={styles.track}>
        <Text className={styles.trackRank}>{ranking}</Text>
        <div>
          <a href={track.songUrl} target="_blank" rel="noopener noreferrer">
            {track.title}
          </a>
          <Text color="gray.500">{track.artist}</Text>
        </div>
      </Box>
      <Divider />
    </Wrap>
  );
};

export default Track;
