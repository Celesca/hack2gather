import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-blue-700 p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold tracking-wider cursor-pointer hover:opacity-90">
          Hack2gather
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-200 hover:text-white transition duration-300 font-medium">
            Home
          </a>
          
          <a href="/register" className="text-gray-200 hover:text-white transition duration-300 font-medium">
            Register
          </a>

          <a href="/login" className="text-gray-200 hover:text-white transition duration-300 font-medium">
            Login
          </a>

          <a href="/profile" className="text-gray-200 hover:text-white transition duration-300 font-medium">
          Profile
          </a>
         
        
          <a href="/swipe" className="text-gray-200 hover:text-white transition duration-300 font-medium">
            Swipe
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gradient-to-r from-purple-700 to-blue-700 rounded-lg p-4 shadow-lg">
          <a href="/" className="block text-gray-200 hover:text-white text-center py-2 transition duration-300 font-semibold">
            Home
          </a>
          <a href="#" className="block text-gray-200 hover:text-white text-center py-2 transition duration-300 font-semibold">
            About
          </a>
          <a href="#" className="block text-gray-200 hover:text-white text-center py-2 transition duration-300 font-semibold">
            Contact
          </a>
          <a href="/swipe" className="block text-gray-200 hover:text-white text-center py-2 transition duration-300 font-semibold">
            Swipe
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
