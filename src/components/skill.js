import React from "react";
import mysqllogo from '../assets/mysql-horizontal.svg';
import gitlogo from '../assets/Git-logo.svg'
import reactlogo from '../assets/React-icon.svg';
import nodelogo from '../assets/Node.js_logo.svg';
import htmllogo from '../assets/html_logo.svg';
import flasklogo from '../assets/Flask_logo.svg';
import clogo from '../assets/c++-logo.svg';
import javalogo from '../assets/java-icon.svg';
import bootstraplogo from '../assets/Bootstrap_logo.svg';
import javaScriptlogo from '../assets/JavaScript_logo_2.svg';

const Skills = () => {
    return (
        <div>
            {/* Skills Container */}
            <div id="skill" className="skills-container">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>
                        <b>Language and Frameworks</b>
                        <div className="skills-grid">
                            {/* Each div represents a grid item */}

                            <div>
                                <img src={reactlogo} alt="React" />
                                <p>React</p>
                            </div>
                            <div>
                                <img src={nodelogo} alt="Node.js" />
                                <p>Node.js</p>
                            </div>

                            <div>
                                <img src={flasklogo} alt="Flask" />
                                <p>Flask</p>
                            </div>

                            <div>
                                <img src={bootstraplogo} alt="Boostrap" />
                                <p>BootStrap</p>
                            </div>

                            <div>
                                <img src={clogo} alt="C" />
                                <p>C/C++</p>
                            </div>

                            <div>
                                <img src={javalogo} alt="JavaLogo" />
                                <p>Java</p>
                            </div>

                            <div>
                                <img src={javaScriptlogo} alt="JavaScript" />
                                <p>JavaScript</p>
                            </div>

                            <div>
                                <img src={htmllogo} alt="HTML" />
                                <p>HTML</p>
                            </div>

                            {/* Add more divs for other languages and frameworks */}
                        </div>
                    </li>

                    <li>
                        <b>Databases</b>
                        <div className="skills-grid">

                            <div>
                                <img src={mysqllogo} alt="MySQL" />
                                <p>MySQL</p>
                            </div>


                        </div>
                    </li>


                    <li>
                        <b>Others</b>
                        <div className="skills-grid">

                            <div>
                                <img src={gitlogo} alt="Git" />
                                <p>Git</p>
                            </div>


                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;

