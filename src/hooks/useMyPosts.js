

import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Context/AuthProvider';
import useAuth from './useAuth';
import useAxiosSecure from '../AxiosApi/useAxiosSecure';

const useMyPosts = () => {
   const {user}= useAuth()
   const axiosSecure= useAxiosSecure()
//   useEffect(()=>{
//     if (!loading && user?.email){
//         fetch(`http://localhost:5000/posts?email=${user.email}`)
//    .then(res=>res.json())
//    .then(data=>{
//     console.log(data)
//     setPosts(data)
//    })
//     }
//    },[user,loading])
const {data: posts=[], isLoading, refetch}=useQuery({
   queryKey:["posts", user?.email],
   queryFn: async()=>{
      const res= await axiosSecure.get(`/posts?email=${user.email}`)
      return res.data
   }
})
 
   return [posts,isLoading, refetch]
   
};

export default useMyPosts;