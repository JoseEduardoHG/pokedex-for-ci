import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { useEffect, useState } from 'react';
import Pokecard from './Pokecard';

const api = new PokemonClient();

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function getPokemons() {
    const resources = await api.getPokemonList();
    setPokemons(
      await Promise.all(
        resources.results.map(
          async (resource) => await api.getPokemon(resource.name),
        ),
      ),
    );
  }

  return (
    <article className='white mx-2 flex flex-wrap justify-center gap-4 bg-slate-800'>
      {pokemons.map((pokemon) => (
        <Pokecard key={pokemon.id} pokemon={pokemon} />
      ))}
    </article>
  );
}
