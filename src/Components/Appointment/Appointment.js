import React, { useState } from 'react';
import './Appointment.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhoneAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

// fonts 
const elementfaPhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
const elementfaMapMarker = <FontAwesomeIcon icon={faMapMarker} />
const elementfaMailBulk = <FontAwesomeIcon icon={faMailBulk} />

// appointment component 
const Appointment = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [problem, setProblem] = useState("");
    const [message, setMessage] = useState("");

    const history = useHistory();

    const handleAppointment = () => {
        // console.log(name, email, phone, problem, message);
        
        const data = {name, email, phone, problem, message};
        fetch('http://localhost:3102/bookappointment', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            history.push('/home');
        })
        .catch((err) => console.log(err));
    }

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
                        <div> <input className="input-form" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />  </div>
                        <div> <input className="input-form" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} /> </div>
                        <div> <input className="input-form" type="number" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} /> </div>
                        <div> <input className="input-form" type="text" placeholder="Your problem" value={problem} onChange={(e) => setProblem(e.target.value)} /> </div>

                    </div>
                    <div className="write-message"><input className="input-message" type="text" name="" id="" placeholder="Write Message" value={message} onChange={(e) => setMessage(e.target.value)} /> </div>
                    <button className="button" type="submit" onClick={handleAppointment} >Make Appointment</button>
                    
                </div>

                {/* contact info  */}
                <div>
                    <h2 className="professional-psychology mt-5">Have Any Questins Or Book Directly</h2>
                    <p className="depression-solution fw-bold">CONTACT INFO</p>
                    <div className="paragraph">
                        <p className="mb-3">If you face any mental problem contact with us. And make appoinment for meeting with our expert psychatrists. We are always here to help you for get rid of your mental stress.</p>
                        <p><span className="icons">{elementfaPhoneAlt}</span>  +91 998877665544 </p>
                        <p><span className="icons">{elementfaMapMarker}</span> Chitkara University, Rajpura </p>
                        <p><span className="icons">{elementfaMailBulk}</span> wellnessbuddy@gmail.com</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Appointment;