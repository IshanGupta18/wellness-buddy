import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css';

// service details component 
const ServiceDetail = () => {
    // using hooks 
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const [detail, setDetail] = useState({});

    console.log(service);

    console.log(serviceId);
    const { id, name } = service;
    // loading data 
    useEffect(() => {
        const url = `/data.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const serviceDetail = service.find(service => service.id === serviceId);
    console.log(serviceDetail);
    // dependency data loading 
    // useEffect(() => {
    //     const singleService = service.find(service => service.id === serviceId)
    //     setDetail(service);
    //     console.log(singleService);
    // }, [service])

    return (
        <div className="service-details">
            <h1>Know more about {serviceId}</h1>

        </div>
    );
};

export default ServiceDetail;