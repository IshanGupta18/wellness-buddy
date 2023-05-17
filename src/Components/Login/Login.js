import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
// icons 
const elementfaUser = <FontAwesomeIcon icon={faUser} />
const elementfaArrowCircleRight = <FontAwesomeIcon icon={faArrowCircleRight} />
// login component 
const Login = () => {
    const { signInWithGoogle } = useAuth();
    const [error, setError] = useState('');

    // Redirect to the initial page after login
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const auth = getAuth();
    // login process 
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log('user logged in');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Redirect to the initial page after login
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                // Redirect to the initial page 
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        // login page with google sign in
        <div className="login-page">
            <h2>Login With Google Here</h2>
            <h1>{elementfaUser}</h1>
            <button onClick={handleGoogleLogin}>Google Sign In {elementfaArrowCircleRight}</button>
            <br />
            <Link to="/register" >New to Wellness Buddy?</Link>
        </div>
    );
};
export default Login;