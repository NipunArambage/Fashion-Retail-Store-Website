import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 shadow-lg z-50 py-4">
      <div className="px-8">
        <div className="flex justify-between items-center">
          {/* Left Side - Logo Only */}
          <div>
            <h1 className="text-3xl font-bold text-white tracking-widest drop-shadow-lg">
              MOODISH
            </h1>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex items-center gap-6">
            <a href="#mens" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform">
              Mens
            </a>
            <a href="#womens" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform">
              Womens
            </a>
            <a href="#accessories" className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform">
              Accessories
            </a>
          </div>

          {/* Right Side - Search, Profile, Cart */}
          <div className="flex items-center gap-4 justify-end">
            {/* Search Bar */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for a product"
                className="w-64 border-none outline-none px-3 text-gray-700 bg-transparent"
              />
            </div>
            

            {/* Cart Icon */}
            <button className="relative w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                3
              </span>
            </button>
            {/* Profile Icon */}
            <button className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

