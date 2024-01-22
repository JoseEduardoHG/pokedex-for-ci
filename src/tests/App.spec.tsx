import App from '@/App';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('App Component', () => {
  it('should render hello world', () => {
    render(<App />);
    screen.getByRole('heading', { name: /hello world/i });
  });
});
