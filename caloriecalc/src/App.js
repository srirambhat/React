import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ListAllItems from './pages/ListAllItems';
import ListSingleItem from './pages/ListSingleItem';
import Navbar from './Headers/navbar';

function App() {
    return (
        <Navbar>
            <BrowserRouter>
                <Routes>
                    <Route path="/ListAllItems" element={<ListAllItems />} />
                    <Route
                        path="/ListSingleItem/:search"
                        element={<ListSingleItem />}
                    />
                </Routes>
            </BrowserRouter>
        </Navbar>
    );
}

export default App;
