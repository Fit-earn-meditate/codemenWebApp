import Image from "next/image";
import dynamic from "next/dynamic";
// import Button from "../../components/buttons";
// import themeConfig from "../../config/theme.config"
import { useState } from "react";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Button = ({ children }) => (
  <button className="text-black">
    {children}
  </button>
)

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const data = [
    {
      title: "E- commerce Website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis ?",
      clientDetails: {
        logo: "/codemenWebApp/portfolio-icon-1.png"
      },
      technologies: ["HTML", "CSS", "React JS", "Bootstrap"]
    },
    {
      title: "E- commerce Website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis ?",
      clientDetails: {
        logo: "/codemenWebApp/portfolio-icon-2.png"
      },
      technologies: ["HTML", "CSS", "React JS", "Bootstrap"]
    },
    {
      title: "E- commerce Website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis ?",
      technologies: ["HTML", "CSS", "React JS", "Bootstrap"]
    }
  ]

  return (
    <section id="portfolio" className="container mx-auto">
      <div className="text-center flex justify-center items-center flex-col mb-10">
        <h2 className="text-5xl font-semibold text-[#44644a]">Portfolio</h2>
        <div className="mt-2 px-20 text-[#7E7E7E] text-lg w-auto lg:w-[60rem]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, omnis Nesciuntpossimus quisquam tenetur, vitae,necessitatibus, modi accusantiumplaceat aliquam consectetur laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <ul className="flex justify-center space-x-10 overflow-hidden md:overflow-visible  scale-[0.8]">
        <OwlCarousel {...options}>
          {data && data.map((obj, i) =>
            <li className={`${true ? "opacity-1 relative top-0" : "opacity-70"} flex justify-center`}>
              <div id="card" className="bg-[#D7F4EA] w-80 flex justify-center items-center flex-col text-center space-y-8 py-10 px-5 rounded-3xl">
                <span className="bg-[#04A367] text-[#ffffff] rounded-md px-6 align-text-bottom py-1"> Example </span>
                {obj && obj.clientDetails && obj.clientDetails.logo ?
                  <div className="h-32 w-32 p-5 bg-white flex justify-center items-center font-bold text-[#01A165] rounded-xl">
                    <Image
                      src={obj && obj["clientDetails"] && obj["clientDetails"]["logo"]}
                      width={200}
                      height={200}
                    />
                  </div> :
                  <div className="h-32 w-32 bg-white flex justify-center items-center font-bold text-[#01A165] rounded-xl">
                    abc.com
                  </div>}
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
            </li>)}
        </OwlCarousel>
      </ul>
    </section>
  )
};

export default Portfolio;