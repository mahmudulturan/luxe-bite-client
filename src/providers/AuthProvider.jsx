import { createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../config/firebase.config';
import useAxios from '../hooks/useAxios';

export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState(null);
    const axios = useAxios();
    const singUp = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const date = new Date()
    const dateAndTime = date.toLocaleString();


    
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // let userEmail;
            if(currentUser?.email || user?.email){
                // userEmail = currentUser?.email || user?.email;
                setUserEmail(currentUser?.email || user?.email)
            }
            setUser(currentUser)
            setLoading(false)
            const usersLogin = {userEmail, lastLogin: dateAndTime, lastLogout: "Currently LoggedIn"}
            const usersLogOut = {userEmail, lastLogin: "Currently LoggedOut", lastLogout: dateAndTime}



            if(currentUser && userEmail){
                axios.post('/jwt', usersLogin)
                .then(res=> console.log(res))
                // .catch(err=> console.log(err))
            }
            else if(!currentUser && userEmail){
                axios.post('/delete-cookie', usersLogOut)
                .then(res => console.log(res.data))
                // .catch(err => console.log(err))
            }
        })
        return () => unsubscribe()
    },[userEmail])
    
    const authData = {
        user,
        singUp,
        signIn,
        googleLogin,
        logOut,
        loading
    }
    
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;