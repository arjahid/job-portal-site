import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContex/AuthContex';
import jobicon from '../../logo/logo.png'

const Navbar = () => {
  const {user,signOutUser}=useContext(AuthContext);
  const handleLogout=()=>{
    signOutUser()
    .then(()=>{
      console.log('logout success');
    })
    .catch((err)=>{
      console.log(err);
    })
  }
    const links=<>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/myApplication'>My Application</NavLink></li>
     <li><NavLink to='/jobs'>All jobs</NavLink></li>
    {
      user && <>
        <li><NavLink to='/addJob'>Add a Job</NavLink></li>
        <li><NavLink to='/myPostedJobs'>My posted Job</NavLink></li>
      </>
    }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <NavLink to='/' className="btn btn-ghost text-xl">
      <img className='w-12' src={jobicon} alt="" />
      <h3>Job Portal</h3>
    </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end ">
  {user ? 
          <>
            <Link className="mr-4 hidden md:inline" to="/profile">{user.email}</Link>

            <button className='pr-2' onClick={handleLogout}>Logout</button>
    
          </>
         : 
          <>
            <Link className='mr-4 hidden md:inline' to='/register'>Register</Link>
            <Link to='/signin'>
              <button className='btn'>Sign In</button>
            </Link>
          </>
        }
    
   
  </div>
</div>
    );
};

export default Navbar;