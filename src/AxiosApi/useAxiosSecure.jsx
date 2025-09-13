   import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";


const axiosSecure= axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
    
})
const useAxiosSecure = () => {
   const {logout}=useAuth()
   const navigate=useNavigate()
   axiosSecure.interceptors.request.use((config)=>{
      const token= localStorage.getItem("token")
     
       if (token) {
        config.headers["Authorization"] = `Bearer ${token}`; // ✅ fixed spelling
      }
      
      return config
   },function(error){
      return Promise.reject(error)
   },)

   axiosSecure.interceptors.response.use(function(response){
      return response
   },async(error)=>{
       const status = error.response?.status;
        // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logout();
            navigate('/login');
        }
      return Promise.reject(error);
   })
    return axiosSecure
       
  };

export default useAxiosSecure;