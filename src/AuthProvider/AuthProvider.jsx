import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebaseConfig';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])

    const createUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GithubAuthProvider()

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
    }, [])

    console.log(user)

    const authData = {
        createUsers,
        login,
        user,
        logout,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};


export default AuthProvider;