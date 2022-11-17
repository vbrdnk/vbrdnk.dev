import type { NextPage, GetStaticProps } from 'next';
import { Heading, Text, Box } from '@chakra-ui/react';

import { getGithubRepos, getGithubAnalytics, UserRepositoriesResponse, GithubAnalytics } from '@/lib/github';
import Layout from '@/components/Layout';
import TopTracks from '@/components/TopTracks';
import GitHub from '@/components/metrics/Github';

type HomePageProps = {
  repos: UserRepositoriesResponse;
  analytics: GithubAnalytics;
};

const Dashboard: NextPage<HomePageProps> = ({ repos, analytics }) => {
  return (
    <Layout
      title="Dashboard – Vladyslav Burdeniuk"
      description="Thoughts on the programming, tech, music, and my personal life."
    >
      <>
        <Box mb={12}>
          <Heading mb={4}>Dashboard</Heading>
          <Text>
            This is my personal dashboard, built with Next.js API routes deployed as serverless
            functions.
          </Text>
        </Box>
        <Box mb={12}>
          <GitHub repos={repos} analytics={analytics} />
        </Box>
        <Box>
          <TopTracks />
        </Box>
      </>
    </Layout>
  );
};

export default Dashboard;

export const getStaticProps: GetStaticProps = async () => {
  const repos = await getGithubRepos();
  const analytics = await getGithubAnalytics();
  return { props: { repos, analytics }, revalidate: 60 * 60 * 24};
};
