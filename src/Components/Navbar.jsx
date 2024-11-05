import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {

  const { pathname } = useLocation();
  return (
    <div className={` ${pathname === '/' ? 'bg-[#9538e2] text-white' : 'bg-white text-black'}  px-2 container mx-auto`}>
      <div className='navbar max-w-7xl mx-auto px-4'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] text-black mt-3 w-52 p-2 shadow">

              <NavLink to="/">Home</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>

            </ul>
          </div>
          <Link to="/" className="text-xl">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-4 gap-6">

            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>

          </ul>
        </div>
        <div className="navbar-end">
          <MdOutlineShoppingCart />
          <CiHeart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;