import useSWR from 'swr';
import { Heading, Text } from '@chakra-ui/react';

import Track from '@/components/Track';
import fetcher from '@/lib/fetcher';
import { TopTracks as ITopTracks } from '@/lib/types';

const TopTracks: React.FC = () => {
  const { data } = useSWR<ITopTracks>('/api/top-tracks', fetcher);

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
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} track={track} />
      ))}
    </>
  );
};

export default TopTracks;
