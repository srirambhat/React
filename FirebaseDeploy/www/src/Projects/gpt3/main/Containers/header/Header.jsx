import React from 'react';
import { ai, people } from '../../../../../assets/GPT3';
import './header.css';

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">
                Let&apos;s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p>
                OpenAI is open enough for everyone to use and ask questions as
                it is asking your friend about anything. It is almost like ask
                me anything (AMA) and i know the answer to it or i will form the
                answer based on what i find on the web.
            </p>

            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} alt="logo" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
        </div>
    </div>
);

export default Header;
