import './Index.css';
import Employees from './pages/Employees';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from './pages/Customers';
import Customer from './pages/Customer';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './Components/NotFound';
import Login from './pages/Login';
import { createContext, useEffect, useState } from 'react';
import { baseUrl } from './shared';

export const LoginContext = createContext();

export default function App() {
    function refreshTokens() {
        if (localStorage.refresh) {
            const url = baseUrl + 'api/token/refresh/';
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh: localStorage.refresh,
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    localStorage.access = data.access;
                    localStorage.refresh = data.refresh;
                    setLoggedIn(true);
                })
                .catch((e) => {
                    console(e.message);
                });
        }
    }

    useEffect(() => {
        const minutes = 1000 * 60;
        refreshTokens();
        setInterval(refreshTokens, minutes * 3);
    }, []);

    const [loggedIn, setLoggedIn] = useState(
        localStorage.access ? true : false
    );

    function changeLoggedIn(value) {
        setLoggedIn(value);
        if (value === false) {
            localStorage.clear();
        }
    }
    return (
        <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
            <BrowserRouter>
                <Header>
                    <Routes>
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/customers/:id" element={<Customer />} />
                        <Route path="/dictionary" element={<Dictionary />} />
                        <Route
                            path="/dictionary/:search"
                            element={<Definition />}
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
