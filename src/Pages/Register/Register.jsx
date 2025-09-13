import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import registerLottieData from '../../assets/register/Login Leady.json'
import Heading from "../../Component/Heading/Heading";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useShowPassword from "../../hooks/useShowPassword";
import useAxiosPublic from "../../AxiosApi/useAxiosPublic";
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const Register = () => {
  
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate= useNavigate()
      const {createUser}=useAuth()
      const [showPass, showPassword]= useShowPassword()
      const axiosPublic=useAxiosPublic()

  //  console.log(user)
      const onSubmit = async(data) => {
        const imageFile= data.image[0]
        const formData= new FormData()
        formData.append('image',imageFile)

        const passRegEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}$/
        if(!passRegEx.test(data.password) !== !passRegEx.test(data.confirmPassword)  ){
          return Swal.fire({
  position: "top-end",
  icon: "warning",
  title: `At least 6 characters
At least one uppercase letter
At least one lowercase letter
At least one digit
At least one special character`,
  showConfirmButton: false,
  timer: 1500
})
         }

       else{
        const uploadData= await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbbApiKey}`,formData)
        if(uploadData.data.success){
          const imageUrl = uploadData.data.data.display_url;
          const postData = {
        ...data,
        image: imageUrl, // replace file with url
      };
      console.log('postData from register',postData)
      const {password,confirmPassword, ...userInfo}=postData
      
       createUser( data.email,data.password)
       .then(result => {
        console.log(result.user)
            if(result.user){
           axiosPublic.post('/users', userInfo)
            .then(res=>{
              console.log(res.data)
              if(res.data.acknowledged){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Register Successfully",
  showConfirmButton: false,
  timer: 1500
});
              }
            })
           
          }
          navigate('/')
         
        })
        }
       } 
       }

    return (
        <div className="max-w-10/12 mx-auto">
            <Heading heading={'Register Now'}></Heading>
           <div className="grid grid-cols-2 ">
            <div>
                <Lottie animationData={registerLottieData} className="w-[400px]"></Lottie>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-2 gap-4">
     
 
   
         <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input {...register("name", { required: true })} type="text" className="input w-full" placeholder="Type here" />
    </fieldset>
     

<fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input {...register("email", { required: true })} type="email" className="input w-full" placeholder="Type here" />
    </fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Image</legend>
  <input {...register("image", { required: true })} type="file" className="input w-full" placeholder="Type here" />
    </fieldset>

    <fieldset className="fieldset flex ">
  <legend className="fieldset-legend" >Password</legend>
  <input {...register("password", { required: true })} type={showPass ? "password": "text"} className="input w-full" placeholder="Type here" />
  <p className="text-3xl" onClick={showPassword}>{showPass ? <FaEye /> : <FaEyeSlash />}</p>
    </fieldset>

    <fieldset className="fieldset">
  <legend className="fieldset-legend">Confirm Password</legend>
  <input {...register("confirmPassword", { required: true })} type={showPass ? "password": "text"} className="input w-full" placeholder="Type here" />
    </fieldset>

    <fieldset className="fieldset">
  <legend className="fieldset-legend">Phone Number</legend>
  <input {...register("phoneNumber", { required: true })} type="number" className="input w-full" placeholder="Type here" />
    </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">City--Village--Post Office</legend>
  <input {...register("city", { required: true })} type="text" className="input w-full" placeholder="Type here" />
    </fieldset>
  

  
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Age</legend>
  <input {...register("age", { required: true })} type="number" className="input w-full" placeholder="Type here" />
    </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">Blood Group</legend>
  <select {...register("blood", { required: true })} className="input w-full" >
        <option value="selectBloodGroup">Select Blood Group</option>
        <option value="a+">A+</option>
        <option value="a-">A-</option>
        <option value="b+">B+</option>
        <option value="b-">B-</option>
        <option value="o+">O+</option>
        <option value="o-">O-</option>
        <option value="ab+">AB+</option>
        <option value="ab-">AB-</option>
      </select>
    </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select {...register("gender", { required: true })} className="input w-full" >
        <option value="selectGender">Select Gender</option>
         <option value="male">Male</option>
        <option value="female">Female</option>
       <option value="other">Other</option>
      </select>
    </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">Which Type Service Provide</legend>
  <select {...register("service", )} className="input w-full" >
        <option value="selectService"> Select Service</option>
        <option value="Electrition">Electrition</option>
        <option value="homeDelivary">Home Delivary</option>
        <option value="bloodDonation">Blood Donation</option>
        <option value="tuiotonTeacher"> Tuioton Teacher</option>
        <option value="other">Other</option>
      </select>
    </fieldset>
    
      {/* include validation with required or other standard HTML validation rules */}

      {/* errors will return when field validation fails  */}
      {errors.name && <span className='text-red-600 font-medium'>Those all field is required</span>}
    
 
   

      <input type="submit" value='Register'  className="btn btn-outline btn-success  mt-3"/>
      
    </form>
   
    <p className="my-3">Already have an account please <Link className="btn btn-sm " to='/login'>Log in...</Link></p>
            </div>
    
           </div>
        </div>
    );
};

export default Register;