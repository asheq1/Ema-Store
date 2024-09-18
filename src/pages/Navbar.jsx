import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo and Hamburger Icon (Mobile) */}
        <div className="flex items-center">
          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <NavLink to="/" className="hidden sm:block text-white text-2xl font-bold">
            Ema Store
          </NavLink>
        </div>

        {/* Centered Navigation NavLinks */}
        <ul className={`flex-1 justify-center md:flex hidden space-x-6`}>
          <li>
            <NavLink to="/" className="text-gray-300 hover:text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className="text-gray-300 hover:text-white">
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/read" className="text-gray-300 hover:text-white">
              Pages to Read
            </NavLink>
          </li>
        </ul>

        {/* Right side: Sign Up and Login Buttons */}
        <div className="flex items-center space-x-4">
          <NavLink to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hidden md:inline-block">
            Sign Up
          </NavLink>
          <NavLink to="/login" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hidden md:inline-block">
            Login
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4">
          <li>
            <NavLink to="/" className="block text-gray-300 hover:text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className="block text-gray-300 hover:text-white">
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/read" className="block text-gray-300 hover:text-white">
              Pages to Read
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
    );
};

export default Navbar;