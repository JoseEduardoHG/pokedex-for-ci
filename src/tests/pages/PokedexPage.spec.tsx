import PokedexPage from '@/pages/PokedexPage';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Pokedex', () => {
  it('should render a list of Pokecards', () => {
    render(<PokedexPage />);
    screen.getAllByTestId('pokemon-card');
  });
});
