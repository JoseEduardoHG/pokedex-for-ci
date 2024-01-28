import Pokecard from '@/components/Pokecard';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const api = new PokemonClient();

export default function Pokedex() {
  const [totalOfPages, setTotalOfPages] = useState(0);
  // const [next, setNext] = useState<string | null>(null);
  // const [previous, setPrevious] = useState<string | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemons()
      .then()
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function getPokemons(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    const resources = await api.getPokemonList(offset, limit);
    setTotalOfPages(Math.ceil(resources.count / limit));
    // setNext(resources.next);
    // setPrevious(resources.previous);
    setPokemons(
      await Promise.all(
        resources.results.map(
          async (resource) => await api.getPokemon(resource.name),
        ),
      ),
    );
  }

  function handlePageClick(data: { selected: number }) {
    getPokemons(data.selected + 1)
      .then()
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <article className='white mx-2 flex flex-wrap justify-center gap-4 bg-slate-800'>
        {pokemons.map((pokemon) => (
          <Pokecard key={pokemon.id} pokemon={pokemon} />
        ))}
      </article>
      <ReactPaginate
        pageCount={totalOfPages}
        previousLabel='<<'
        nextLabel='>>'
        breakLabel='...'
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName='pagination'
        disableInitialCallback={true}
        pageLinkClassName='page-item'
        breakLinkClassName='page-item'
        previousLinkClassName='controls'
        nextLinkClassName='controls'
        activeLinkClassName='active'
      />
    </>
  );
}
