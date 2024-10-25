import React from 'react';
import LayoutNavBar from './components/LayoutNavbar';
import EmployeeList from './components/EmployeeList';

const HomePage: React.FC = () => {
  return (
    <LayoutNavBar>
      <EmployeeList></EmployeeList>
      <div>hola gholadmaklsjdfn asd</div>
    </LayoutNavBar>
  );
};

export default HomePage;
