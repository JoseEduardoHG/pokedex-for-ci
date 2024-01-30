import {
  NamedAPIResourceList,
  Pokemon,
  PokemonClient,
} from '@/services/pokeapi';
import { describe, expect, it, vi } from 'vitest';

const mockPokemonResponse: Pokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: {},
  types: [],
};

const mockResourceList: NamedAPIResourceList = {
  count: 2,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
  previous: null,
  results: [],
};

describe('PokemonClient', () => {
  it('should instantiate a new pokemon client without passing arguments', () => {
    const api = new PokemonClient();
    expect(api).toBeDefined();
  });

  it('should return a NamedApiResourceList if getPokemonList is called', async () => {
    const api = new PokemonClient();
    const spy = vi
      .spyOn(api, 'getPokemonList')
      .mockResolvedValue(mockResourceList);

    const pokemons = await api.getPokemonList();
    expect(pokemons).toEqual(mockResourceList);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturnedWith(mockResourceList);
  });

  it('should return a Pokemon object if getPokemon is called by its id', async () => {
    const api = new PokemonClient();
    const spy = vi
      .spyOn(api, 'getPokemon')
      .mockResolvedValue(mockPokemonResponse);

    const pokemon = await api.getPokemon(1);
    expect(pokemon).toEqual(mockPokemonResponse);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturnedWith(mockPokemonResponse);
  });

  it('should return a Pokemon object if getPokemon is called by its name', async () => {
    const api = new PokemonClient();
    const spy = vi
      .spyOn(api, 'getPokemon')
      .mockResolvedValue(mockPokemonResponse);

    const pokemon = await api.getPokemon('bulbasaur');
    expect(pokemon).toEqual(mockPokemonResponse);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveReturnedWith(mockPokemonResponse);
  });
});
