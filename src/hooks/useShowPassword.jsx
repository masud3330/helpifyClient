import { useState } from "react";


const useShowPassword = () => {
    const [showPass, setShowPass]= useState(true)
     // password show
          
          const showPassword=()=>{
            setShowPass(!showPass)
            
          }
    return [showPass, showPassword]
};

export default useShowPassword;