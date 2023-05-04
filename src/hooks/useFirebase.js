import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
// calling initialize Authentication 
initializeAuthentication();
// use Firebase 
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    // provider 
    const googleProvider = new GoogleAuthProvider();
    // signin with google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // logout 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    // observer 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('this is user', user);
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        logOut,
        signInWithGoogle
    }

}
export default useFirebase;