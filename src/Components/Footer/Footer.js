import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// icons 
const elementHeadSideVirus = <FontAwesomeIcon icon={faHeadSideVirus} />
const elementfaPaperPlane = <FontAwesomeIcon icon={faPaperPlane} />
const elementfaFacebookSquare = <FontAwesomeIcon icon={faFacebookSquare} />
const elementfaTwitter = <FontAwesomeIcon icon={faTwitter} />
const elementfaInstagram = <FontAwesomeIcon icon={faInstagram} />
const elementfaLinkedin = <FontAwesomeIcon icon={faLinkedin} />
// footer component 
const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col><div className="about-footer">
                        <div>
                            {/* about  */}
                            <h4 className="wellnes-buddy">{elementHeadSideVirus} wellnes-buddy</h4>
                            <p>We offer several services that fall outside the scope of item writing. These services can be provided for clients who have the capacity to design and execute assessment systems.</p>
                        </div>
                        <div>
                            <h4>Follow Us</h4>
                            <Link to="facebook.com">{elementfaFacebookSquare}</Link>
                            <Link to="instagram.com">{elementfaTwitter}</Link>
                            <Link to="twitter.com">{elementfaInstagram}</Link>
                            <Link to="linkedin.com">{elementfaLinkedin}</Link>
                        </div>
                    </div></Col>
                    <Col>
                        <div className="footer-services">
                            <h4>Services</h4>
                            <ul>
                                <li>-Business Frustation</li>
                                <li>-Anxiety Dosorder</li>
                                <li>-Personal Meeting</li>
                                <li>-Couple Therapy</li>
                                <li>-Family Counselling</li>
                                <li>-Relationship Problem</li>
                                <li>-Depression Problem</li>
                                <li>-Mental Problem</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h4>Contact Info</h4>
                        <div className="address">
                            <address>123, ABC, XYZ</address>
                            <p><span className="contacts">Email: </span> <br /> info@wellnesbuddy.com</p>
                            <p><span className="contacts">Support:</span> <br /> Support: +91xxxxxxxxxx</p>
                            <p><span className="contacts">Website:</span> <br /> www.wellnessbuddy.com</p>
                        </div>
                    </Col>
                    <Col className="subscribe">
                        <h4>Stay In Touch</h4>
                        <input className="input" type="email" placeholder="Email Address" />
                        <button>{elementfaPaperPlane} &nbsp; Subscribe Now</button>
                    </Col>
                </Row>
                <hr/>
            </Container>
        </div>

    );
};

export default Footer;
