import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className=' z-[999] w-full px-10 py-4 flex justify-between items-center'>
      <Link to="/" className='Logo'>
        <img
          src="https://icons.veryicon.com/png/128/healthcate-medical/medical-care/transfuse.png"
          alt="homeicon"
          width="56"
          height="24"
          viewBox="0 0 72 30"
          fill="currentColor"
        />
      </Link>

      <div className='Links flex gap-10'>
        {[
          { title: "About Us", link: "/about-us" },
          { title: "Services", link: "/services" },
          { title: "Find a Doctor", link: "/find-doctor" },
          { title: "Contact Us", link: "/contact-us" },
          { title: "Login", link: "/login" },
          { title: "Register", link: "/register" }
        ].map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`text-lg capitalize font-light hover:text-blue-500 hover:underline ${
              index === 4 && "ml-32"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
