import './App.css';
import Employee from './Components/Employee';

function App() {
  console.log('We are about to list the employee');
  const showEmployees = true;
  return (
    <div className="App">
      {console.log('inside the return')}
      { showEmployees ? (
      <>
      
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      )  : (
        <p> You cannot see the employee</p>
      )}
    </div>
  )
}

export default App;
