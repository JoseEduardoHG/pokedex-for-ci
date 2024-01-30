interface ErrorDisplayProps {
  error: Error | string;
}

export default function ErrorDisplay({ error }: ErrorDisplayProps) {
  return (
    <section className='text-red-500'>
      {error instanceof Error ? error.message : error}
    </section>
  );
}
