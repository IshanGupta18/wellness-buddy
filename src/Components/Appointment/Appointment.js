import React from 'react';
import './Appointment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhoneAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons';

// fonts 
const elementfaPhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
const elementfaMapMarker = <FontAwesomeIcon icon={faMapMarker} />
const elementfaMailBulk = <FontAwesomeIcon icon={faMailBulk} />
// appointment component 
const Appointment = () => {
    return (
        <div className="appointment mb-5">
            <div className="appointment-banner">
                <h1>Appointment</h1>
            </div>
            {/* form-appointment */}
            <div className="form-appointment">
                <div className="contact-form mt-5 py-5">
                    <h1 className="mb-4 text-light">Don’t Hesitate, Conatct Us</h1>
                    <div className="Appointment-form mb-3">
                        <div><input className="input-form" type="text" placeholder="Your Name" /></div>
                        <div> <input className="input-form" type="email" placeholder="Email Address" /> </div>
                        <div><input className="input-form" type="text" placeholder="Phone Number" /> </div>
                        <div><input className="input-form" type="text" placeholder="Your problem" /> </div>

                    </div>
                    <div className="write-message"><input className="input-message" type="text" name="" id="" placeholder="Write Message" /> </div>
                    <button className="button" type="submit">Make Appointment</button>
                </div>

                {/* contact info  */}
                <div>
                    <h2 className="professional-psychology mt-5">Have Any Questins Or Book Directly</h2>
                    <p className="depression-solution fw-bold">CONTACT INFO</p>
                    <div className="paragraph">
                        <p className="mb-3">If you face any mental problem contact with us. And make appoinment for meeting with our expert psychatrists. We are always here to help you for get rid of your mental stress.</p>
                        <p><span className="icons">{elementfaPhoneAlt}</span>  +2 365 352 2541</p>
                        <p><span className="icons">{elementfaMapMarker}</span> 1306 Medow view, New York, USA</p>
                        <p><span className="icons">{elementfaMailBulk}</span> mentalcarevio@gmail.com</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Appointment;