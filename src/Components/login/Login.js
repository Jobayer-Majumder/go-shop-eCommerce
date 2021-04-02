import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};


const Login = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = useState({
        displayName: '',
        email: '',
        photoUrl: ''
    });

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName, email, photoURL} = result.user;
                const userInfo = {
                    displayName: displayName,
                    email: email,
                    photoUrl: photoURL
                }
                setUser(userInfo);
                setLoggedInUser(userInfo);
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    };


    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6 bg-light p-4 border">
                    <form>
                        <input className='form-control p-3 mb-3' type="email" name='email' placeholder='Email' required />
                        <input className='form-control p-3 mb-3' type="password" name='password' placeholder='Password' required />
                        <div className='text-center pt-3'>
                            <button className="btn btn-primary w-100 mb-2">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 p-4 border border-top-0">
                    <p className='text-center'> Or </p>
                    <hr className='w-50' />
                    <button onClick={handleGoogleSignIn} className="btn btn-outline-primary border rounded-pill w-100 py-2 mb-2"><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
                    <button className="btn btn-outline-primary border rounded-pill w-100 py-2"><FontAwesomeIcon icon={faFacebook} /> Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;