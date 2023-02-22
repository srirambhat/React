import './Index.css';
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
        <div className = "flex flex-wrap justify-center">
          <Employee name = "Sriram Bhat" role ={role} img="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"/>
          <Employee name = "Maithri Bhat" role="Mom" img="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"/>
          <Employee name = "Tushar Bhat" role="Son" img="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"/>
          <Employee name = "Pranati Bhat" img="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"/>
          <Employee name = "Sriram Bhat" role ={role} img="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"/>
          <Employee name = "Maithri Bhat" role="Mom" img="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"/>
          <Employee name = "Tushar Bhat" role="Son" img="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg"/>
        </div>
      </>
    )  : (
        <p> You cannot see the employee</p>
      )}
    </div>
  )
}

export default App;
