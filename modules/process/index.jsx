// import Image from "next/image";
import Lottie from "lottie-react";
import GearWeel from "./animations/GearWheel.json";
import BusinessStrategy from "./animations/BusinessStrategy.json";
import BusinessStartup from "./animations/BusinessStartup.json";
import BrainIdea from "./animations/BrainIdea.json";
import AnalyticSearch from "./animations/AnalyticSearch.json";
import dynamic from "next/dynamic";
import { useRef, useState, Children } from "react";
import { useSpring, animated } from '@react-spring/web';

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
};


const FlipCard = ({ children, title }) => {
  const [flipped, setFlipped] = useState(false);

  const styles = useSpring({
    transform: `rotateY(${flipped ? 180 : 0}deg)`
  });

  const frontContent = Children.toArray(children).find(child => child.type === FlipCardFrontContent);
  const backContent = Children.toArray(children).find(child => child.type === FlipCardBackContent);

  return (
    <div>
      <div onClick={() => setFlipped(!flipped)} style={{ perspective: '1000px' }}>
        <animated.div
          className={`relative h-72 w-52`}
          style={{ willChange: 'transform', ...styles }}
        >
          <div className={`absolute top-0 left-0 w-full h-full ${flipped ? 'hidden' : ''}`}>
            {frontContent}
          </div>
          <div className={`absolute top-0 left-0 w-full h-full -scale-x-100 scale-y-100 ${flipped ? '' : 'hidden'}`}>
            {backContent}
          </div>
        </animated.div>
      </div>

      <div className="mt-2">
        <h2 className="text-center text-[#fff] text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

const FlipCardFrontContent = ({ children }) => {
  return <div className="bg-[#E5F4EF] rounded-xl w-full h-full flex justify-center items-center">{children}</div>;
};

const FlipCardBackContent = ({ children }) => {
  return <div className="bg-black rounded-xl w-full h-full text-white flex justify-center items-center">{children}</div>;
};

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
        <h2 className="text-4xl lg:text-5xl font-semibold">Making Progress Simple : <span className="text-[#fed418]">Our 5-Step Process</span></h2>
        <div className="mt-10 lg:mt-2 text-[#ffffff] px-5 lg:px-20 text-lg">
          <p>We guide projects seamlessly from Ideation to Launch, ensuring excellence at every stage and results that matter.</p>
        </div>
        <ul className="flex justify-center mt-20 space-x-6">
          <OwlCarousel ref={carouselRef} {...options} {...events} className="owl-carousel owl-theme">
            <li className="flex justify-center mb-5">
              <FlipCard title={"Ideate"}>
                <FlipCardFrontContent>
                  <Lottie animationData={BrainIdea} loop={true} />
                </FlipCardFrontContent>
                <FlipCardBackContent>
                  Back
                </FlipCardBackContent>
              </FlipCard>
            </li>

            <li className="flex justify-center mb-5">
              <FlipCard title={"Design"}>
                <FlipCardFrontContent>
                  <Lottie animationData={BusinessStrategy} loop={true} />
                </FlipCardFrontContent>
                <FlipCardBackContent>
                  Back
                </FlipCardBackContent>
              </FlipCard>
            </li>

            <li className="flex justify-center mb-5">
              <FlipCard title={"Engineering"}>
                <FlipCardFrontContent>
                  <Lottie animationData={GearWeel} loop={true} />
                </FlipCardFrontContent>
                <FlipCardBackContent>
                  Back
                </FlipCardBackContent>
              </FlipCard>
            </li>

            <li className="flex justify-center mb-5">
              <FlipCard title={"Launch"}>
                <FlipCardFrontContent>
                  <Lottie animationData={BusinessStartup} loop={true} />
                </FlipCardFrontContent>
                <FlipCardBackContent>
                  Back
                </FlipCardBackContent>
              </FlipCard>
            </li>

            <li className="flex justify-center mb-5">
              <FlipCard title={"Analysis"}>
                <FlipCardFrontContent>
                  <Lottie animationData={AnalyticSearch} loop={true} />
                </FlipCardFrontContent>
                <FlipCardBackContent>
                  Back
                </FlipCardBackContent>
              </FlipCard>
            </li>
          </OwlCarousel>
        </ul>
      </div>
    </section>);
}

export default Process;