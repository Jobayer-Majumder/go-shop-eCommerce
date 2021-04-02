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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 p-5 border">
                    <h3 className='text-center'>Log in</h3>
                    <hr className='w-50' />
                    <button onClick={handleGoogleSignIn} className="btn btn-outline-primary border rounded-pill w-100 py-2 mb-2"><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
                    <button className="btn btn-outline-primary border rounded-pill w-100 py-2"><FontAwesomeIcon icon={faFacebook} /> Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;