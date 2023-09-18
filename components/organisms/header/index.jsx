import React from 'react';

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4">
      <a href="#" className="text-xl font-bold">
        <span className="text-[#01A165] text-2xl font-bold">
          <span className="text-[#c0f500]">Code</span> Banana
        </span></a>
      <ul className="flex space-x-10">
        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Clients</a></li>
        <li><a href="#" className="text-[#ffffff] bg-[#FFAB55] px-2 pb-1 rounded-xl">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;