import Pokecard from '@/components/Pokecard';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const api = new PokemonClient();

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    api
      .getPokemonList((currentPage - 1) * itemsPerPage, itemsPerPage)
      .then((resourceList) => {
        setPageCount(Math.ceil(resourceList.count / itemsPerPage));

        return Promise.all(
          resourceList.results.map(
            async (resource) => await api.getPokemon(resource.name),
          ),
        );
      })
      .then((pokemons) => {
        setPokemons(pokemons);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  }, [currentPage]);

  return (
    <>
      {error ? (
        <section className='text-red-500'>{error}</section>
      ) : (
        <section className='flex flex-col justify-center gap-4'>
          <section className='white mx-2 flex flex-wrap justify-center gap-4 bg-slate-800'>
            {pokemons.map((pokemon) => (
              <Pokecard key={pokemon.id} pokemon={pokemon} />
            ))}
          </section>
          <ReactPaginate
            pageCount={pageCount}
            previousLabel='<'
            nextLabel='>'
            breakLabel='...'
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={(selectedItem) => {
              setCurrentPage(selectedItem.selected + 1);
            }}
            containerClassName='pagination'
            disableInitialCallback={true}
            pageLinkClassName='page-item'
            breakLinkClassName='page-item'
            previousLinkClassName='controls'
            nextLinkClassName='controls'
            activeLinkClassName='active'
          />
        </section>
      )}
    </>
  );
}
