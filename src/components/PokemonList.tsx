import { Pokemon } from '@/services/pokeapi';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
  pokemons: Pokemon[];
  onClick?: (pokemonId: number) => void;
}

export default function PokemonList({ pokemons, onClick }: PokemonListProps) {
  return (
    <section role='grid' className='grid-auto-fit-sm grid gap-4 bg-slate-800'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={onClick} />
      ))}
    </section>
  );
}
