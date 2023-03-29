import React from 'react';
import { possibilityImage } from '../../../../../assets/GPT3';
import './possibility.css';

const Possibility = () => (
    <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">
                The possibilities are <br /> beyond your imagination
            </h1>
            <p>
                OpenAI is open enough for everyone to use and ask questions as
                it is asking your friend about anything. It is almost like ask
                me anything (AMA) and i know the answer to it or i will form the
                answer based on what i find on the web.
            </p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
);

export default Possibility;
