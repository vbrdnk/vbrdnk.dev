import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';
import { Flex, Text } from '@chakra-ui/react';

import SocialLinks from 'components/SocialLinks/SocialLinks';
import Header from 'components/Header';
import NowPlaying from 'components/NowPlaying';
import avatarPic from 'public/static/images/avatar.jpg';
import styles from './Layout.module.scss';

type LayoutProps = {
  home?: boolean;
  title?: string;
  description?: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  home,
  title = '{code•aligned}',
  description = 'Personal blog by Vladyslav Burdeniuk. I express myself with words and code.',
}) => {
  const author = 'Vladyslav Burdeniuk';
  const router = useRouter();
  return (
    <Container className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={`https://vbrdnk.dev${router.asPath}`} />
        <meta name="description" content={description} />
        <meta name="keywords" content="React, Typescript, JavaScript" />
        <meta name="author" content={author} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://vbrdnk.dev${router.asPath}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Header />
      <main>
        {home && (
          <aside>
            <Flex>
              <div className={styles.avatar}>
                <Image src={avatarPic} alt="Vladyslav Burdeniuk" layout="fill" />
              </div>
              <Text className={styles.description}>
                I&apos;m a creator and developer currently working as the Senior Software Engineer
                at <strong>Allset</strong>. This is my personal blog where I express myself with
                words and code.
              </Text>
            </Flex>
          </aside>
        )}
        {children}
      </main>
      {!home && (
        <div className={styles.backHome}>
          <Link href="/">
            <a>&larr; Back home</a>
          </Link>
        </div>
      )}
      <footer>
        <NowPlaying />
        <SocialLinks />
      </footer>
    </Container>
  );
};

export default Layout;
