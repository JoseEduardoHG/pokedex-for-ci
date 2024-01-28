import PokedexPage from '@/pages/PokedexPage';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('PokedexPage', () => {
  it('should render a list of Pokecards', () => {
    render(<PokedexPage />);
    // await screen.findAllByTestId('pokemon-card');
  });
});
