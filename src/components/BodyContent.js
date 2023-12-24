import React from 'react';

import './BodyContent.css';
import Aboutme from './Aboutme';
import Skills from './skill';
import Experience from './experience';
import Mywork from './mywork';
const BodyContent = () => {
    return (
        <div className="body-content">
            {/* Intro Container */}
            <Aboutme />
            <Skills />
            <Experience />
            <Mywork />
        </div>
    );
};

export default BodyContent;
