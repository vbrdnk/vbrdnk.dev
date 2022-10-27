import { useQuery } from 'react-query';
import { TopTracks } from '@/lib/types';

const fetchTopTracks = () => fetch('/api/top-tracks').then(res => res.json());

const useTopTracks = () => {
  return useQuery<TopTracks, Error>('top-tracks', fetchTopTracks, { refetchOnWindowFocus: false });
};

export default useTopTracks;
