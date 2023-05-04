import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
// service component 
const Services = () => {
    const [services, setServices] = useState([]);
    // loading data 
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services">
            <h1 className="professional-psychology">Professional Psychology Therapy
                <br /> Service You Can Choose</h1>
            <p className="depression-solution fw-bold">AFFORDABLE SERVICES</p>
            <div className="service-container">
                {
                    // looping for getting single course component 
                    services.slice(0, 6).map(service => <Service service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;