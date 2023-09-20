import React from 'react';

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center px-4 py-4">
      <a href="#" className="text-xl">
        <span className="text-[#01A165] text-3xl lg:text-5xl font-normal saturate-200 brandLogo">
          <span className="text-[#c0f500]">Code</span>Banana
        </span>
      </a>
      <ul className="hidden lg:flex space-x-10">
        <li><a href="#" className="font-semibold text-[#01A165] hover:text-[#c0f500]">Home</a></li>
        <li><a href="#" className="font-semibold text-[#01A165] hover:text-[#c0f500]">Services</a></li>
        <li><a href="#" className="font-semibold text-[#01A165] hover:text-[#c0f500]">Portfolio</a></li>
        <li><a href="#" className="font-semibold text-[#01A165] hover:text-[#c0f500]">Clients</a></li>
        <li><a href="#" className="text-[#ffffff] font-semibold bg-[#f27c03] px-2 pb-1 rounded-xl">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;