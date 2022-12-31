import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/employee/AddEmployee';
import EmployeeList from './components/employee/EmployeeList';
import UpdateEmployee from './components/employee/UpdateEmployee';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route index element={<EmployeeList />} />
                <Route path="/employeeeList" element={<EmployeeList />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
                <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
