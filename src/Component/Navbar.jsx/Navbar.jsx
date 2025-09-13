
import { Link, NavLink } from "react-router"

import { LiaServicestack } from "react-icons/lia";
import profile from '../../assets/Avatar/image.png'
import { ImProfile } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import logo from "../../assets/helpifyLogo.png"
// import useMyPosts from "../../hooks/useMyPosts";

import useAuth from "../../hooks/useAuth";
import useMyPosts from "../../hooks/useMyPosts";
const Navbar = () => {
  const {user,logout}= useAuth()
  //  const {posts}= useMyPosts()
   const [posts, ,refetch]= useMyPosts()
  const signOut=()=>{
    logout()
  }
 

    const navitem=[
       
        <li> <NavLink to='/'> Home</NavLink> </li>,
        <li> <NavLink to='about'> About</NavLink> </li>,
        <li> <NavLink to='allPosts'> All Post</NavLink> </li>,
        <li> <NavLink to='createPost'> Create Post</NavLink> </li>,
        

    ]
    const submenu=[
        // <li> <NavLink to='blood'> Blood</NavLink> </li>,
        // <li> <NavLink to='homeService'> Home Service</NavLink> </li>,
        // <li> <NavLink to='tuioton'> Tuioton</NavLink> </li>,
        // <li> <NavLink to='tuioton'>Emergency Service</NavLink> </li>
        <li defaultValue="Select">Select Category</li>,
        <li >Blood Donation</li>,
        <li >Emergency Help</li>,
        <li >Transport & Rides</li>,
        <li >Household Support</li>,
        <li >Food & Groceries</li>,
        <li >Education & Tutoring</li>,
        <li >Job & Task Sharing</li>,
        <li >Lost & Found</li>,
        <li >Community Services</li>,
        <li >Shopping & Delivery</li>,
        <li >Events & Social</li>
    ]
    refetch()
    return (
        <div>

<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {navitem}
        <li>
          <a>Category</a>
          <ul className="p-2 w-full" >
            {submenu}
          </ul>
        </li>
       
      
      </ul>
    </div>
    {/* logo */}
    <img src={logo} alt="" className="w-12"/>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 z-10">
      {navitem}
      <li className="">
        <details>
          <summary>Category</summary>
          <ul className="w-[200px] ">
            {submenu}
          </ul>
        </details>
      </li>
     
    </ul>
  </div>
  <div className="navbar-end">
    
    {/* shop & profile icon */}
    {
      user ? <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <LiaServicestack className="text-3xl"/>
          <span className="badge badge-sm indicator-item">{posts.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{posts.length} Service Provide.</span>
          
          <div className="card-actions">
            <Link to='profile' className="btn btn-primary btn-block">View Provided Services.</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={profile}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <NavLink to='/profile' className="justify-between">
            Profile
            <span className="text-xl"><ImProfile /></span>
          </NavLink>
        </li>
        <li><NavLink to='/setting' className="justify-between">
        Settings
        <span className="text-xl"><IoSettings /></span></NavLink></li>
        <li><button className="justify-between" onClick={signOut}>Logout
          <span className="text-xl"><RiLogoutBoxRFill /></span></button></li>
      </ul>
    </div>
  </div> : <Link to='/register' className="btn" >Register</Link>
    }
  </div>
</div>

</div>
    );
};

export default Navbar;