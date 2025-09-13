
import { useForm } from 'react-hook-form';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';

import registerLottieData from '../../assets/Lottie/Login.json'
import Heading from '../../Component/Heading/Heading';
import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const UpdateProfile = () => {
    const userData=useLoaderData()
  const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
     

  //  console.log(user)
      const onSubmit = (data) => {
        console.log(data)
        fetch(`http://localhost:5000/user/profile/${userData._id}`,{
            method:"put",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('updated data',data)
            if(data.modifiedCount==1){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Profile Update Successfully",
  showConfirmButton: false,
  timer: 1500
});
            }
            navigate('/profile')
        })

      }
    return (
        <div>
            
            <div className="max-w-10/12 mx-auto">
            <Heading heading={'Update Profile'}></Heading>
           <div className="grid md:grid-cols-2  grid-cols-1">
            <div>
                <Lottie animationData={registerLottieData} className="w-[400px]"></Lottie>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-1" >
                {/* <div className=" grid grid-cols-2 gap-4"> */}
                 <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input defaultValue={userData.name} {...register("name", { required: true })} type="text" className="input w-full" placeholder="Type here" />
    </fieldset>
     

<fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input defaultValue={userData.email}  {...register("email", { required: true })} type="email" className="input w-full" placeholder="Type here" />
    </fieldset>

    

    <fieldset className="fieldset">
  <legend className="fieldset-legend">Phone Number</legend>
  <input defaultValue={userData.phoneNumber}  {...register("phoneNumber", { required: true })} type="number" className="input w-full" placeholder="Type here" />
    </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">City--Village--Post Office</legend>
  <input defaultValue={userData.city}  {...register("city", { required: true })} type="text" className="input w-full" placeholder="Type here" />
    </fieldset>
  

  
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Age</legend>
  <input defaultValue={userData.age} {...register("age", { required: true })} type="number" className="input w-full" placeholder="Type here" />
    </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">Blood Group</legend>
  <select defaultValue={userData.blood} {...register("blood", { required: true })} className="input w-full" >
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
  <select defaultValue={userData.gender} {...register("gender", { required: true })} className="input w-full" >
        <option value="selectGender">Select Gender</option>
         <option value="male">male</option>
        <option value="female">female</option>
       <option value="other">other</option>
      </select>
    </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">Which Type Service Provide</legend>
  <select defaultValue={userData.service} {...register("service", )} className="input w-full" >
        <option  value="selectService"> Select Service</option>
        <option  value="Electrition">Electrition</option>
        <option  value="homeDelivary">Home Delivary</option>
        <option  value="blood">Blood</option>
        <option  value="tuiotonTeacher"> Tuioton Teacher</option>
        <option  value="other">other</option>
      </select>
    </fieldset>
    
      {/* include validation with required or other standard HTML validation rules */}

      {/* errors will return when field validation fails  */}
      {errors.name && <span className='text-red-600 font-medium'>Those all field is required</span>}
    
        {/* </div> */}
         <input type="submit" value='Update Profile'  className="btn btn-outline btn-success w-full  mt-3"/>
                </form>
    
            </div>
    
           </div>
        </div> 
        </div>
    );
};

export default UpdateProfile;