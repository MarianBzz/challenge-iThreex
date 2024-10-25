'use client';
import { BookUser } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LayoutNavBar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <header className='sticky top-0 z-10 flex w-full items-center justify-between bg-red-500 p-4 text-white'>
        <div className='flex items-center gap-1'>
          <BookUser size={30} />

          <h1 className='text-2xl font-bold'>EmplyNet</h1>
        </div>
        <div className='flex items-center space-x-4'>
          <Image
            src='/messi.jpg'
            alt='Profile Image'
            width={100}
            height={100}
            className='h-10 w-10 rounded-full object-cover'
          />
        </div>
      </header>
      <main className='flex flex-1 flex-col bg-gray-100 px-2 pt-1'>
        {children}
      </main>
    </div>
  );
};

export default LayoutNavBar;
