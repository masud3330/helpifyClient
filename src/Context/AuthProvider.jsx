import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

import useAxiosPublic from "../AxiosApi/useAxiosPublic";



export  const AuthContext= createContext()

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const axiosPublic= useAxiosPublic()
  const googleProvider = new GoogleAuthProvider();
   
    // user create
    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user create in google
    const googleSignIn=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    // login user
    const login=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            const user={email: currentUser?.email}
            if(currentUser?.email){
                 axiosPublic.post('/jwt',user)
                .then(res=>{
        // console.log('user register', res.data)
        if(res.data.token){
            localStorage.setItem("token",res.data.token)
            
        }
        setLoading(false)
      })
            }
            
            else{
               localStorage.removeItem("token")
                setLoading(false)
            
            }
            // setLoading(false)
        } )
        return ()=>{
            return unsubscribe()
        }
    },[])
    const authinfo={
user,
loading,
createUser,
login,
logout,
googleSignIn
    }
    return (
      <AuthContext.Provider value={authinfo}>
         {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;
