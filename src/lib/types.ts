import { ReadTimeResults } from 'reading-time';

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = Song[];

export type Post = {
  title: string;
  description?: string;
  slug: string;
  createdAt: string;
};

export enum FileType {
  Blog = 'blog',
}

export type FrontMatterResponse = {
  code: string;
  frontMatter: {
    wordCount: number;
    readingTime: ReadTimeResults;
    slug: string | null;
    [key: string]: any;
  };
};

export type GitHubAnalytics = {
  followers: number;
  repos: number;
};
