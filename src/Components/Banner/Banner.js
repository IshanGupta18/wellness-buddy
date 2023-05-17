import React from 'react';
import { useHistory } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

    const history = useHistory();

    const toggleToAppoint = () => {
        history.push('/appointment');
    }

    return (
        <div className="slider">
            <div>
                <div className="caption">
                    <p className="depression-solution fw-bold">EVERY DEPRESSION SOLUTION</p>
                    <h1>Best Psychologist Makes Excellent</h1>
                    <h4>Mental illness is not contagious you won't catch it by being kind</h4>
                    <button className="button" onClick={toggleToAppoint}><small>MAKE APPOINMENT</small></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;