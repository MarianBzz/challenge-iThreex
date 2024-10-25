import React from 'react';

const EmployeeCardSkeleton: React.FC = () => {
  return (
    <div className='flex flex-grow animate-pulse flex-col items-center justify-center rounded-lg border bg-gray-200 p-4'>
      <div className='mb-2 h-8 w-32 rounded bg-gray-300'></div>
      <div className='mb-2 h-6 w-24 rounded bg-gray-300'></div>
      <div className='mb-1 h-4 w-20 rounded bg-gray-300'></div>
      <div className='h-4 w-20 rounded bg-gray-300'></div>
    </div>
  );
};

export default EmployeeCardSkeleton;
