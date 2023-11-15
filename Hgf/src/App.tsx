import './Index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import EnhancedTable from './EnhancedTable';
import './styles.css';
import { Header } from './utils/Header';

//export const LoginContext = createContext();

export default function App() {   
    
    return (
        <>
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/EnhancedTable" element={<EnhancedTable />} />
                </Routes>
            </Header>
        </BrowserRouter>
        </>
    );
}
