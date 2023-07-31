import Image from "next/image";
import Button from "../../components/buttons";
import themeConfig from "../../config/theme.config"
import { useState } from "react";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="portfolio" className="py-20">
      <ul className="flex justify-center space-x-10">
        {[...Array(1)].map((elm, i) => (
          <li className={"opacity-70"}>
            <div id="card" className="bg-[#D7F4EA] w-80 flex justify-center items-center flex-col text-center space-y-8 py-10 px-5 rounded-3xl">
              <span className="bg-[#04A367] text-[#ffffff] rounded-md px-6 align-text-bottom py-1"> Example </span>
              <div className="h-32 w-32 p-5 bg-white flex justify-center items-center font-bold text-[#01A165] rounded-xl">
                <Image
                  src={"/codemenWebApp/portfolio-icon-1.png"}
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">E-commerce Website</h3>
                <div className="text-[#7E7E7E]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, omnis?
                </div>
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-4">
                <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">HTML</span>
                <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">CSS</span>
                <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">React JS</span>
                <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">Bootstrap</span>
              </div>
            </div>
          </li>))}

        <li className={"opacity-1 relative top-5"}>
          <div id="card" className="bg-[#D7F4EA] w-80 flex justify-center items-center flex-col text-center space-y-8 py-10 px-5 rounded-3xl">
            <span className="bg-[#04A367] text-[#ffffff] rounded-md px-6 align-text-bottom py-1"> Example </span>
            <div className="h-32 w-32 p-5 bg-white flex justify-center items-center font-bold text-[#01A165] rounded-xl">
              <Image
                src={"/codemenWebApp/portfolio-icon-2.png"}
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold">E-commerce Website</h3>
              <div className="text-[#7E7E7E]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, omnis?
              </div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">HTML</span>
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">CSS</span>
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">React JS</span>
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">Bootstrap</span>
            </div>
          </div>
        </li>


        <li className={"opacity-70"}>
          <div id="card" className="bg-[#D7F4EA] w-80 flex justify-center items-center flex-col text-center space-y-8 py-10 px-5 rounded-3xl">
            <span className="bg-[#04A367] text-[#ffffff] rounded-md px-6 align-text-bottom py-1"> Example </span>
            <div className="h-32 w-32 bg-white flex justify-center items-center font-bold text-[#01A165] rounded-xl">
              abc.com
            </div>
            <div>
              <h3 className="text-lg font-bold">E-commerce Website</h3>
              <div className="text-[#7E7E7E]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, omnis?
              </div>
            </div>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">HTML</span>
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">CSS</span>
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">React JS</span>
              <span className="border-2 border-[#000000] text-[#000000] rounded-full px-6 align-text-bottom py-1">Bootstrap</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
};

export default Portfolio;