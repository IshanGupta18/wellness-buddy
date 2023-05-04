import React from 'react';
import Banner from '../Banner/Banner';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Speciality from '../Speciality/Speciality';

// Home page component 
const Home = () => {
    return (
        <div>
            {/* home page  */}
            <Banner></Banner>
            <Services></Services>
            <OurTeam></OurTeam>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;