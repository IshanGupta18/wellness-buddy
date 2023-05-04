import React from 'react';

import './Banner.css';
// banner component 
const Banner = () => {
    return (
        // slider 
        <div className="slider">
            <div>
                <div className="caption">
                    <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                    <h1>Best Psychologist Makes Excellent</h1>
                    <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                    <button className="button"><small>MAKE APPOINMENT</small></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;