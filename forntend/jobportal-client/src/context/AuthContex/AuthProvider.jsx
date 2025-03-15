import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import {  createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLOading]=useState(true);

    const createUser=(email,password)=>{
        setLOading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const authInfo={
        user,
        loading,
        createUser

    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('state captured',currentUser);
            setLOading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;