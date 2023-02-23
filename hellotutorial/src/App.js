import './Index.css';
import Employee from './Components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('idk');
  const [employees, setEmployees] = useState (
    [
      {name: "Sriram Bhat", role : role, img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
      {name: "Maithri Bhat", role : "Mom", img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
      {name: "Tushar Bhat", role : "Son", img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
      {name: "Pranati Bhat", role : "Daughter", img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
      {name: "Sriram Bhat", role : "Dad", img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
      {name: "Maithri Bhat", role : "Mom", img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
      {name: "Tushar Bhat", role : "Son", img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
      {name: "Pranati Bhat", role : "Daughter", img : "https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"},
    ]
  );

  console.log('We are about to list the employee');
  const showEmployees = true;
  return (
    <div className="App">
      {console.log('inside the return')}
      { showEmployees ? (
        <>
          <input type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            } 
          }
        />
        <div className = "flex flex-wrap justify-center">
          { employees.map((employee) => {
              console.log(employee);
              return (<Employee 
                        //id={employee.id}
                        key = {uuidv4()}
                        name={employee.name} 
                        role={employee.role} 
                        img={employee.img} 
                      />
                    );
          })}
        </div>
      </>
    ) : (
        <p> You cannot see the employee</p>
      )}
    </div>
  )
}

export default App;
