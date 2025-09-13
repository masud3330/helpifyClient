import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div>
          <footer className=" footer-horizontal footer-center bg-rose-100 text-base-content rounded p-10">
  <div className='flex justify-around'>
    <nav className="grid grid-flow-col gap-4">
     <NavLink to='/'> Home</NavLink>
         <NavLink to='about'> About</NavLink> 
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 text-xl text-rose-600">
      <NavLink ><FaTwitter /></NavLink>
      <NavLink ><FaYoutube /></NavLink>
      <NavLink ><FaFacebook /></NavLink>
      </div>
  </nav>

</div>
<div className='text-center'>
  <p className="font-bold text-xl text-rose-500">Helpify </p>
<p className='bg-rose-500 text-md font-semibold text-white p-2 rounded-b-md '>A Helping Hand, Anytime.</p>
</div>

  <aside className='text-rose-600'>
    <p className='text-center mt-4'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold'>LocalNeedFinder</span></p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;