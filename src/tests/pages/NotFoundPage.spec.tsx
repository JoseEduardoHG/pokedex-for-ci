import NotFoundPage from '@/pages/NotFoundPage';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('NotFoundPage', () => {
  it('should render page not found', () => {
    render(<NotFoundPage />);
    screen.getByText(/page not found/i);
  });

  it('should render a little message', () => {
    render(<NotFoundPage />);
    screen.getByText(/you should check if the url provided was correct/i);
  });

  it('should render a button that says go to home', () => {
    render(<NotFoundPage />);
    screen.getByRole('button', { name: /go to home/i });
  });
});
