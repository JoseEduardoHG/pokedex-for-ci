import Button from '@/components/Button';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Button', () => {
  it('should render the text passed as prop', () => {
    render(<Button text='Foo' />);
    screen.getByRole('button', { name: /foo/i });
  });
});
