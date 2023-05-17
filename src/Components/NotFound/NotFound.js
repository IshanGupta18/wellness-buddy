import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// icons 
const elementfaArrowRight = <FontAwesomeIcon icon={faArrowCircleRight} />

const NotFound = () => {
    // redirecting to home page 
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }
    return (
        // not found page text 
        <div className="not-found pt-5">
            <h4>Oops ! Sorry... We Can't Find That Page.
            </h4>
            <p>Take a moment and Try using the button below to go to main of the site</p>
            {/* event handler for button click */}
            <img src="https://doyouconvert.com/wp-content/uploads/2018/04/404_Error.jpg" alt="" />
            <div>
                <button onClick={handleClick} className="button" >Back To Home Page {elementfaArrowRight}</button></div>
        </div>

    );
};
export default NotFound;