import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        {/* conditional rendering  */}
                        {user?.displayName && <span className="font" style={{ backgroundColor: '#EEA676', color: 'white', padding: '5px', marginBottom: '0px', marginTop: '5px', borderRadius: '2px', marginLeft: '10px', fontSize: '18px', fontWeight: 'bold' }}>{user.displayName} </span>}
                        {
                            user?.displayName && <button className="font" onClick={logOut}>Logout {elementfaArrowCircleRight}</button>}
                    </Nav>
                    <Nav>
                        {/* phone number  */}
                        <div className="phone">
                            <p><span className="phone-icon">{elementfaPhoneAlt} </span>
                                +91xxxxxxxx</p>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </Navbar>
    );
};

export default Header;