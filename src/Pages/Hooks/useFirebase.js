import { useEffect, useState } from 'react';
import initializeFirebase from '../Login/FireBase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";
initializeFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');


    const auth = getAuth();

    const registerUser = (name, email, password, location, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                // Signed in 
                const newUser = { email, displayName: name }
                setUser(newUser);


                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destination = location?.state?.from || '/';
                navigate(destination);

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage)
                console.log(errorMessage);
                // ..
            });
    }


    const loginUser = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                console.log(location);
                const destination = location?.state?.from || '/';
                navigate(destination)
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage)
                console.log(errorMessage);
            });
    }

    const googleSignIn = (location, navigate) => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // The signed-in user info.
                setAuthError('');
                const user = result.user;
                setUser(user);
                const destination = location?.state?.from || '/';
                navigate(destination)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage);
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth])


    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser('');
            setToken('');
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        registerUser,
        loginUser,
        googleSignIn,
        authError,
        token,
        handleSignOut

    };
};

export default useFirebase;