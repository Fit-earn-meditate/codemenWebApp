import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import axios from 'axios';

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const options = {
  loop: true,
  center: true,
  items: 3,
  margin: 40,
  autoplay: false,
  autoWidth: false,
  dots: true,
  autoplayTimeout: 8500,
  smartSpeed: 450,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1.5
    },
    1200: {
      items: 3
    },
    1390: {
      items: 3
    },
    1700: {
      items: 3
    },
    1900: {
      items: 4
    }
  }
};

const events = {
  onDragged: function (event) { },
  onChanged: function (event) { },
};

const Services = (props) => {
  const { data: services } = props;
  console.log("SERVICES", services);
  return (
    <section id="services" className="lg:container mx-auto py-20 lg:pb-10">
      <div className="text-center flex justify-center items-center flex-col">
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#44644a]">Services</h2>
        <div className="mt-2 px-20 text-[#7E7E7E] text-lg">
          <p>We offer holistic approach to meet all your digital needs</p>
        </div>
      </div>

      <ul
        className={`hidden lg:grid grid-rows-2 grid-flow-row md:grid-flow-col gap-12 mt-0 justify-center scale-[0.8]`}
      >
        {services && services.map((obj) => (
          <div className="w-96 min-h-96 h-[auto] bg-[#E6F4EF] rounded-xl p-10 justify-center hover:scale-105 hover:bg-[#ffd66c] text-[#7E7E7E] hover:text-[#4a5652] hover:cursor-pointer">
            <div>
              <span className="bg-[#01A165] inline-block h-20 w-20 flex justify-center items-center p-2 rounded-2xl">
                <Image src={`http://159.65.156.21:8000${obj.icon}`} className="object-cover" height={100} width={100} />
              </span>
            </div>
            <div className="mt-16">
              <div>
                <h2 className="font-bold text-2xl text-[#000]">{obj.name}</h2>
              </div>
              <div className=" font-md mt-2 text-xl">
                <p>
                  {obj.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>

      <ul
        className={`lg:hidden mt-14 px-5`}
      >
        <OwlCarousel carouselRef {...options} {...events} className="owl-carousel owl-theme">
          {services && services.map((obj) => (
            <li className="w-[90%] mx-auto min-h-[25rem] h-[auto] bg-[#E6F4EF] rounded-xl py-10 px-8 justify-center hover:cursor-pointer mb-5">
              <div className="flex justify-center">
                <span className="bg-[#01A165] inline-block h-20 w-20 flex justify-center items-center p-2 rounded-2xl">
                  <Image src={`http://159.65.156.21:8000${obj.icon}`} className="object-cover" height={100} width={100} />
                </span>
              </div>
              <div className="mt-8">
                <div>
                  <h2 className="font-bold text-2xl text-center">{obj.name}</h2>
                </div>
                <div className="text-[#7E7E7E] font-md mt-2 text-lg text-center font-normal">
                  <p>
                    {obj.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </OwlCarousel>
      </ul>
    </section>
  )
};

export default Services;
