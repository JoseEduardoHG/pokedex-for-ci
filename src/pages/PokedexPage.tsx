import Pokecard from '@/components/Pokecard';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NumberParam, useQueryParam } from 'use-query-params';

const api = new PokemonClient();

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useQueryParam('page', NumberParam);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    api
      .getPokemonList(((page ?? 1) - 1) * itemsPerPage, itemsPerPage)
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
  }, [page]);

  return (
    <>
      {error ? (
        <section className='text-red-500'>{error}</section>
      ) : (
        <section className='flex flex-col justify-center gap-4'>
          <section
            role='grid'
            className='white mx-2 flex flex-wrap justify-center gap-4 bg-slate-800'
          >
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
              if (selectedItem.selected === 0) {
                setPage(undefined);
                return;
              }
              setPage(selectedItem.selected + 1);
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
