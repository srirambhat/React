import React from 'react';
// import wsbLogo from '../../logo.svg';
import './footer.css';

export default function Footer() {
    return (
        <div className="wsb__footer section__padding">
            <div className="wsb__footer-heading">
                <h1 className="gradient__text">Footer1</h1>
            </div>

            {/* <div className="wsb__footer-btn">
            <p>Request Early Access</p>
        </div> */}

            <div className="wsb__footer-links">
                <div className="wsb__footer-links_logo">
                    {/* <img src={wsbLogo} alt="wsb_logo" /> */}
                    {/* <p>
                    Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights
                    Reserved
                </p> */}
                </div>
                <div className="wsb__footer-links_div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                {/* <div className="wsb__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div> */}
                <div className="wsb__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Sriram Bhat</p>
                    <p>425-559-0044</p>
                    <p>sriram68.bhat@outlook.com</p>
                </div>
            </div>

            <div className="wsb__footer-copyright">
                <p>@2021 Sriram. All rights reserved.</p>
            </div>
        </div>
    );
}
