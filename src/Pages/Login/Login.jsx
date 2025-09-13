import Lottie from 'lottie-react';
import loginLottieData from '../../assets/Lottie/Login.json';
import { useForm } from "react-hook-form"
import Heading from '../../Component/Heading/Heading';
import { Link, useLocation, useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useShowPassword from "../../hooks/useShowPassword"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {login}= useContext(AuthContext)
  const location= useLocation()
  const navigate= useNavigate()
  const {googleSignIn}=useAuth()
    const [showPass, showPassword]= useShowPassword()
   console.log('login page', location)
    const {register,handleSubmit} = useForm()

  const onSubmit = (data) => {
    login(data.email, data.password)
    .then(data=>{
      const userEmail= {email:data.user.email}
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Login Successfully.",
  showConfirmButton: false,
  timer: 1500
});
      navigate(location.state|| '/')
    })
    .catch(error=>{
      Swal.fire({
  position: "top-end",
  icon: "error",
  title: `${error.message}`,
  showConfirmButton: false,
  timer: 1500
});
    })
  }
  //  handle register with google
       const handleGoogleLogin=()=>{
       googleSignIn()
      .then(res=>{
        if(res.user){
          navigate(location.state|| '/')
        }
      })
      .catch(err=>{
        console.log(err.message)
      })
      
    
       }

//   console.log(watch("example")) // watch input value by passing the name of it
    return (
       <div className='max-w-10/12 mx-auto'>
        <Heading heading={'login'} subHeading={"please"}></Heading>
         <div className='grid grid-cols-2 items-center'>
           <div>
             <Lottie animationData={loginLottieData}></Lottie>
           </div>

           {/* form */}
          <div className='w-[400px]'>
            <div>
                  
    <form onSubmit={handleSubmit(onSubmit)}>
  
     <div>
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input {...register("name", { required: true })} type="text" className="input w-full" placeholder="Type here" />
    </fieldset>
     

<fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input {...register("email", { required: true })} type="email" className="input w-full" placeholder="Type here" />
    </fieldset>

    <fieldset className="fieldset flex">
  <legend className="fieldset-legend">Password</legend>
  <input {...register("password", { required: true })} type={showPass ? "password": "text"} className="input w-full" placeholder="Type here" />
  <p className="text-3xl" onClick={showPassword}>{showPass ? <FaEye /> : <FaEyeSlash />}</p>
    </fieldset>
 
    </div>

    <input type="submit" value="Login"  className="btn btn-outline btn-success w-full mt-3"/>
    </form>
     <input type="submit" value='Google' onClick={handleGoogleLogin}   className="btn btn-outline btn-success  mt-3"/>
    <p className="my-3">No accunt please <Link className='btn btn-sm' to='/register'>Register</Link></p>
            </div>
          </div>
            
        </div>
       </div>
    );
};

export default Login;