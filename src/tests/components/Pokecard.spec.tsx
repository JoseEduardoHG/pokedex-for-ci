import Pokecard from '@/components/Pokecard';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

const mockPokemon = {
  id: '0004',
  name: 'Charmander',
  type: 'Fire',
};

describe('Pokecard', () => {
  it('should render an image', () => {
    render(<Pokecard pokemon={mockPokemon} />);
    screen.getByRole('img');
  });

  it('should render an id number', () => {
    render(<Pokecard pokemon={mockPokemon} />);
    screen.getByText(/no. \d+/i);
  });

  it('should render the name of pokémon', () => {
    render(<Pokecard pokemon={mockPokemon} />);
    screen.getByText(/Charmander/i);
  });

  it('should render the type of the pokémon', () => {
    render(<Pokecard pokemon={mockPokemon} />);
    screen.getByText(/Fire/i);
  });
});
