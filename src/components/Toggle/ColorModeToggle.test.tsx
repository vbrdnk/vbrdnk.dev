import { render, screen, fireEvent } from '@testing-library/react';

import { ColorModeToggle } from '@/components/Toggle/ColorModeToggle';

const toggleColorModeMock = jest.fn();

describe('ColorModeToggle', () => {
  it('it renders color theme toggle', async () => {
    render(<ColorModeToggle />);
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('color-mode-toggle-icon');

    expect(button).toBeVisible();
    expect(icon).toBeVisible();
    expect(icon).toHaveClass('toggle');
  });

  it('toggles color mode on button click', () => {
    render(<ColorModeToggle />);
    const button = screen.getByRole('button');
    button.onclick = toggleColorModeMock;
    fireEvent.click(button);
    expect(toggleColorModeMock).toHaveBeenCalledTimes(1);
  });
});

