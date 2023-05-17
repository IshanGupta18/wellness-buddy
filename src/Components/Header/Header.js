import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus, faPhoneAlt, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';

// icon from fontawesome 
const elementHeadSideVirus = <FontAwesomeIcon icon={faHeadSideVirus} />
const elementfaPhoneAlt = <FontAwesomeIcon icon={faPhoneAlt} />
const elementfaArrowCircleRight = <FontAwesomeIcon icon={faArrowCircleRight} />
// header component 
const Header = () => {
    const { user, logOut } = useAuth();

    const item = localStorage.getItem('info');

    return (
        <Navbar >
            {/* navbar  */}
            <Navbar fixed="top" className="header mx-auto">
                <Container>
                    {/* logo  */}
                    <Navbar.Brand href="/home"><h3>{elementHeadSideVirus} wellnes-buddy</h3></Navbar.Brand>
                    <Nav className="links">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/appointment">Appointment</NavLink>
                        <NavLink to="/team">Psychologist</NavLink>
                        {/* <NavLink to="/register">Register</NavLink> */}
                        {
                            item ? 
                                <>
                                {user?.displayName && <span className="font display-name" style={{ backgroundColor: '#EEA676', marginTop: '5px', height: '65px', color: 'white', fontFamily: 'monospace', paddingTop: '20px', paddingLeft: '13px', paddingRight: '13px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}> Welcome :) {user.displayName} </span>}
                        {/* conditional rendering  */}
                        {
                            user?.displayName && <button className="font" onClick={logOut}>Logout {elementfaArrowCircleRight}</button>}
                                </>

                            :

                            <>
                                <NavLink to="/login">Login</NavLink>
                            </>
                        }


                        
                    </Nav>
                    <Nav>
                        {/* phone number  */}
                        <div className="phone">
                            <p><span className="phone-icon">{elementfaPhoneAlt} </span>
                                +91 998877665544</p>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </Navbar>
    );
};

export default Header;