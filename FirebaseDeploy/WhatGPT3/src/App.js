import './App.css';
import { Article, Brand, CTA, Navbar } from './components';
import {
    Footer,
    Blog,
    Futures,
    Possibility,
    WhatGPT3,
    Header,
} from './containers';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar></Navbar>
            </div>
            <Header />
            <Brand />
            <WhatGPT3 />
            <Futures />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
