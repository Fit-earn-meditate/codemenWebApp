

const Footer = () => (
  <footer className="flex flex-col justify-center bg-[#1E2F23] text-[#ffffff] w-full py-10">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="space-y-3">
          <div className="text-5xl">
            <a href="#" className="text-xl font-bold">
              <span className="text-[#01A165] text-2xl font-normal brandLogo">
                <span className="text-[#c0f500]">Code</span> Banana®
              </span></a>
          </div>
          <div className="text-[#7E7E7E]">Our Company gives the best solution!</div>
          <div>
            <span>Address</span>
            <div className="text-[#7E7E7E]">Address:</div>
          </div>
          <div>
            <span>Contact</span>
            <div className="text-[#7E7E7E]">Address:</div>
          </div>

          <div>
            <span>Follow us</span>
            <div>
              <ul className="flex space-x-4">
                <li>Link1 </li>
                <li>Link2 </li>
                <li>Link3 </li>
                <li>Link4 </li>
                <li>Link5 </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-10 pb-10">
          <ul className="space-y-3">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Coach</li>
          </ul>

          <ul className="space-y-3">
            <li>Logo Design</li>
            <li>Website Design</li>
            <li>Packing Design</li>
            <li>Brand Design</li>
            <li>E-commerce Website Design</li>
          </ul>

          <div>
            <h3>All Major Cards & Net Banking Accepted</h3>
            <ul className="flex">
              <li>Logo Design</li>
              <li>Website Design</li>
              <li>Packing Design</li>
              <li>Brand Design</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div className="border-2" />

    <div className="text-center pt-10">
      Copyright © {new Date().getFullYear() - 1}-{new Date().getFullYear()}. All rights
      reserved
    </div>
  </footer>
);

export default Footer;