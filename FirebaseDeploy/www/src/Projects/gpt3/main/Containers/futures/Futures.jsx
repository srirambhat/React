import React from 'react';
import Feature from '../../Components/feature/Feature';
import './futures.css';

const futuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'We are improving by the day to end the distrusts being caused by OpenAI',
    },
    {
        title: 'Become the tended active',
        text: 'Become active on Chatbots and get all your questions answered.',
    },
    {
        title: 'Message or am nothing',
        text: 'Ask me anything via a message and will let you know immediately what the possibilities are..',
    },
    {
        title: 'Really boy law county',
        text: 'We are by the book and but dont use us in exams!!! not by law. ',
    },
];

const Futures = () => (
    <div className="gpt3__futures section__padding" id="futures">
        <div className="gpt3__futures-heading">
            <h1 className="gradient__text">
                The Future is Now and You Just Need to Realize It. Step into
                Future Today & make it Happen.
            </h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__futures-container">
            {futuresData.map((item, index) => (
                <Feature
                    title={item.title}
                    text={item.text}
                    key={item.title + index}
                />
            ))}
        </div>
    </div>
);

export default Futures;
