import Pokecard from './Pokecard';

export default function Pokedex() {
  // TODO: remove the comment below before commit
  // cSpell: disable
  const pokemons = [
    { id: '0001', name: 'Bulbasaur', type: 'Grass' },
    { id: '0002', name: 'Ivysaur', type: 'Grass' },
    { id: '0003', name: 'Venusaur', type: 'Grass' },
    { id: '0004', name: 'Charmander', type: 'Fire' },
    { id: '0005', name: 'Charmeleon', type: 'Fire' },
    { id: '0006', name: 'Charizard', type: 'Fire' },
    { id: '0007', name: 'Squirtle', type: 'Water' },
    { id: '0008', name: 'Wartortle', type: 'Water' },
    { id: '0009', name: 'Blastoise', type: 'Water' },
  ];

  return (
    <article className='white grid grid-cols-4 gap-4 bg-slate-800'>
      {pokemons.map((pokemon) => (
        <Pokecard key={pokemon.id} pokemon={pokemon} />
      ))}
    </article>
  );
}
