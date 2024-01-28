import pokeball from '@/assets/pokeball.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-yellow-300 px-8 py-4 2xl:px-72'>
      <Link to={'/'}>
        <img src={pokeball} alt='Pokéball' className='h-12' />
      </Link>
    </header>
  );
}
