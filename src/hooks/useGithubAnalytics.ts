import { useQuery } from 'react-query';
import { GitHubAnalytics } from '@/lib/types';

const fetchAnalytics = () => fetch('/api/github').then(res => res.json());

const useGithubAnalytics = () => {
  return useQuery<GitHubAnalytics, Error>('github-analytics', fetchAnalytics);
};

export default useGithubAnalytics;
