import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import SocialLinks from 'components/SocialLinks/SocialLinks';
import styles from './Layout.module.scss';

interface LayoutProps {
  home?: boolean;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  home,
  title = '{code•aligned}',
  description = 'Personal blog by Vladyslav Burdeniuk. I explain with words and code.',
}) => {
  const author = 'Vladyslav Burdeniuk';
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="React, Typescript, JavaScript" />
        <meta name="author" content={author} />
        <meta property="og:url" content="https://vbrdnk.dev" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <header className="app-header">
        <h1>&#123;code•aligned&#125;</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backHome}>
          <Link href="/">
            <a>&larr; Back home</a>
          </Link>
        </div>
      )}
      <footer>
        <SocialLinks />
      </footer>
    </div>
  );
};

export default Layout;
