import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [handleshow, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', this);
        };
    }, []);

    return (
        <div className={`wsb__navbar ${handleshow && 'nav__black'}`}>
            <div className="wsb__navbar-links">
                <div className="wsb__navbar-links_logo">
                    {/* <img src={logo} alt={'logo'} /> */}
                </div>
                <div className="wsb__navbar-links_container">
                    <p>
                        <a href="/home">Home</a>
                    </p>
                    <p>
                        <a href="/experience">Experiences</a>
                    </p>
                    <p>
                        <a href="/projects">Projects</a>
                    </p>
                    <p>
                        <a href="/Aboutme">About Me</a>
                    </p>
                </div>
            </div>
            <div className="wsb__navbar-sign">
                <p>
                    Email: sriram.bhat@outlook.com <br />
                    Mobile: +1 425-559-0044
                </p>
                {/* <button type="button">Sign up</button> */}
            </div>
            <div className="wsb__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="wsb__navbar-menu_container scale-up-center">
                        <div className="wsb__navbar-menu_container-links">
                            <p>
                                <a href="/home">Home</a>
                            </p>
                            <p>
                                <a href="/experience">Experiences</a>
                            </p>
                            <p>
                                <a href="/projects">Projects</a>
                            </p>
                            <p>
                                <a href="/Aboutme">About Me</a>
                            </p>
                        </div>
                        <div className="wsb__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
