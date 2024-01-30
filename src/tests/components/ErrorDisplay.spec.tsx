import ErrorDisplay from '@/components/ErrorDisplay';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('ErrorDisplay', () => {
  it('should render an error message based on the error message prop', () => {
    render(<ErrorDisplay error='Something went wrong' />);
    screen.getByText(/something went wrong/i);
  });

  it('should render an error message based on the error type prop', () => {
    render(<ErrorDisplay error={new Error('Something went wrong')} />);
    screen.getByText(/something went wrong/i);
  });
});
