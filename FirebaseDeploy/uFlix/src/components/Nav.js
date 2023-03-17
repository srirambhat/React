import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';

function Nav() {
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
        <div className={`nav ${handleshow && 'nav__black'}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Movie_Web_Site.png"
                alt="Netflix Logo"
            ></img>
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix-Avatar"
            ></img>
        </div>
    );
}

export default Nav;
