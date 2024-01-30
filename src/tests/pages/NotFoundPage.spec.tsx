import NotFoundPage from '@/pages/NotFoundPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

const MockNotFoundPage = () => (
  <BrowserRouter>
    <NotFoundPage />
  </BrowserRouter>
);

describe('NotFoundPage', () => {
  it('should render page not found', () => {
    render(<MockNotFoundPage />);
    screen.getByText(/page not found/i);
  });

  it('should render a little message', () => {
    render(<MockNotFoundPage />);
    screen.getByText(/you should check if the url provided was correct/i);
  });

  it('should render a button that says go to home', () => {
    render(<MockNotFoundPage />);
    screen.getByRole('button', { name: /go to home/i });
  });
});
