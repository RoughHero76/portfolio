import React from "react";
import { Carousel } from 'antd';
import img1 from '../assets/Project/1.png';
import img2 from '../assets/Project/2.png';

const contentStyle: React.CSSProperties = {
    position: 'relative',
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const imageStyle: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
    borderRadius: '10px',
};

const textOverlay: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'pink',
    transform: 'translate(-50%, -50%)',
};

const mywork = () => {
    return (
        <div id="mywork" className="mywork-container">
            <Carousel effect="fade" autoplay="true">
                <div>
                    <a href="https://github.com/RoughHero76" target="_blank" rel="noopener noreferrer">
                        <h3 style={contentStyle}>
                            <img src={img1} style={imageStyle} alt="Project 1" />
                            <div style={textOverlay}>
                               AIGS MCA Forum
                            </div>
                        </h3>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/RoughHero76" target="_blank" rel="noopener noreferrer">
                        <h3 style={contentStyle}>
                            <img src={img2} style={imageStyle} alt="Project 2" />
                            <div style={textOverlay}>
                                Online Shopping 
                            </div>
                        </h3>
                    </a>
                </div>
                {/* Add more images as needed */}
            </Carousel>
        </div>
    );
}

export default mywork;
