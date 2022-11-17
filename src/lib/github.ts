import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

const octokitClient = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

export type UserRepositoriesResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokitClient.rest.repos.listForUser
>;

export type UserRepository = GetResponseDataTypeFromEndpointMethod<
  typeof octokitClient.rest.repos.get
>;

export type GithubAnalytics = {
  followers: number;
  reposCount: number;
}

export const getGithubUser = async () => {
  const { data } = await octokitClient.rest.users.getByUsername({ username: 'vbrdnk' });

  return data;
};

export const getGithubRepos = async (): Promise<UserRepositoriesResponse> => {
  const { data } = await octokitClient.rest.repos.listForUser({
    username: 'vbrdnk',
    per_page: 3,
  });

  return data;
};

export const getGithubAnalytics = async (): Promise<GithubAnalytics> => {
  const user = await getGithubUser();

  return {
    followers: user?.followers || 0,
    reposCount: user?.public_repos || 0,
  };
}

export default octokitClient;
