import Button from '@/components/Button';
import ErrorDisplay from '@/components/ErrorDisplay';
import Pill from '@/components/Pill';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { capitalize } from '@/utils/utils';
import { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

export default function PokemonDetailPage() {
  const navigate = useNavigate();
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

  function handleClick() {
    navigate(-1);
  }

  return (
    <>
      {error && <ErrorDisplay error={error} />}
      {pokemon && (
        <>
          <section className='mx-4'>
            <Button onClick={handleClick}>
              <FaChevronLeft />
            </Button>
          </section>
          <section className='mx-4 flex flex-col gap-4'>
            <p className='caption mx-auto'>No. {pokemon.id}</p>
            <h2 className='mx-auto'>{capitalize(pokemon.name)}</h2>
            <img
              src={
                pokemon.sprites.other?.dream_world.front_default ??
                pokemon.sprites.other?.home.front_default ??
                pokemon.sprites.other?.official_artwork.front_default ??
                undefined
              }
              alt={`${pokemon.name} image`}
              className='mx-auto w-96'
            />
            <section className='mx-auto grid gap-8 grid-auto-fit-md'>
              {/* <p>{'description'}</p> */}
              <section className='flex flex-col gap-4'>
                <h3>Height</h3>
                <p>{pokemon.height / 10} m</p>
              </section>
              <section className='flex flex-col gap-4'>
                <h3>Weight</h3>
                <p>{pokemon.weight / 10} kg</p>
              </section>
              <section className='flex flex-col gap-4'>
                <h3>Species</h3>
                <p>{capitalize(pokemon.species.name)}</p>
              </section>
              {/* <p>{'category'}</p> */}
              <section className='flex flex-col gap-4'>
                <h3>Types</h3>
                <section className='flex gap-2'>
                  {pokemon.types.map((pokemonType) => (
                    <Pill
                      key={pokemonType.type.name}
                      name={capitalize(pokemonType.type.name)}
                    />
                  ))}
                </section>
              </section>
              <section className='flex flex-col gap-4'>
                <h3>Abilities</h3>
                <section className='flex gap-2'>
                  {pokemon.abilities.map((pokemonAbility) => (
                    <Pill
                      key={pokemonAbility.ability.name}
                      name={capitalize(pokemonAbility.ability.name)}
                    />
                  ))}
                </section>
              </section>
              <section className='flex flex-col gap-4'>
                <h3>Stats</h3>
                <section className='flex flex-wrap gap-2'>
                  {pokemon.stats.map((pokemonStat) => (
                    <Pill
                      key={pokemonStat.stat.name}
                      name={capitalize(pokemonStat.stat.name)}
                    />
                  ))}
                </section>
              </section>
              {/* <p data-testid='debility'>{'debility'}</p> */}
            </section>
          </section>
        </>
      )}
    </>
  );
}
