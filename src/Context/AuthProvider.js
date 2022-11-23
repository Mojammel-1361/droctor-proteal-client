import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.confinge';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [lodding, setLodding] = useState(true);

  const googleLogin = (provider) => {
    setLodding(true);
    return signInWithPopup(auth, provider);
  }; 

    const createUser = (email, password) =>{
      setLodding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LoginUser = (email, password) => {
      setLodding(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (userInfo) =>{
      return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () =>{
      setLodding(true);
      return signOut (auth);
    }

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, createUser => {
        console.log("user observing");
        setUser(createUser);
        setLodding(false);
      });
      return () => unsubscribe();
    },[])




    const authInfo = {
      user,
      createUser,
      LoginUser,
      logOut,
      updateUser,
      lodding,
      googleLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;