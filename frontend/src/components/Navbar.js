import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuCategories = {
    mens: [
      { name: 'T-shirts', href: '#mens-tshirts' },
      { name: 'Shirts', href: '#mens-shirts' },
      { name: 'Hoodies', href: '#mens-hoodies' },
      { name: 'Jackets', href: '#mens-jackets' },
      { name: 'Pants', href: '#mens-pants' },
      { name: 'Jeans', href: '#mens-jeans' }
    ],
    womens: [
      { name: 'Dresses', href: '#womens-dresses' },
      { name: 'Tops & Blouses', href: '#womens-tops' },
      { name: 'Skirts', href: '#womens-skirts' },
      { name: 'Leggings', href: '#womens-leggings' },
      { name: 'Outerwear', href: '#womens-outerwear' }
    ],
    accessories: [
      { name: 'Bags', href: '#accessories-bags' },
      { name: 'Jewelry', href: '#accessories-jewelry' },
      { name: 'Headwear', href: '#accessories-headwear' },
      { name: 'Belts', href: '#accessories-belts' },
      { name: 'Wallets', href: '#accessories-wallets' },
      { name: 'Sunglasses', href: '#accessories-sunglasses' },
      { name: 'Watches', href: '#accessories-watches' },
      { name: 'Scarves', href: '#accessories-scarves' }
    ]
  };

  return (
    <>
      {/* Overlay when dropdown is open */}
      {hoveredMenu && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 animate-fadeIn"
          onMouseEnter={() => setHoveredMenu(null)}
        />
      )}
      
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg z-50 py-4 border-b-2 border-gray-800">
        <div className="px-8">
          <div className="flex justify-between items-center">
          {/* Left Side - Logo Only */}
          <div>
            <h1 className="text-3xl font-bold text-white tracking-widest drop-shadow-lg">
              MOODISH
            </h1>
          </div>

          {/* Center - Navigation Links with Dropdowns */}
          <div className="flex items-center gap-6">
            {/* Mens Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('mens')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a 
                href="#mens" 
                className="text-white font-semibold text-lg hover:text-gray-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1 cursor-pointer pb-6"
              >
                Mens
                <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Mens Dropdown */}
              {hoveredMenu === 'mens' && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 pt-0 w-[600px] bg-white rounded-2xl shadow-2xl py-8 px-6 animate-fadeIn"
                  onMouseEnter={() => setHoveredMenu('mens')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">Men's Collection</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {menuCategories.mens.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setHoveredMenu(null)}
                        className="block px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-black hover:to-gray-800 hover:text-white rounded-xl active:bg-gray-700 transition-all duration-300 font-semibold text-lg cursor-pointer transform hover:scale-105 hover:shadow-lg"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <a href="#mens-all" onClick={() => setHoveredMenu(null)} className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      View All Men's Products
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Womens Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('womens')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a 
                href="#womens" 
                className="text-white font-semibold text-lg hover:text-gray-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1 cursor-pointer pb-6"
              >
                Womens
                <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Womens Dropdown */}
              {hoveredMenu === 'womens' && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 pt-0 w-[600px] bg-white rounded-2xl shadow-2xl py-8 px-6 animate-fadeIn"
                  onMouseEnter={() => setHoveredMenu('womens')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">Women's Collection</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {menuCategories.womens.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={() => setHoveredMenu(null)}
                        className="block px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-black hover:to-gray-800 hover:text-white rounded-xl active:bg-gray-700 transition-all duration-300 font-semibold text-lg cursor-pointer transform hover:scale-105 hover:shadow-lg"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <a href="#womens-all" onClick={() => setHoveredMenu(null)} className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      View All Women's Products
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Accessories Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setHoveredMenu('accessories')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a 
                href="#accessories" 
                className="text-white font-semibold text-lg hover:text-gray-300 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1 cursor-pointer pb-6"
              >
                Accessories
                <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Accessories Dropdown */}
              {hoveredMenu === 'accessories' && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 pt-0 w-[700px] bg-white rounded-2xl shadow-2xl py-8 px-6 animate-fadeIn"
                  onMouseEnter={() => setHoveredMenu('accessories')}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-gray-200">Accessories</h3>
                  
                  {/* Main Categories */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Main Categories</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {menuCategories.accessories.slice(0, 3).map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          onClick={() => setHoveredMenu(null)}
                          className="block px-5 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-black hover:to-gray-800 hover:text-white rounded-xl active:bg-gray-700 transition-all duration-300 font-semibold cursor-pointer transform hover:scale-105 hover:shadow-lg text-base"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Essentials */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">Essentials</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {menuCategories.accessories.slice(3).map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          onClick={() => setHoveredMenu(null)}
                          className="block px-5 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-black hover:to-gray-800 hover:text-white rounded-xl active:bg-gray-700 transition-all duration-300 font-medium cursor-pointer transform hover:scale-105 hover:shadow-lg text-sm"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <a href="#accessories-all" onClick={() => setHoveredMenu(null)} className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                      View All Accessories
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Search, Profile, Cart */}
          <div className="flex items-center gap-4 justify-end">
            {/* Search Bar */}
            <div className="flex items-center bg-white hover:bg-gray-50 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
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
                className="w-64 border-none outline-none px-3 text-gray-700 bg-transparent focus:placeholder-gray-400"
              />
            </div>
            

            {/* Cart Icon */}
            <button className="relative w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 active:bg-white/60 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-100 shadow-lg hover:shadow-xl">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 4 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black text-xs font-bold rounded-full flex items-center justify-center border-2 border-black animate-pulse">
                3
              </span>
            </button>
            {/* Profile Icon */}
            <button className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 active:bg-white/60 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-100 shadow-lg hover:shadow-xl">
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
    </>
  );
};

export default Navbar;

