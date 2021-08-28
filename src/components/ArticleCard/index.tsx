import React from 'react';
import Link from 'next/link';

import Date from 'components/Date';
import { IArticle } from 'common/types/contentful';

interface ArticleProps {
  article: IArticle;
}

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <>
      <article>
        <header>
          <h3>
            <Link href={`/articles/${article.fields.slug}`}>
              <a>{article.fields.title}</a>
            </Link>
          </h3>
          <Date date={article.sys.createdAt} />
        </header>
        {article.fields.description && <p>{article.fields.description}</p>}
      </article>
    </>
  );
};

export default ArticleCard;
