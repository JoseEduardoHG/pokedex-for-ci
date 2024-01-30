import ErrorDisplay from '@/components/ErrorDisplay';
import PokemonList from '@/components/PokemonList';
import { Pokemon, PokemonClient } from '@/services/pokeapi';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NumberParam, useQueryParam } from 'use-query-params';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useQueryParam('page', NumberParam);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 10;

  useEffect(() => {
    const api = new PokemonClient();

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

  function handleClick(pokemonId: number) {
    console.log(`Clicked on pokemon ${pokemonId}`);
  }

  return (
    <>
      {error ? (
        <ErrorDisplay error={error} />
      ) : (
        <section className='mx-4 flex flex-col justify-center gap-4'>
          <PokemonList pokemons={pokemons} onClick={handleClick} />
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
