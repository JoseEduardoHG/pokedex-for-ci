import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

const MockHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

describe('Header', () => {
  it('should render an image', () => {
    render(<MockHeader />);
    screen.getByRole('img');
  });
});
