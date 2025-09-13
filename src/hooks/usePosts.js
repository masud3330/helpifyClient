import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../AxiosApi/useAxiosPublic";



const usePosts = () => {
  const axiosPublic= useAxiosPublic()
  
  
   const { data:posts= [], isLoading, refetch } = useQuery({
    queryKey: ["posts",],
    queryFn: async () => {
      const res = await axiosPublic.get(`/posts`);
     return res.data;
    },

  });
 
  return[posts,isLoading,refetch]
};

export default usePosts;