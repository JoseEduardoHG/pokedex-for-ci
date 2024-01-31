import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
}

export default function Button({ text, children, onClick }: ButtonProps) {
  return (
    <button
      className='w-max whitespace-nowrap rounded-lg bg-yellow-300 px-4 py-2 text-lg font-bold text-slate-800 sm:w-fit'
      onClick={onClick}
    >
      {text ?? children ?? ''}
    </button>
  );
}
