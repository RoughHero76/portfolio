import React from "react"
import rdelablogo from '../assets/rdelab-logo.svg';
const experience = () => {

    return (

        <div id="experience" className="experience-container">
            <h2>Experience</h2>
            <ul className="experience-list">
                <li><b>RdeLab Technologies</b>
                    <img src={rdelablogo} alt="RdeLab Logo" style={{ width: '100px', height: '100px' }} />

                    <p className="position"> <b> Position: </b> Full Stack Developer </p>
                    <b>Roles and Responsibilities</b>
                    <ul className="responsibilities">
                        <li>
                            <p>
                                I served as a full-stack developer for two distinct projects: an e-commerce website and a real
                                estate platform. Additionally, during an internship, I assumed the role of a team leader, guiding
                                fellow interns on the same aforementioned projects With HTML, Bootstrap, PHP, and
                                JavaScript.
                            </p>
                        </li>
                        <li>
                            <p>
                                I was tasked with completing the detail page of the product on the e-commerce website,
                                including its corresponding backend functionalities.
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    );
}

export default experience;
