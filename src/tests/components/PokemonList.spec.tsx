import PokemonList from '@/components/PokemonList';
import { Pokemon } from '@/services/pokeapi';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { describe, expect, it } from 'vitest';

interface MockPokemonListProps {
  pokemons: Pokemon[];
  onClick?: (pokemonId: number) => void;
}

const MockPokemonList = ({ pokemons, onClick }: MockPokemonListProps) => (
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <PokemonList pokemons={pokemons} onClick={onClick} />
    </QueryParamProvider>
  </BrowserRouter>
);

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
    render(<MockPokemonList pokemons={pokemons} />);
    screen.getByRole('grid');
  });

  it('should render a list of pokemons', () => {
    render(<MockPokemonList pokemons={pokemons} />);
    const elements = screen.getAllByRole('cell');
    expect(elements).toHaveLength(2);
  });
});
