'use client';
import { useState } from 'react';
import { Employee } from '../types/employee';
import { ChevronsRight } from 'lucide-react';

interface EmployeeItemProps {
  employee: Employee;
  onClick: () => void;
}

const EmployeeItem: React.FC<EmployeeItemProps> = ({ employee, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      key={employee.id}
      onClick={onClick}
      className={`relative cursor-pointer border px-3 py-2 transition-all duration-200 ${
        hovered ? 'bg-gray-200' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Contenedor para el nombre y su efecto de difuminado */}
      <h3
        className={`text-base transition-opacity duration-200 ${
          hovered ? 'opacity-20' : 'opacity-100'
        }`}
      >
        {employee.nombreCompleto}
      </h3>

      {hovered && (
        <span className='absolute bottom-0 right-0 ml-auto flex h-full items-center gap-0.5 rounded-md bg-transparent pl-3 text-center text-xs text-blue-500 backdrop-blur-md'>
          Ver detalle
          {/* <UserSearch size={14} /> */}
          <ChevronsRight size={15} />
        </span>
      )}
    </button>
  );
};

export default EmployeeItem;
