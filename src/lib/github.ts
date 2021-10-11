import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

const octokitClient = new Octokit({ auth: process.env.GITHUB_ACCES_TOKEN });

export type UserRepositoriesResponse = GetResponseDataTypeFromEndpointMethod<
  typeof octokitClient.rest.repos.listForUser
>;

export type UserRepository = GetResponseDataTypeFromEndpointMethod<
  typeof octokitClient.rest.repos.get
>;

export const getGithubRepos = async (): Promise<UserRepositoriesResponse> => {
  const { data } = await octokitClient.rest.repos.listForUser({
    username: 'vbrdnk',
    per_page: 3,
  });

  return data;
};

export default octokitClient;
