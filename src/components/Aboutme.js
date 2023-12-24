import React from "react";
import ProfilePic from './ProfilePic';
import myname from '../assets/Name.svg';
const aboutme = () => {
    return (
        <div id="aboutme" className="intro-container">
            <ProfilePic imageUrl="./assets/ProfilePic.jpg" />
            <div className="intro-content">
                <img src={myname} alt="React" style={{ maxWidth: '100%', height: '50px' }} />
                <p><b>A bit about me</b></p>
                <p>My name is Mohammed Faijan, originally from Rajasthan and currently residing in Bangalore. I recently graduated in 2023 from the Acharya Institute of Graduate Studies.</p>
                <a href="/path/to/your/file.pdf" download="file_name.pdf" className="download-button disabled">
                    Download Resume
                </a>
            </div>
        </div>


    );
}

export default aboutme;