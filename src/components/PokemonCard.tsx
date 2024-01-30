import Pill from '@/components/Pill';
import { Pokemon } from '@/services/pokeapi';
import { capitalize } from '@/utils/utils';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick?: (pokemonName: string) => void;
}

export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <section
      role='cell'
      className='flex h-96 cursor-pointer flex-col justify-between gap-2 rounded-lg bg-slate-700 px-4 py-2 transition-transform hover:scale-105 focus:scale-105'
      onClick={() => onClick?.(pokemon.name)}
    >
      <img
        src={
          pokemon.sprites.other?.dream_world.front_default ??
          pokemon.sprites.other?.home.front_default ??
          pokemon.sprites.other?.official_artwork.front_default ??
          undefined
        }
        alt={`${pokemon.name} image`}
        className='h-2/3'
      />
      <section className='flex h-1/3 flex-col justify-center gap-2'>
        <section>
          <p className='opacity-60'>No. {pokemon.id}</p>
          <h3 className='text-xl font-bold'>{capitalize(pokemon.name)}</h3>
        </section>
        <section className='flex items-center gap-2'>
          {pokemon.types.map((pokemonType) => (
            <Pill
              key={pokemonType.type.name}
              name={capitalize(pokemonType.type.name)}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
