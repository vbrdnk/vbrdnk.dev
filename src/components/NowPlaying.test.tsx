import { screen } from '@testing-library/react';

import { getRender } from '@/tests/utils/getRender';
import { NowPlaying } from './NowPlaying';

describe('Now Playing ', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const render = getRender();

  it('renders "Not Playing" if song is not playing', async () => {
    render(<NowPlaying />);
    expect(screen.getByText('Not Playing')).toBeInTheDocument();
  });
});

