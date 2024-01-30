import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-2 bg-slate-900 px-8 py-4'>
      <p className='text-2xl font-bold'>Copyright ©️ 2024 JoseEduardoHG</p>
      <p className='text-2xl'>Released under MIT License</p>
      <p className='flex flex-col gap-2 text-2xl sm:flex-row'>
        You can see the source code on{' '}
        <span className='font-bold text-yellow-300 underline'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/JoseEduardoHG/pokedex-for-ci'
            className='flex items-center gap-2'
          >
            GitHub
            <span>
              <FaExternalLinkAlt size={18} />
            </span>
          </a>
        </span>
      </p>
    </footer>
  );
}
