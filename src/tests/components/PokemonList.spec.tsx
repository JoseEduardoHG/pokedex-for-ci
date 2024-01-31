import PokemonList from '@/components/PokemonList';
import { Pokemon } from '@/services/pokeapi';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {},
    types: [],
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
  },
  {
    id: 2,
    name: 'ivysaur',
    sprites: {},
    types: [],
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
  },
];

describe('PokemonList', () => {
  it('should render a grid', () => {
    render(<PokemonList pokemons={pokemons} />);
    screen.getByRole('grid');
  });

  it('should render a list of pokemons', () => {
    render(<PokemonList pokemons={pokemons} />);
    const elements = screen.getAllByRole('cell');
    expect(elements).toHaveLength(2);
  });
});
