interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className='rounded-lg bg-yellow-300 px-4 py-2 text-lg font-bold text-slate-800 sm:w-fit'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
