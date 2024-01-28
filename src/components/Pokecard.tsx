import { Pokemon } from '@/services/pokeapi';
import { capitalize } from '@/utils/utils';

interface PokecardProps {
  pokemon: Pokemon;
}

export default function Pokecard({ pokemon }: PokecardProps) {
  return (
    <section
      role='cell'
      className='flex h-96 w-64 flex-col justify-between gap-2 rounded-lg bg-slate-700 px-4 py-2'
    >
      <img
        src={pokemon.sprites.other?.dream_world.front_default ?? undefined}
        alt={`${pokemon.name} image`}
        className='h-2/3'
      />
      <div className='flex h-1/3 flex-col justify-center'>
        <p className='opacity-60'>No. {pokemon.id}</p>
        <h3 className='text-xl font-bold'>{capitalize(pokemon.name)}</h3>
        <p>{capitalize(pokemon.types[0].type.name)}</p>
      </div>
    </section>
  );
}
