import React from 'react';
import './blog.css';

export default function Blog() {
    return (
        <div className="wsb__blog section__padding" id="blog">
            <div className="wsb__blog-heading">
                <h1 className="gradient__text">Blogging Info</h1>
            </div>
            <div className="wsb__blog-container">
                <div className="wsb__blog-container_groupA"></div>
                <div className="wsb__blog-container_groupB"></div>
            </div>
        </div>
    );
}
