import React from 'react';
// import Feature from '../../components/feature/Feature';
import Feature from '../../Components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <Feature
                title="What is GPT-3"
                text="GPT3 is a AMA (Ask Me Anything) using OpenAI and so, go ahead and ask me anything and i should be able to tell you about it."
            />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">
                The possibilities are beyond your imagination
            </h1>
            <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature
                title="Chatbots"
                text="Chatbots are your friends when you want to know something about your account, info about a place, sales tool to say the least"
            />
            <Feature
                title="Knowledgebase"
                text="There is abundance of knowledge on the WWW and it for us AI Bots to find it for you intelligently."
            />
            <Feature
                title="Education"
                text="Dont use me to pass your exams!!! it is called cheating."
            />
        </div>
    </div>
);

export default WhatGPT3;
