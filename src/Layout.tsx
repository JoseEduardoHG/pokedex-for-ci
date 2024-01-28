import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className='mx-auto my-8 max-w-screen-lg'>{children}</main>
      <Footer />
    </>
  );
}
