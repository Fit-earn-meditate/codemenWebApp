import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";
import dynamic from "next/dynamic";
import Image from "next/image";

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

export default ({ data }) => {
  const [currentTec, setCurrentTech] = useState("design");
  const carouselRef = data && data.map(() => useRef(null));
  const [caraouselIndex, setCarouselIndex] = useState(0);
  // const [mappedData, setMappedData] = useState([]);
  // const [options, setOptions] = useState({});

  // useEffect(() => {
  //   const grouped =
  //     data &&
  //     data.reduce((acc, item) => {
  //       if (!acc[item.category]) {
  //         acc[item.category] = [];
  //       }
  //       acc[item.category].push(item);
  //       return acc;
  //     }, {});

  //   const _mappedData = Object.entries(grouped).map(
  //     ([category, technologies], index) => ({
  //       id: String(index + 1),
  //       category,
  //       technologies,
  //     })
  //   );

  //   setMappedData(_mappedData);
  // }, [data]);

  useEffect(() => {
    const element = document.querySelectorAll(".owl-dots");
    if (element) {
      element.forEach((el) => {
        el && el.classList.remove("disabled");
      });
    }
  }, [currentTec]);

  let props = useSpring({
    to: { transform: "scale(1.1)" },
    from: { transform: "scale(1)" },
    config: { duration: 500 },
    reverse: true,
    loop: { reverse: true },
  });

  const grouped =
    data &&
    data.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

  const mappedData = Object.entries(grouped).map(
    ([category, technologies], index) => ({
      id: String(index + 1),
      category,
      technologies,
    })
  );

  const obj =
    mappedData && mappedData.filter((obj) => obj.category === currentTec)[0];
  console.log("technologies", obj);

  return (
    <section id="tech-stack h-[100vh]">
      <div className="mx-auto mt-[30px] mb-[80px]">
        <div className="bg-gradient-to-r from-[#74FDC9CC] to-[#67C3A0] p-5 lg:p-20 flex flex-col justify-center items-center">
          <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-20 text-center">
            Technologies We Work With
          </h3>
          <ul className="flex space-x-10 text-white text-2xl mb-16 w-full overflow-x-auto justify-start lg:justify-center px-5">
            {mappedData &&
              mappedData.map((obj, i) => (
                <li
                  id={`tab-${i}`}
                  className={`${
                    obj.category === currentTec
                      ? "border-b-4 pb-2 border-white"
                      : ""
                  }`}
                >
                  <button
                    className="capitalize"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentTech(obj.category);
                      setCarouselIndex(i);
                      const element = document.getElementById(`tab-${i}`);
                      e &&
                        e.target.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                          inline: "center",
                        });

                      $(".owl-carousel").trigger("refresh.owl.carousel");
                    }}
                  >
                    {obj.category}
                  </button>
                </li>
              ))}
          </ul>
          <div className="w-[90%]">
            {<Carousel technologies={obj.technologies} />}
          </div>
        </div>
      </div>
    </section>
  );
};

const Carousel = ({ technologies }) => {
  const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
  const [options, setOptions] = useState({
    loop: false,
    center: true,
    items: (technologies && technologies.length) || 1,
    margin: 200,
    autoplay: false,
    autoWidth: false,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  const ref = useRef(null);

  const events = {
    onDragged: function (event) {},
    onChanged: function (event) {},
  };

  return (
    <ul>
      <OwlCarousel
        carouselRef={ref}
        {...options}
        {...events}
        className="owl-carousel owl-theme"
      >
        {technologies &&
          technologies.map((technology) => (
            <li className="flex justify-center">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div>
                  <span className="block h-72 w-60 bg-[#fff] rounded-lg">
                    {/* <img
                      src={technology.image}
                      alt={technology.name}
                      className="h-full w-full object-contain"
                    /> */}
                    <Image
                      className="p-12"
                      alt={technology.name}
                      src={`http://159.65.156.21:8000${technology.icon}`}
                      width={1000}
                      height={1000}
                    />
                    <div className="text-[green] text-center font-semibold text-lg">{technology.name}</div>
                  </span>
                  
                </div>
              </div>
            </li>
          ))}
      </OwlCarousel>
    </ul>
  );
};
