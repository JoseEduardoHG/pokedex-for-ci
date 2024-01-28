export default function Footer() {
  return (
    <footer className='flex flex-col items-center gap-2 bg-slate-900 px-8 py-4'>
      <p className='text-2xl font-bold'>Copyright ©️ 2024 JoseEduardoHG</p>
      <p className='text-2xl'>Released under MIT License</p>
      <p className='flex gap-2 text-2xl'>
        You can see the source code on{' '}
        <span className='font-bold text-blue-200'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/JoseEduardoHG/pokedex-for-ci'
          >
            GitHub
          </a>
        </span>
      </p>
    </footer>
  );
}
