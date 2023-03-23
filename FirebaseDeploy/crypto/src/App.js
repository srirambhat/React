import './Index.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cryptoline from './pages/cryptoline';
import Cryptopie from './pages/cryptopie';
import NotFound from './Components/NotFound';
import { useEffect, useState } from 'react';
import { baseUrl } from './shared';

export default function App() {
    return (
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/cryptoline" element={<Cryptoline />} />
                    <Route path="/cryptopie" element={<Cryptopie />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Header>
        </BrowserRouter>
    );
}
