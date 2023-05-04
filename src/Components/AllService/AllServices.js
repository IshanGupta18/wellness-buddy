import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

// Allservice component 
const AllServices = () => {
    // data loading 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services">
            <p className="depression-solution fw-bold">AFFORDABLE SERVICES</p>
            <h1 className="professional-psychology">Professional Psychology Therapy
                <br /> Service You Can Choose</h1>
            <div className="service-container">
                {
                    // looping for getting single service component 
                    services.map(service => <Service service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AllServices;