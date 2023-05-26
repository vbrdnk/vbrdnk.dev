import { render, screen } from '@testing-library/react';

import Date from './Date';

describe('Date', () => {
  it('it renders correctly formatted date string', async () => {
    render(<Date date='2021-08-31' />);
    expect(screen.getByTestId('date')).toHaveTextContent('August 31, 2021');
  });
});

