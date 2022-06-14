import './App.css';
import Navbar from './components/Navbar';
import './components/css/AddEmployee.css'
import './components/css/EmployeeList.css'
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<EmployeeList />} />
      <Route path='/' element={<EmployeeList />} />
      <Route path='/employeeList' element={<EmployeeList />} />
      <Route path='/addEmployee' element={<AddEmployee />} />
      <Route path='/updateEmployee/:id' element={<UpdateEmployee />} />
</Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
