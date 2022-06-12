import './App.css';
import Navbar from './components/Navbar';
import AddEmployee from './components/AddEmployee';
import './components/css/AddEmployee.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';

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
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
