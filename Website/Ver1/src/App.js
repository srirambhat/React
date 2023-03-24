import './App.css';
import { Navbar } from './components';
import { Footer, Blog, Projects, Experience, Aboutme } from './containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cryptoline from './pages/Cryptocurrency/Cryptoline';

export default function App() {
    return (
        <>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar></Navbar>
                </div>
                <Aboutme />
                <Projects />
                <Experience />
                <Footer />
            </div>
        </>
    );
}
