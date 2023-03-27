import './App.css';
import { Cryptoline, Cryptopie, Navbar, Whatsgpt3 } from './components';
import { Footer, Blog, Projects, Experience, Aboutme } from './containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar></Navbar>
                </div>
                {/* <Aboutme />
                <Projects />
                <Experience />
                <Footer /> */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/aboutme" element={<Aboutme />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/cryptoline" element={<Cryptoline />} />
                        <Route path="/cryptopie" element={<Cryptopie />} />
                        <Route path="/whatsgpt3" element={<Whatsgpt3 />} />
                        <Route path="/*" element={<Aboutme />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
