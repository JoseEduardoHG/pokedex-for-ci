import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/', { replace: true });
  }

  return (
    <section className='mx-4 flex flex-col gap-4'>
      <h1 className='text-3xl font-bold sm:text-6xl'>Page Not Found</h1>
      <p className='text-lg'>
        You should check if the URL provided was correct.
      </p>
      <Button text='Go to home' onClick={handleClick} />
    </section>
  );
}
