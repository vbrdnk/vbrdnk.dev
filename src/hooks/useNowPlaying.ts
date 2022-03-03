import { useQuery } from 'react-query';
import { NowPlayingSong } from '@/lib/types';

const useNowPlaying = () => {
  return useQuery<NowPlayingSong, Error>('now-playing', () =>
    fetch('/api/now-playing').then(res => res.json())
  );
};

export default useNowPlaying;
