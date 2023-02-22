import './App.css';
import Employee from './Components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRol] = useState('idk');
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
              setRol(e.target.value);
            } 
          }
        />
        <Employee name = "Sriram Bhat" role ={role}/>
        <Employee name = "Maithri Bhat" role="Mom"/>
        <Employee name = "Tushar Bhat" role="Son"/>
        <Employee name = "Pranati Bhat" />
      </>
    )  : (
        <p> You cannot see the employee</p>
      )}
    </div>
  )
}

export default App;
