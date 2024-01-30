import ErrorDisplay from '@/components/ErrorDisplay';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetailPage() {
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (pokemonId) {
      const api = new PokemonClient();

      api
        .getPokemon(pokemonId)
        .then((pokemon) => {
          setPokemon(pokemon);
        })
        .catch((err: Error) => {
          console.error(err);
        });
    }
  }, [pokemonId]);

  return (
    <>
      {error ? (
        <ErrorDisplay error={error} />
      ) : (
        <>
          <p>No. 1</p>
          <h2>Bulbasur</h2>
          <p>
            Tras nacer, crece alimentándose durante un tiempo de los nutrientes
            que contiene el bulbo de su lomo.
          </p>
          <p>0.7 m</p>
          <p>6.9 kg</p>
          <p>Seed</p>
          <p>Espesura</p>
          <p data-testid={'type'}>Planta</p>
          <p data-testid='debility'>Fire</p>
        </>
      )}
    </>
  );
}
