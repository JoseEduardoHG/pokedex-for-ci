import ErrorDisplay from '@/components/ErrorDisplay';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
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
        <section>
          <p>No. {pokemon.id}</p>
          <h2>{pokemon.name}</h2>
          <p>{'description'}</p>
          <p>{pokemon.height} m</p>
          <p>{pokemon.weight} kg</p>
          <p>{'category'}</p>
          <p>{pokemon.abilities[0].ability.name}</p>
          <p data-testid='type'>{pokemon.types[0].type.name}</p>
          <p data-testid='debility'>{'debility'}</p>
        </section>
      )}
    </>
  );
}
