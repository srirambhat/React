import React from 'react';
import Project from '../../components/project/Project';
import './projects.css';

export default function Projects() {
    const projectsData = [
        {
            title: 'Smasher',
            text: 'Smasher Manufacturing User Interface',
            link: '/home',
        },
        {
            title: 'uFlix',
            text: 'uFlix is similar to Netflix UI',
            link: '/uflix',
        },
        {
            title: 'Whats GPT3',
            text: 'Whats GPT3 Website only',
            link: '/whatsgpt3',
        },
        {
            title: 'Crypto Coin tracker',
            text: 'Tracks BIT prices over a period of time.',
            link: '/cryptoline',
        },
        {
            title: 'Crypto Coin Investment tracker',
            text: 'Tracks your investment in Bitcoin.',
            link: '/cryptopie',
        },
    ];

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
