import Pokecard from '@/components/PokemonCard';
import { Pokemon } from '@/services/pokeapi';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

const mockPokemon: Pokemon = {
  id: 3,
  name: 'Charmander',
  sprites: {
    other: {
      dream_world: {
        front_default: 'https://placehold.co/200',
        front_female: null,
      },
      home: {
        front_default: 'https://placehold.co/200',
        front_female: null,
        front_shiny: 'https://placehold.co/200',
        front_shiny_female: null,
      },
      official_artwork: {
        front_default: 'https://placehold.co/200',
        front_shiny: 'https://placehold.co/200',
      },
    },
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'Fire',
        url: 'https://pokeapi.co/api/v2/type/10/',
      },
    },
  ],
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
