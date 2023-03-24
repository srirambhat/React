import React from 'react';
import './project.css';

export default function Project({ title, text, link }) {
    console.log('title: ', title, 'text:', text, 'link: ', link);

    const handleClick = (link) => {
        console.log('Link: ', link);
        window.location.href = link;
    };

    return (
        <div className="wsb__project-container__feature">
            <div className="wsb__project-container__feature-title">
                <h1>
                    <button
                        className="wsb__project-container__feature-button"
                        onClick={() => handleClick(link)}
                    >
                        {title}
                    </button>
                </h1>

                <div />
            </div>
            <div className="wsb__project-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    );
}
