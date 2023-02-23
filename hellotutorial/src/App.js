import './Index.css';
import Employees from './pages/Employees';
import Header from './Components/Header';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';


function App() {
  
  return (
    
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees/>} />
            <Route path='/customers' element={<Customers/>} />
          </Routes>
        </Header>
      </BrowserRouter>
      
    
  );
}

export default App;
