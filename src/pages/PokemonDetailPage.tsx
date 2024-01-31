import ErrorDisplay from '@/components/ErrorDisplay';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { capitalize } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetailPage() {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pokemonName) {
      const api = new PokemonClient();

      api
        .getPokemon(pokemonName)
        .then((pokemon) => {
          setPokemon(pokemon);
        })
        .catch((err: Error) => {
          setError(err.message);
        });
    }
  }, [pokemonName]);

  return (
    <>
      {error && <ErrorDisplay error={error} />}
      {pokemon && (
        <section className='mx-4 flex flex-col gap-4'>
          <p className='caption'>No. {pokemon.id}</p>
          <h2>{capitalize(pokemon.name)}</h2>
          <img
            src={
              pokemon.sprites.other?.dream_world.front_default ??
              pokemon.sprites.other?.home.front_default ??
              pokemon.sprites.other?.official_artwork.front_default ??
              undefined
            }
            alt={`${pokemon.name} image`}
            className=''
          />
          {/* <p>{'description'}</p> */}
          <h3>Height</h3>
          <p className='text-xl'>{pokemon.height / 10} m</p>
          <h3>Weight</h3>
          <p className='text-xl'>{pokemon.weight / 10} kg</p>
          {/* <p>{'category'}</p> */}
          <h3>Abilities</h3>
          <p className='text-xl'>
            {capitalize(pokemon.abilities[0].ability.name)}
          </p>
          <h3>Types</h3>
          <p className='text-xl' data-testid='type'>
            {capitalize(pokemon.types[0].type.name)}
          </p>
          {/* <p data-testid='debility'>{'debility'}</p> */}
        </section>
      )}
    </>
  );
}
