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
        <li><a href="#services" className="font-semibold text-[#01A165] hover:text-[#c0f500]">Services</a></li>
        <li><a href="#portfolio" className="font-semibold text-[#01A165] hover:text-[#c0f500]">Portfolio</a></li>
        <li><a href="#testimonials" className="font-semibold text-[#01A165] hover:text-[#c0f500]">Clients</a></li>
        <li><a href="mailto:info.fitearn@gmail.com?subject=Client%20Enquiry&body=Hello%2C%0A%0AI%20am%20reaching%20out%20to%20inquire%20about%20your%20services%20and%20products.%20I'm%20interested%20in%20learning%20more%20and%20would%20appreciate%20additional%20details%20and%20any%20relevant%20documentation%20or%20resources.%0A%0ACould%20we%20schedule%20a%20call%20or%20meeting%20to%20discuss%20further%3F%20Please%20let%20me%20know%20your%20availability.%0A%0AThank%20you%20for%20your%20time.%20I%20look%20forward%20to%20your%20response.%0A%0ABest%20regards%2C" className="text-[#ffffff] font-semibold bg-[#f27c03] px-2 pb-1 rounded-xl">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;