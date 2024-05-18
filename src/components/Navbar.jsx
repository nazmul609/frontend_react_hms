import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const userId = localStorage.getItem('userId');

  const handleLogout = () => {
    // Clear local storage and redirect to login page
    localStorage.clear();
    window.location.href = '/login';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='z-[999] w-full px-4 sm:px-6 md:px-8 lg:px-10 py-4 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex items-center'>
        <Link to="/" className='Logo'>
          <img
            src="https://icons.veryicon.com/png/128/healthcate-medical/medical-care-4/stethoscope-30.png"
            alt="homeicon"
            width="72"
            height="48"
            viewBox="0 0 72 30"
            fill="currentColor"
          />
        </Link>
        
        <button onClick={toggleMenu} className='md:hidden ml-2'>
          <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>

      <div className={`md:flex flex-col md:flex-row md:items-center md:gap-10 ${isMenuOpen ? 'flex' : 'hidden'}`}>
        {/* Common navigation links */}
        <Link to="/about-us" className="text-lg capitalize font-semi-bold hover:text-blue-500 hover:underline">About Us</Link>
        <Link to="/services" className="text-lg capitalize font-semi-bold  hover:text-blue-500 hover:underline">Services</Link>
        <Link to="/find-doctor" className="text-lg capitalize font-semi-bold hover:text-blue-500 hover:underline">Find a Doctor</Link>
        <Link to="/contact-us" className="text-lg capitalize font-semi-bold hover:text-blue-500 hover:underline">Contact Us</Link>

        {token ? (
          <>
            {role === 'patient' && (
              <Link to={`/patient/${userId}`} className="text-lg capitalize font-semi-bold hover:text-red-500 hover:underline md:ml-32">
                My Profile
              </Link>
            )}
            {role === 'doctor' && (
              <Link to={`/doctor/${userId}`} className="text-lg capitalize font-semi-bold hover:text-red-500 hover:underline md:ml-32">
                My Profile
              </Link>
            )}
            {role === 'admin' && (
              <Link to={`/admin/${userId}`} className="text-lg capitalize font-semi-bold hover:text-red-500 hover:underline md:ml-32">
                My Profile
              </Link>
            )}
            <button onClick={handleLogout} className="text-lg capitalize font-semi-bold hover:text-red-500 hover:underline ">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-lg capitalize font-light hover:text-blue-500 hover:underline md:ml-32">Login</Link>
            <Link to="/register" className="text-lg capitalize font-light hover:text-blue-500 hover:underline">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
