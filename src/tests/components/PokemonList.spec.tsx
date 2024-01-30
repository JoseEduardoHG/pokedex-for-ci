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
  },
  {
    id: 2,
    name: 'ivysaur',
    sprites: {},
    types: [],
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
