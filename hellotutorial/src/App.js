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
      
          <Employee name = "Sriram Bhat" role ="Dad"/>
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
