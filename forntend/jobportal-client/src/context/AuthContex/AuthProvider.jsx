import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLOading]=useState(true);

    const createUser=(email,password)=>{
        setLOading(true);
        return createUserWithEmailAndPassword(auth,email,password)
   
    }
    
    const signInUser=(email,password)=>{
        setLOading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInGoogle=()=>{
        setLOading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const signOutUser=()=>{
        setLOading(true);
        return signOut(auth);
    }


    const authInfo={
        user,
        loading,
        createUser,
        signInUser,signOutUser,
        signInGoogle
        

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