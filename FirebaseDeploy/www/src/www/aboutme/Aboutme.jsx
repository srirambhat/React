import React from 'react';
import ai from '../../assets/SriramPic.png';
import pdf from '../../assets/SriramResume.pdf';
import './aboutme.css';

export default function Aboutme() {
    const handleClick = () => {
        console.log('in handleClick');
        window.open(pdf);
    };

    return (
        <div className="wsb__aboutme section__padding" id="home">
            <div className="wsb__aboutme-content">
                <h1 className="gradient__text">Sriram Bhat</h1>
                <p>
                    An accomplished Engineering leader with experience in{' '}
                    <b>
                        Windows OS/Drivers, Networking, AWS Deployment(s),
                        Android Apps Development, Full Stack & Embedded SW
                        development.
                    </b>
                </p>
                <p className="tab">- Product development,</p>
                <p className="tab">- Quality & Speed of Delivery, </p>
                <p className="tab">- Organizational Leadership & </p>
                <p className="tab">- Performance Improvement. </p>
                <p>
                    Demonstrates collaborative leadership skills and ability to
                    champion efforts across organizations. Experienced in
                    guiding team through analysis, planning, prioritization &
                    execution with an excellent customer focus. Exhibits a
                    strong sense of ownership of any product/across team(s),
                    motivates team to celebrate and learn from experiments
                </p>

                <div className="wsb__aboutme-content__input">
                    <button className="button" onClick={() => handleClick()}>
                        Click for Resume
                    </button>
                    {/*
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button> */}
                </div>

                <div className="wsb__aboutme-content__people">
                    {/* <img src={people} alt="logo" /> */}
                    {/* <p>1,600 people requested access a visit in last 24 hours</p> */}
                </div>
            </div>

            <div className="wsb__aboutme-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
}
