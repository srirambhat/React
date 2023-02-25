import '../Index.css';
import Employee from '../Components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';
import Header from '../Components/Header';

function Employees() {
    const [role, setRole] = useState('idk');
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'Sriram Bhat',
            role: role,
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
        {
            id: 2,
            name: 'Maithri Bhat',
            role: 'Mom',
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
        {
            id: 3,
            name: 'Tushar Bhat',
            role: 'Son',
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
        {
            id: 5,
            name: 'Pranati Bhat',
            role: 'Daughter',
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
        {
            id: 6,
            name: 'Sriram Bhat',
            role: 'Dad',
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
        {
            id: 7,
            name: 'Maithri Bhat',
            role: 'Mom',
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
        {
            id: 8,
            name: 'Tushar Bhat',
            role: 'Son',
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
        {
            id: 9,
            name: 'Pranati Bhat',
            role: 'Daughter',
            img: 'https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg',
        },
    ]);

    function updateEmployee(id, newName, newRole, newImg) {
        const updateEmployees = employees.map((employee) => {
            if (id === employee.id) {
                return {
                    ...employee,
                    name: newName,
                    role: newRole,
                    img: newImg,
                };
            }

            return employee;
        });

        setEmployees(updateEmployees);
    }

    function newEmployee(newName, newRole, newImg) {
        const NewEmployee = {
            id: uuidv4(),
            name: newName,
            role: newRole,
            img: newImg,
        };
        setEmployees([...employees, NewEmployee]);
    }

    console.log('We are about to list the employee');
    const showEmployees = true;
    return (
        <div className="">
            {console.log('inside the return')}
            {showEmployees ? (
                <>
                    {/*
          <input type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            } 
          }
        />
        */}

                    <div className="flex flex-wrap justify-center ">
                        {employees.map((employee) => {
                            const editEmployee = (
                                <EditEmployee
                                    id={employee.id}
                                    key={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    updateEmployee={updateEmployee}
                                />
                            );
                            return (
                                <Employee
                                    id={employee.id}
                                    key={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    editEmployee={editEmployee}

                                    // First way of sending the pointer to the function to call instead of the const above
                                    //updateEmployee={updateEmployee}
                                />
                            );
                        })}
                    </div>
                    <AddEmployee newEmployee={newEmployee} />
                </>
            ) : (
                <p> You cannot see the employee</p>
            )}
        </div>
    );
}

export default Employees;
