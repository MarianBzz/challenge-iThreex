import React from 'react';
import { Employee } from '../types/employee';
import EmployeeItem from './EmployeeItem';

interface EmployeeCardProps {
  area: string;
  employees: Employee[];
  onEmployeeClick: (employee: Employee) => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  area,
  employees,
  onEmployeeClick,
}) => {
  return (
    <div className='flex-grow overflow-hidden rounded-md border drop-shadow-lg'>
      <div className='relative flex justify-center bg-slate-200'>
        <h2 className='text-center text-lg font-semibold'>{area}</h2>
      </div>

      <ul className='grid list-inside list-disc grid-cols-1  text-black sm:grid-cols-2'>
        {employees.map((employee) => (
          <EmployeeItem
            key={employee.id}
            employee={employee}
            onClick={() => onEmployeeClick(employee)}
          />
        ))}
      </ul>
    </div>
  );
};

export default EmployeeCard;
