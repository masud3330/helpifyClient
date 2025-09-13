import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
   
    const location= useLocation()
    if(user){
        return children
    }
    else if(loading){
        return <>
        <span className="loading loading-dots loading-xl"></span></>
    }
   
         return <Navigate to='/login' state={location.pathname}/>
    
  
};

export default PrivateRoute;