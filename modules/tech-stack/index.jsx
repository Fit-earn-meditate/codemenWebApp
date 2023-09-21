import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const events = {
  onDragged: function (event) { },
  onChanged: function (event) { },
};

const options = {
  loop: false,
  center: true,
  items: 1,
  margin: 200,
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
      items: 2
    },
    1000: {
      items: 4
    }
  }
}


const stack = [
  {
    id: 1,
    title: "Design",
    technologies: [
      {
        title: "Figma",
        icon: "",
      },
      {
        title: "Adobe",
        icon: "",
      },
      {
        title: "Spline",
        icon: "",
      },
      {
        title: "Sketch",
        icon: "",
      },
    ],
  },
  {
    id: 2,
    title: "Engineering",
    technologies: [
      {
        title: "ReactJS",
        icon: "",
      },
      {
        title: "NodeJS",
        icon: "",
      },
      {
        title: "Django",
        icon: "",
      },
      {
        title: "Angular",
        icon: "",
      },
    ],
  },
  {
    id: 3,
    title: "Cloud",
    technologies: [
      {
        title: "AWS EC2",
        icon: "",
      },
      {
        title: "AWS SNS",
        icon: "",
      },
      {
        title: "AWS SQS",
        icon: "",
      },
      {
        title: "AWS Cloudwatch",
        icon: "",
      },
      {
        title: "AWS Codebuild",
        icon: "",
      },
    ],
  },
  {
    id: 3,
    title: "Marketing",
    technologies: [],
  },
];

export default () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(null);
  const carouselRef = stack && stack.map(() => useRef(null));
  // const [options, setOptions] = useState({});

  useEffect(() => {
    setCurrentTabIndex(0);
  }, []);

  useEffect(() => {
    const element = document.querySelectorAll(".owl-dots");
    if (element) {
      element.forEach(el => {
        el && el.classList.remove("disabled");
      })
    }
  }, [currentTabIndex])

  let props = useSpring({
    to: { transform: "scale(1.1)" },
    from: { transform: "scale(1)" },
    config: { duration: 500 },
    reverse: true,
    loop: { reverse: true },
  });

  return (
    <section id="tech-stack h-[100vh]">
      <div className="mx-auto mt-[30px] mb-[80px]">
        <div className="bg-gradient-to-r from-[#74FDC9CC] to-[#67C3A0] p-5 lg:p-20 flex flex-col justify-center items-center">
          <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-20 text-center">
            Technologies We Work With
          </h3>
          <ul className="flex space-x-10 text-white text-2xl mb-16 w-full overflow-x-auto justify-start lg:justify-center px-5">
            {stack &&
              stack.map((obj, i) => (
                <li
                  id={`tab-${i}`}
                  className={`${currentTabIndex === i ? "border-b-4 pb-2 border-white" : ""
                    }`}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentTabIndex(i);
                      const element = document.getElementById(`tab-${i}`);
                      e && e.target.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                      })
                    }}
                  >
                    {obj.title}
                  </button>
                </li>
              ))}
          </ul>
          <div className="w-[90%]">
            {<ul
              className={``}
            >
              <OwlCarousel carouselRef={carouselRef[currentTabIndex]} {...options} {...events} className="owl-carousel owl-theme">
                {stack[currentTabIndex || 0].technologies.map((technology) => (
                  <li className="flex justify-center">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div>
                        <span className="block h-72 w-60 bg-[#fff] rounded-lg"></span>
                      </div>
                      <div className="text-white text-center">
                        {technology.title}
                      </div>
                    </div>
                  </li>
                ))}
              </OwlCarousel>
            </ul>}
          </div>
        </div>
      </div>
    </section>
  );
};
