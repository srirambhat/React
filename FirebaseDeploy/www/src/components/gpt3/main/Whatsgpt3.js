import React from 'react';
import './whatsgpt3.css';
import { Article, Brand, CTA, Navbar } from './Components';
import {
    Footer,
    Blog,
    Futures,
    Possibility,
    WhatGPT3,
    Header,
} from './Containers';

function Whatsgpt3() {
    return (
        <div className="wsb__projects section__padding" id="projects">
            <div className="wsb__projects-heading">
                {/* <p> Whatsgpt3 </p> */}
                <Header />
                <Brand />
                <WhatGPT3 />
                <Futures />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
        </div>
    );
}

export default Whatsgpt3;
