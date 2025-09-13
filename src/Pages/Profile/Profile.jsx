import {  useEffect, useState } from "react";

import profile from "../../assets/Avatar/image.png"
import { FaUserEdit } from "react-icons/fa";
import Heading from "../../Component/Heading/Heading";
// import useMyPosts from "../../hooks/useMyPosts";
import Swal from "sweetalert2";

import { Link } from "react-router";
import useAxiosSecure from "../../AxiosApi/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useMyPosts from "../../hooks/useMyPosts";
import useAxiosPublic from "../../AxiosApi/useAxiosPublic";




const Profile = () => {
    const [userInfo, SetUserInfo]= useState([])
    const {user,loading}= useAuth()
   const axiosSecure=useAxiosSecure()
   const axiosPublic= useAxiosPublic()
    // const {posts}= useMyPosts()
    const [posts, ,refetch]= useMyPosts()
    // console.log(posts)


 useEffect(()=>{
   if(loading && user?.email){
    axiosSecure.get(`/user/profile?email=${user.email}`)
  .then(res=>{
    SetUserInfo(res.data)
  })
  }
 },[loading,user?.email])

  if (loading || !user?.email) {
    return <div className="flex justify-center items-center "><span className="font-4xl loading loading-infinity loading-xl"></span></div>;
  }
  // delete posts
  const handleDelete=(id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     axiosPublic.delete(`/posts/${id}`)
    .then(res=>{
      if(res.data.deletedCount>0){
         refetch()
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  
   
      }
       })}
       
});
   
  }
 

 
    return (
        <div className='z-10 mt-20'>
            <div>
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div>
                        <img src= {profile} alt="" className="rounded-bl-[200px] rounded-tr-[200px]"/>
                    </div>
                    <div>
                    <h1>Name: {userInfo.name}</h1>
                    <h1>Email: {userInfo.email}</h1>
                    <h1>Age: {userInfo.age}</h1>
                    <h1>Blood Group: {userInfo.blood}</h1>
                    <h1>Location: {userInfo.city}</h1>
                    <h1>Phone Number: {userInfo.phoneNumber}</h1>
                    <h1>Provide Service: {userInfo.service} Donation</h1>
                    <Link to={`/updateProfile/${userInfo._id}`}  className="btn btn-warning"><FaUserEdit /> Edit Profile</Link>
                    </div>
                </div>
                
            </div>
            {/* my provided services table*/}

            <div>
              {
                posts.length>0 ? <div>
                  <Heading heading={'My Provide Services'}></Heading>
              <div>
              
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image & title</th>
        
        <th>Service Category</th>
<th>Payment Pay Method</th>
<th>Price</th>
<th>Urgency Level</th>
<th>contact Number</th>
<th>location</th>
<th >Edit</th>
<th  >Delete</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        posts.map((post, index)=> <tr key={post._id}>
        <th>
          <label>
            <input  value={index+1} className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={post.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{post.title}</div>
              {/* <div className="text-sm opacity-50">{post.location}</div> */}
            </div>
          </div>
        </td>
        <td>{post.Category}</td>
        <td>{post.PaymentPayMethod}</td>
        <td>{post.Price}</td>
        <td>{post.UrgencyLevel}</td>
        <td>{post.contactNumber}</td>
        <td>{post.location}</td>
        <td><button className="btn btn-primary">Edit</button></td>
        <td><button className="btn bg-amber-500" onClick={()=>handleDelete(post._id)}>Delete</button></td>
       
        
       </tr> )
      }
      
    </tbody>
   
  </table>
</div>
              </div>
                </div> :<Heading heading={'You are Not cteated Post yet'}></Heading>
              }
              
            </div>
        </div>
    );
};

export default Profile;