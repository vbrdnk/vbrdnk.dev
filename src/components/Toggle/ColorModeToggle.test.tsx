import { render, screen } from '@testing-library/react';
import ColorModeToggle from './';

describe('ColorModeToggle', () => {
  it('it renders color theme toggle', async () => {
    render(<ColorModeToggle />);
    const button = screen.getByTestId('color-theme-toggle');
    expect(button).toBeVisible();
    expect(button).toHaveClass('toggle');
  });
});

