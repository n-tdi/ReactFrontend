import React, {useState, useEffect} from 'react'
import FormItem from '../form/FormItem'
import FormDiv from '../form/FormDiv'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../../services/EmployeeService'

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        email: "", 
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    }

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id).then(
            (res) => {
                navigate("/");
            }
        ).catch ((error) => {
            console.log(error);
        });
        
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Update Employee</h1>
            </div>
            <FormItem text={"First Name"} name="firstName" value={employee.firstName} type="text" onChange={(e) => handleChange(e)} />
            <FormItem text={"Last Name"} name="lastName" value={employee.lastName} type="text" onChange={(e) => handleChange(e)} />
            <FormItem text={"Email"} name="email" value={employee.email} type="email" onChange={(e) => handleChange(e)} />

            <FormDiv cc="space-x-4 pt-4"  >
                <button className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-2' onClick={updateEmployee}>
                    Update
                </button>
                <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2' onClick={handleCancel}>
                    Cancel
                </button>
            </FormDiv>
        </div>
    </div>
  )
}

export default UpdateEmployee