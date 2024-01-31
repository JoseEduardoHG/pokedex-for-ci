import PokemonCard from '@/components/PokemonCard';
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
  abilities: [],
  base_experience: 0,
  forms: [],
  height: 0,
  is_default: false,
  order: 0,
  species: {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
  },
  stats: [],
  weight: 0,
  game_indices: [],
  held_items: [],
  location_area_encounters: '',
  moves: [],
  past_types: [],
};

describe('Pokecard', () => {
  it('should render an image', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    screen.getByRole('img');
  });

  it('should render an id number', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    screen.getByText(/no. \d+/i);
  });

  it('should render the name of pokémon', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    screen.getByText(/Charmander/i);
  });

  it('should render the type of the pokémon', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    screen.getByText(/Fire/i);
  });
});
