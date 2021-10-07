import type { NextPage } from 'next';

import Layout from 'components/Layout';

import styles from 'styles/404.module.scss';

const NotFound: NextPage = () => {
  return (
    <Layout title="Oops! Page not found.">
      <div className={styles.notFound}>
        <h3>Oops! Page not found.</h3>
        <h1>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <h2>We&apos;re sorry, but the page you requested was not found.</h2>
      </div>
    </Layout>
  );
};

export default NotFound;
