import Pokedex from '@/components/Pokedex';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Pokedex', () => {
  it('should render a list of Pokecards', () => {
    render(<Pokedex />);
    screen.getAllByTestId('pokemon-card');
  });
});
