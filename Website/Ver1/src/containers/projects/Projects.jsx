import React from 'react';
import Project from '../../components/project/Project';
import './projects.css';

const projectsData = [
    {
        title: 'Smasher',
        text: 'Smasher Manufacturing User Interface',
        link: 'https://gpt3-136be.web.app/',
    },
    {
        title: 'uFlix',
        text: 'uFlix is similar to Netflix UI',
        link: 'https://youflix-afdc1.web.app/',
    },
    {
        title: 'Whats GPT3',
        text: 'Whats GPT3 Website only',
        link: 'https://gpt3-136be.web.app/',
    },
    {
        title: 'Crypto Coin tracker',
        text: 'Tracks BIT prices over a period of time.',
        link: 'https://crypto-32d69.web.app/',
    },
    {
        title: 'Crypto Coin Investment tracker',
        text: 'Tracks your investment in Bitcoin.',
        link: 'https://crypto-32d69.web.app/',
    },
];

export default function Projects() {
    return (
        <div className="wsb__projects section__padding" id="projects">
            <div className="wsb__projects-heading">
                <h1 className="gradient__text">Project1</h1>
                <p>Project2</p>
            </div>
            <div className="wsb__projects-container">
                {projectsData.map((item, index) => (
                    <>
                        <Project
                            title={item.title}
                            text={item.text}
                            link={item.link}
                            key={item.title + index}
                        />
                    </>
                ))}
            </div>
        </div>
    );
}
