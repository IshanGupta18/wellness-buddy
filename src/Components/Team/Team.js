import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Team.css';
// icons 
const elementfaArrowRight = <FontAwesomeIcon icon={faArrowRight} />
// team component 
const Team = (props) => {
    const { id, name, expertise, image, email, phone } = props.team;
    return (
        < div className="single-team" >
            <div className="image">
                <img src={image} alt="" />
            </div>
            {/* single service text  */}
            <div className="information">
                <h3 className="name">{name}</h3>
                <p className="description">{expertise}</p>
                <hr />
                <p className="description">{email}</p>
                <p className="description">{phone}</p>
                <Link to={`/service/${id}`} className="read-details">KNOW MORE &nbsp;{elementfaArrowRight}</Link>
            </div>

        </div >
    );
};

export default Team;