import './Index.css';
import AutomationStatus from './pages/ModelCardDownloads';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import Login from './pages/Login';
import { createContext, useEffect, useState } from 'react';

export const LoginContext = createContext();

export default function App() {
    return (
        <LoginContext.Provider value={[true, true]}>
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route
                            path="/ModelCardDownload"
                            element={<AutomationStatus />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </Header>
            </BrowserRouter>
        </LoginContext.Provider>
    );
}
