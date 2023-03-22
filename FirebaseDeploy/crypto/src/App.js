import './Index.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './Components/NotFound';
import { useEffect, useState } from 'react';
import { baseUrl } from './shared';

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
        <BrowserRouter>
            <Header>
                <Routes>
                    <Route path="/dictionary" element={<Dictionary />} />
                    <Route
                        path="/dictionary/:search"
                        element={<Definition />}
                    />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Header>
        </BrowserRouter>
    );
}
