// import Image from "next/image";
import Lottie from "lottie-react";
import GearWeel from "./animations/GearWheel.json";
import BusinessStrategy from "./animations/BusinessStrategy.json";
import BusinessStartup from "./animations/BusinessStartup.json";
import BrainIdea from "./animations/BrainIdea.json";
import AnalyticSearch from "./animations/AnalyticSearch.json";
import dynamic from "next/dynamic";
import { useRef } from "react";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Card = ({ children, title }) => {
  return (
    <section>
      <div className="bg-[#E5F4EF] h-72 w-52 p-6 rounded-xl flex justify-center items-center">
        {children}
      </div>
      <div className="mt-2">
        <h2 className="text-center text-[#fff] text-2xl">
          {title}
        </h2>
      </div>
    </section>
  )
}

const Process = () => {
  const carouselRef = useRef(null);
  const options = {
    loop: false,
    center: false,
    items: 5,
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
        items: 3
      },
      1200: {
        items: 5
      }
    }
  };

  const events = {
    onDragged: function (event) { },
    onChanged: function (event) { },
  };

  return (
    <section id="process" className="bg-[#67C3A0] text-[#ffffff] py-20 text-center">
      <div className="px-5 lg:container mx-auto">
        <h2 className="text-5xl font-semibold">Making Progress Simple : Our 5-Step Process</h2>
        <div className="mt-10 lg:mt-2 text-[#ffffff] px-5 lg:px-20 text-lg">
          <p>We guide projects seamlessly from Ideation to Launch, ensuring excellence at every stage and results that matter.</p>
        </div>
        <ul className="flex justify-center mt-20 space-x-6">
          <OwlCarousel ref={carouselRef} {...options} {...events} className="owl-carousel owl-theme">
            {/* <Image
          src={"/codemenWebApp/process.png"}
          width={1200}
          height={500}
        /> */}
            <li className="flex justify-center">
              <Card title={"Ideate"}>
                <Lottie animationData={BrainIdea} loop={true} />
              </Card>
            </li>

            <li className="flex justify-center">
              <Card title={"Design"}>
                <Lottie animationData={BusinessStrategy} loop={true} />
              </Card>
            </li>

            <li className="flex justify-center">
              <Card title={"Engineering"}>
                <Lottie animationData={GearWeel} loop={true} />
              </Card>
            </li>

            <li className="flex justify-center">
              <Card title={"Launch"}>
                <Lottie animationData={BusinessStartup} loop={true} />
              </Card>
            </li>

            <li className="flex justify-center">
              <Card title={"Analysis"}>
                <Lottie animationData={AnalyticSearch} loop={true} />
              </Card>
            </li>
          </OwlCarousel>
        </ul>
      </div>
    </section>);
}

export default Process;