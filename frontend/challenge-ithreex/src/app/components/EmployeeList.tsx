'use client';
import React, { useEffect, useState } from 'react';
import { Employee } from '../types/Employee';
import { Users } from 'lucide-react';

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
    <div className='flex-1 rounded-lg bg-white p-2 pt-3 '>
      <div className='grid grid-cols-1 gap-4 text-black sm:grid-cols-2'>
        {Object.keys(employeesByArea).map((area) => (
          <div
            key={area}
            className='overflow-hidden rounded-md border drop-shadow-lg'
          >
            <div className='relative flex justify-center bg-slate-200'>
              <h2 className='text-center text-lg font-semibold'>{area}</h2>
              <section className='absolute right-2 top-1 flex items-center'>
                <p className='text-xs'>7</p>
                <Users size={16} />
              </section>
            </div>

            <ul className='grid list-inside list-disc grid-cols-1 gap-1 text-black sm:grid-cols-2'>
              {employeesByArea[area].map((employee) => (
                <div
                  key={employee.id}
                  className='cursor-pointer border px-3 py-2'
                >
                  <button>{employee.nombreCompleto}</button>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
