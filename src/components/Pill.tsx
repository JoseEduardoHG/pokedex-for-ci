interface PillProps {
  name: string;
}

export default function Pill({ name }: PillProps) {
  return (
    <span className='whitespace-nowrap rounded-full bg-slate-500 px-4 py-1'>
      {name}
    </span>
  );
}
