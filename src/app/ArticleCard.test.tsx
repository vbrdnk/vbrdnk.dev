import { render, screen } from '@testing-library/react';
import { format, parseISO } from 'date-fns';

import ArticleCard from './ArticleCard';
import type { ArticleProps } from './ArticleCard';

const TEST_ARTICLE_PROPS: ArticleProps = {
  title: 'Test article',
  slug: 'test_article',
  description: 'Test article description',
  createdAt: '2021-08-31',
};

describe('Article Card', () => {
  it('renders article card', () => {
    render(<ArticleCard {...TEST_ARTICLE_PROPS} />);
    expect(screen.getByTestId(TEST_ARTICLE_PROPS.slug)).toBeInTheDocument();
    expect(screen.getByText(format(parseISO(TEST_ARTICLE_PROPS.createdAt), 'MMMM d, yyyy'))).toBeInTheDocument();
  });

  it('renders article card as article tag', () => {
    render(<ArticleCard {...TEST_ARTICLE_PROPS} />);
    expect(screen.getByTestId(TEST_ARTICLE_PROPS.slug).nodeName.toLowerCase()).toBe('article');
  });
});