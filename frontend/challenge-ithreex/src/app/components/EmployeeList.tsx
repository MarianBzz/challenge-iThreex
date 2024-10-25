'use client';
import React, { useEffect, useState } from 'react';
import { Employee } from '../types/employee';
import EmployeeCard from './EmployeeCard';
import ModalDetail from './ModalDetail';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

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

  // Función para abrir el modal con el empleado seleccionado
  const handleEmployeeClick = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  return (
    <div className='flex-1 rounded-lg bg-white p-2'>
      <h1 className='mb-3 py-2 text-center text-lg font-bold text-gray-500'>
        Listado de Empleados por Área
      </h1>
      <div className='flex flex-wrap gap-4 text-black'>
        {Object.keys(employeesByArea).map((area) => (
          <EmployeeCard
            key={area}
            area={area}
            employees={employeesByArea[area]}
            onEmployeeClick={handleEmployeeClick}
          />
        ))}
      </div>
      {isModalOpen && selectedEmployee && (
        <ModalDetail
          employee={selectedEmployee}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default EmployeeList;
