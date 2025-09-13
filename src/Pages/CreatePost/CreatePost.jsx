
import { useForm } from "react-hook-form"
import Heading from "../../Component/Heading/Heading";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

import useAxiosSecure from "../../AxiosApi/useAxiosSecure";
import axios from "axios";
const CreatePost = () => {
    const {user}= useContext(AuthContext)
    const navigate= useNavigate()
    const {register,handleSubmit,formState: { errors }} = useForm()
    const axiosSecure=useAxiosSecure()

  const onSubmit =async(data) => {
   
   const imgFile= data.image[0]
   const formData= new FormData()
   formData.append('image',imgFile)

    try{
      const uploadData= await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbbApiKey}`,formData)
      if(uploadData.data.success){
         const imageUrl = uploadData.data.data.display_url;
          const postData = {
        ...data,
        image: imageUrl, // replace file with url
      };
      console.log('postData',postData)
      axiosSecure.post('/posts', postData)
   .then(res=>{
      // console.log(res.data)
      if(res.data.insertedId){
         Swal.fire({
  position: "top-end",
  icon: "success",
  title: "post created successfully",
  showConfirmButton: false,
  timer: 1500
});
navigate('/allPosts')

      }
   })
      }
      }
    catch{
      error=>(console.log(error))}
}

//   console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div>
 <Heading heading={'Create New Post'}></Heading>

            <form onSubmit={handleSubmit(onSubmit)} className="md:max-w-8/12 mx-auto sm:w-full ">
      {/* register your input into the hook by invoking the "register" function */}
     
      <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="email" defaultValue={user.email} {...register("email",{ required: true })} className="input rounded-md w-full" placeholder="Type here" />
  </fieldset>

      
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Title</legend>
  <input type="text" {...register("title",{ required: true })} className="input rounded-md w-full" placeholder="Type here" />
  </fieldset>

     <fieldset className="fieldset">
  <legend className="fieldset-legend">Category</legend>
  <select {...register("Category")} className="input rounded-md w-full" >
        <option defaultValue="Select">Select Category</option>
        <option value="bloodDonation">Blood Donation</option>
        <option value="emergency_help">Emergency Help</option>
        <option value="transport_rides">Transport & Rides</option>
        <option value="household_support">Household Support</option>
        <option value="food_groceries">Food & Groceries</option>
        <option value="education_tutoring">Education & Tutoring</option>
        <option value="job_task_sharing">Job & Task Sharing</option>
        <option value="lost_found">Lost & Found</option>
        <option value="community_services">Community Services</option>
        <option value="shopping_delivery">Shopping & Delivery</option>
        <option value="events_socialEvents & Social">Events & Social</option>
        
      </select>
  </fieldset>
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Image</legend>
  <input type="file" {...register("image",{ required: true })} className="input rounded-md w-full" placeholder="Type here" />
  </fieldset>
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Description </legend>
  <input type="text" {...register("description",{ required: true })} className="input rounded-md w-full" placeholder="Type here" />
  </fieldset>
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Location</legend>
  <input type="text" {...register("location",{ required: true })} className="input rounded-md w-full" placeholder="Type here" />
  </fieldset>
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Contact Number </legend>
  <input type="number" {...register("contactNumber",{ required: true })} className="input rounded-md w-full" placeholder="Type here" />
  </fieldset>

<div className="grid grid-cols-2 gap-2 justify-between">
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Price</legend>
  <input type="number" {...register("Price",{ required: true })} className="input rounded-md w-full" placeholder="Type here" />
  </fieldset>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Payment Pay Method</legend>
   <select {...register("PaymentPayMethod")} className="input rounded-md w-full">
        <option defaultValue="Select_Payment_Method">Select Payment Method</option>
     
        <option value="Bkas">Bkas</option>
        <option value="Nogod">Nogod</option>
        <option value="Card">Card</option>
        
      </select>
  </fieldset>
</div>
 
     {/* <fieldset className="fieldset">
  <legend className="fieldset-legend">Urgency Level </legend>
   
      <select {...register("UrgencyLevel")} className="input rounded-md w-full">
        <option defaultValue="SelectUrgencyLevel">Select Urgency Level</option>
        <option value="Urgent">Urgent</option>
        <option value="Within a Day">Within a Day</option>
        <option value="Within a Week">Within a Week</option>
      </select>
  </fieldset> */}
     

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" defaultValue={'Post'} className="btn btn-info rounded-md w-full" />
    </form>
        </div>
    );
};

export default CreatePost;