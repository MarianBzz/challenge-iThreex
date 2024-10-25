import React from 'react';
import { Employee } from '../types/employee';
import { CircleX } from 'lucide-react';

interface ModalDetailProps {
  employee: Employee;
  closeModal: () => void;
}

const ModalDetail: React.FC<ModalDetailProps> = ({ employee, closeModal }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative flex max-h-[80%] w-full flex-col justify-start gap-4 rounded-xl bg-white p-6 shadow-lg sm:w-2/6'>
        <button onClick={closeModal} className='absolute right-3 top-3'>
          <CircleX
            color='black'
            className='rounded-full bg-slate-50 hover:opacity-90'
          />
        </button>
        <h2 className='mb-2 text-2xl font-semibold text-gray-800'>
          {employee.nombreCompleto}
        </h2>
        <div className=' border-gray-300 pb-4'>
          <p className='text-gray-600'>
            Área:{' '}
            <span className='font-medium text-gray-800'>{employee.area}</span>
          </p>
          <p className='text-gray-600'>
            Edad:{' '}
            <span className='font-medium text-gray-800'>{employee.edad}</span>
          </p>
          <p className='text-gray-600'>
            Antigüedad:{' '}
            <span className='font-medium text-gray-800'>
              {employee.antiguedad} años
            </span>
          </p>
          <p className='text-gray-600'>
            Teléfono:{' '}
            <span className='font-medium text-gray-800'>
              {employee.telefono}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
