export interface Pokemon {
  id: string;
  name: string;
  type: string;
}

interface PokecardProps {
  pokemon: Pokemon;
}

export default function Pokecard({ pokemon }: PokecardProps) {
  return (
    <>
      <section
        data-testid='pokemon-card'
        className='flex flex-col gap-2 rounded-lg bg-slate-700 p-2'
      >
        <img src='https://placehold.co/200' alt='' className='mx-auto' />
        <p className='opacity-60'>No. {pokemon.id}</p>
        <h3 className='text-xl font-bold'>{pokemon.name}</h3>
        <p>{pokemon.type}</p>
      </section>
    </>
  );
}
