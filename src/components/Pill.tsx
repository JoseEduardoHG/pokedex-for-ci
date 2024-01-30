interface PillProps {
  name: string;
}

export default function Pill({ name }: PillProps) {
  return (
    <span className='w-fit rounded-full bg-slate-500 px-4 py-2'>{name}</span>
  );
}
