import Footer from '@/components/Footer';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Footer', () => {
  it('should render the license', () => {
    render(<Footer />);
    screen.getByText(/mit license/i);
  });

  it('should render the copyright', () => {
    render(<Footer />);
    screen.getByText(/copyright ©️ 2024 joseeduardohg/i);
  });
});
