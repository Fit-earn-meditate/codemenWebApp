import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

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
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  let props = useSpring({
    to: { transform: "scale(1.1)" },
    from: { transform: "scale(1)" },
    config: { duration: 500 },
    reverse: true,
    loop: { reverse: true },
  });

  return (
    <section id="tech-stack h-[100vh]">
      <div className="container mx-auto mt-[30px] mb-[80px]">
        <div className="bg-gradient-to-r from-[#74FDC9CC] to-[#67C3A0]  rounded-[25px] p-20 flex flex-col justify-center items-center">
          <h3 className="text-5xl font-semibold text-white mb-20">
            Technologies We Work With
          </h3>
          <ul className="flex space-x-10 text-white text-2xl mb-40">
            {stack &&
              stack.map((obj, i) => (
                <li
                  className={`${currentTabIndex === i ? "border-b-4 pb-2 border-white" : ""
                    }`}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentTabIndex(i);
                    }}
                  >
                    {obj.title}
                  </button>
                </li>
              ))}
          </ul>
          <div>
            <ul
              className={`flex space-x-20 w-[60em] overflow-x-auto justify-center items-center`}
            >
              {stack[currentTabIndex].technologies.map((technology) => (
                <li>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div>
                      <span className="block h-20 w-20 bg-white rounded-lg"></span>
                    </div>
                    <div className="text-white text-center">
                      {technology.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
