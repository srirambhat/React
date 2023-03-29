import React from 'react';
import experienceInfo from '../../assets/SriramExpertise.png';
import partnerInfo from '../../assets/PartnerInfo.png';
import './experience.css';

export default function Experience() {
    return (
        <div className="wsb__experience section__padding" id="experience">
            <div className="wsb__experience-image">
                <h1 className="gradient__text">Expertise</h1>
                <img src={experienceInfo} alt="experienceInfo" />
            </div>
            <div className="wsb__experience-image">
                <h1 className="gradient__text">On/Off Shore</h1>
                <img src={partnerInfo} alt="partnerInfo" />
            </div>
        </div>
    );
}
