import useSWR from 'swr';
import { Text, Flex, Link } from '@chakra-ui/react';

import fetcher from '@/lib/fetcher';
import { NowPlayingSong } from '@/lib/types';
import SpotifyIcon from '@/styles/icons/spotify';

const NowPlaying: React.FC = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <Flex alignItems="center" mt={8}>
      <SpotifyIcon mr={2} fill="1ED760" />
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

export default NowPlaying;
