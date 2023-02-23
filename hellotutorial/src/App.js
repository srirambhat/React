import './Index.css';
import Employees from './pages/Employees';
import Header from './Components/Header';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';


function App() {
  
  return (
    <Header>
      <Employees />
    </Header>
      
    
  );
}

export default App;
