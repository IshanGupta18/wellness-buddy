import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// icons 
const elementfaArrowRight = <FontAwesomeIcon icon={faArrowRight} />
const Service = (props) => {
    // destructuring 
    const { id, name, description, image } = props.service;
    return (
        < div className="single-service" >
            <div className="image">
                <img src={image} alt="" />
            </div>
            {/* single service text  */}
            <div className="information">
                <h3 className="name">{name}</h3>
                <p className="description">{description.slice(0, 300)}</p>
                <Link to={`/service/${id}`} className="read-details">READ DETAILS &nbsp;{elementfaArrowRight}</Link>
            </div>
        </div >
    );
};

export default Service;