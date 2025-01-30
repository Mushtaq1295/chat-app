import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CHAT APP
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
          focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Navbar Menu */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto items-center`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse">
            {/* Profile, Name, and Logout Button in a row */}
            <li className="flex items-center space-x-3">
              {/* Profile Icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-600">
              <img
                src='../public/professor.jpg'
                alt="Profile" 
                className="w-10 h-10 rounded-full"
              />

              </div>

              {/* User Name */}
              <span className="text-gray-900 dark:text-white font-semibold">Professor</span>

              {/* Logout Button */}
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
