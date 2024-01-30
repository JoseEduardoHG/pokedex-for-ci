import Pill from '@/components/Pill';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Pill', () => {
  it('should render a text passed as prop', () => {
    render(<Pill name='test' />);
    screen.getByText(/test/i);
  });
});
