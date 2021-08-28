import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Row } from 'reactstrap';

import Layout from 'components/Layout';
import ArticleCard from 'components/ArticleCard';
import { getArticlePreviews } from 'lib/articles';
import { IArticle } from 'common/types/contentful';

import avatarPic from 'public/images/avatar.jpg';
import styles from 'styles/Home.module.scss';

interface HomeProps {
  articles: IArticle[];
}

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <Layout home>
      <aside>
        <div className={styles.avatar}>
          <Image src={avatarPic} alt="Vladyslav Burdeniuk" layout="fill" />
        </div>

        <p className={styles.description}>
          Personal blog by Vladyslav Burdeniuk.
          <br />I explain with words and code.
        </p>
      </aside>

      {articles.map(article => {
        return (
          <Row key={article.fields.slug} className={styles.articleWrapper}>
            <ArticleCard article={article} />
          </Row>
        );
      })}
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getArticlePreviews();

  return {
    props: {
      articles,
    },
    revalidate: 3600,
  };
};
