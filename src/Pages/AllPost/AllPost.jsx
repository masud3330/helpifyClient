
import Heading from '../../Component/Heading/Heading';
import SinglePostCard from '../../Component/SinglePostCard/SinglePostCard';
import usePosts from '../../hooks/usePosts';
// import useAxiosSecure from '../../AxiosApi/useAxiosSecure';



const AllPost = () => {
   
    const [posts,isLoading]= usePosts()
     return (
        <div>
            {
                isLoading? <span className="loading loading-infinity loading-xl"></span>:
                posts.length>0 ? <div>
            <Heading heading={'All Posts'}></Heading>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-5">
                {
                posts.map(post=><SinglePostCard key={post._id} post={post}></SinglePostCard>)
                
            }
            </div>
            
        </div>: <Heading heading={'No Posts'}></Heading>
            }
        </div>
       
         
       
    );
};

export default AllPost;