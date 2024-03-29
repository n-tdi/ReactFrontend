import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../../services/EmployeeService'
import FormDiv from '../form/FormDiv'
import FormItem from '../form/FormItem'

const AddEmployee = () => {
    const navigation = useNavigate();

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((res) => {
            console.log(res);
            navigation("/")
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleClear = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            email: "",
        });
    }



  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add Employee</h1>
            </div>
            <FormItem text={"First Name"} name="firstName" value={employee.firstName} type="text" onChange={(e) => handleChange(e)} />
            <FormItem text={"Last Name"} name="lastName" value={employee.lastName} type="text" onChange={(e) => handleChange(e)} />
            <FormItem text={"Email"} name="email" value={employee.email} type="email" onChange={(e) => handleChange(e)} />

            <FormDiv cc="space-x-4 pt-4"  >
                <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2' onClick={saveEmployee}>
                    Save
                </button>
                <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2' onClick={handleClear}>
                    Clear
                </button>
            </FormDiv>
        </div>
    </div>
  )
}

export default AddEmployee