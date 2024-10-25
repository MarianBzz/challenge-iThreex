'use client';
import React, { useEffect, useState } from 'react';
import { Employee } from '../types/Employee';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  interface CustomError {
    message: string;
    code?: number;
  }

  // Cargar empleados desde la API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/employees');
        if (!response.ok) {
          throw new Error('Error en la carga de empleados');
        }
        const data: Employee[] = await response.json();
        setEmployees(data);
      } catch (err) {
        const error = err as CustomError;
        setError(error.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <p>Cargando empleados...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Agrupar empleados por área
  const employeesByArea = employees.reduce<{ [key: string]: Employee[] }>(
    (acc, employee) => {
      if (!acc[employee.area]) {
        acc[employee.area] = [];
      }
      acc[employee.area].push(employee);
      return acc;
    },
    {}
  );

  return (
    <div className='grid grid-cols-1 gap-4 text-black sm:grid-cols-2'>
      {Object.keys(employeesByArea).map((area) => (
        <div
          key={area}
          className='mb-6 overflow-hidden rounded-md border border-black'
        >
          <h2 className='bg-slate-400 text-center text-xl font-semibold'>
            {area}
          </h2>
          <ul className='list-inside list-disc'>
            {employeesByArea[area].map((employee) => (
              <li
                key={employee.id}
                className='cursor-pointer hover:bg-gray-100'
              >
                <button>{employee.nombreCompleto}</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
