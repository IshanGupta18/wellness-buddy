import React from 'react';
import './Speciality.css';
// speciality component 
const Speciality = () => {
    return (
        <div>
            {/* speciality part  */}
            <h1 style={{ color: '#056C5F', marginTop: '80px' }}>Why we are..?</h1>
            <div className="Speciality mb-5 py-5">
                <div className="single-speciality">
                    <div>
                        <img src="https://i.ibb.co/L5ssRfC/service-2.jpg" alt="" />
                    </div>
                    <div>
                        <h4>Satisfied <br /> Services</h4>
                        <p>We always try to focus and we try to maintain our client's satisfaction with our services. This is the mission of our team.</p>
                    </div>
                </div>
                <div className="single-speciality">
                    <div>
                        <img src="https://i.ibb.co/zHQXJ2h/service-5.jpg" alt="" />
                    </div>
                    <div>
                        <h4>Dedicated <br /> Therapist</h4>
                        <p>Our Therapist are always dedicated for their patients.We always keep dedication untill patient's satisfaction.</p>
                    </div>
                </div>
                <div className="single-speciality">
                    <div>
                        <img src="https://i.ibb.co/JnQH4ps/service-4.jpg" alt="" />
                    </div>
                    <div>
                        <h4>Support <br /> Patient</h4>
                        <p>We always try to support our patients whenever they need support or councelling. Even after his or her session is ended.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speciality;