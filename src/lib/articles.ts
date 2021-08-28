import { IArticle, IArticleFields } from 'common/types/contentful';
import client from 'lib/contentful-client';

export async function getAllArticleSlugs() {
  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: 'article',
    select: 'fields.slug',
  });

  return articleEntries.items.map(item => {
    return {
      params: {
        article: item.fields.slug,
      },
    };
  });
}

export async function getArticlePreviews(): Promise<IArticle[]> {
  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: 'article',
    select: 'fields.title,fields.slug,fields.description,sys.createdAt',
  });

  return <IArticle[]>articleEntries.items;
}

export async function getArticleData(slug: string | string[] = ''): Promise<IArticle> {
  const articleEntries = await client.getEntries<IArticleFields>({
    content_type: 'article',
    limit: 1,
    'fields.slug': slug,
  });

  const [article] = articleEntries.items;

  return <IArticle>article;
}
