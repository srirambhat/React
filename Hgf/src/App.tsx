import './Index.css';
import { Header } from "./utils/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import EnhancedTable from './EnhancedTable';
import './styles.css';

//export const LoginContext = createContext();

export default function App() {   
    
    return (
        <div className="my-component">
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path="/EnhancedTable" element={<EnhancedTable />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </div>
    );
}
