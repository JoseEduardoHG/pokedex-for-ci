import NotFoundPage from '@/pages/NotFoundPage';
import PokedexPage from '@/pages/PokedexPage';
import PokemonDetailPage from '@/pages/PokemonDetailPage';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<PokedexPage />} />
      <Route path='/pokemon/:pokemonId' element={<PokemonDetailPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
