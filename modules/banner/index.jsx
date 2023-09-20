import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Button from "../../components/atoms/buttons";
import { useTrail, a } from '@react-spring/web';

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 280, friction: 60 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 120 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="relative w-full leading-20 text-black text-4xl font-bold will-change[transform opacity] overflow-hidden" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const Banner = () => {
  const [open, set] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     set(state => !state);
  //   }, 1000);
  // }, [])

  return (<section id="banner" className="lg:container mx-auto pb-20">
    <div className="flex justify-around flex-col lg:flex-row gap-24 lg:gap-0">
      <span>
        <Image
          src="/banner.png"
          alt="Banner Image"
          width={1600}
          height={300}
        />
      </span>
      <div className="flex flex-col justify-center space-y-8 px-5 lg:px-10 text-center lg:text-left">
        <div>
          <span className="text-[#01A165] text-5xl lg:text-6xl font-normal saturate-200 brandLogo">
            <span className="text-[#c0f500]">Code</span> Banana
          </span>
        </div>
        <div>
          <Trail open={open}>
            <h1 className="text-4xl text-[#01a165c2] grid"> Web Development and Digital Marketing Agency
              <i className="text-[#bfa200] text-lg mt-2 saturate-200">Crafting ideas into future Digitally</i>
            </h1>
          </Trail>

        </div>
        <div className="text-lg">
          <h2>Let's Build Your Brand with Best
            <span className="text-[#01A165] font-semibold"> Logo Designs</span> /
            <span className="text-[#01A165] font-semibold"> Web and Mobile App Designs</span> /
            <span className="text-[#01A165] font-semibold"> Web Development /Mobile App Development </span> /
            <span className="text-[#01A165] font-semibold"> Digital Marketing </span>/
            <span className="text-[#01A165] font-semibold"> Content Writing </span> /
            <span className="text-[#01A165] font-semibold"> Social Media Strategy </span> /
            <span className="text-[#01A165] font-semibold"> Business Consultancy </span>
          </h2>
        </div>
        {/* <div className="text-[#000000] text-lg">
          <p>
            Empowering businesses with innovative software solutions. Expert
            development services for growth and success.
          </p>
        </div> */}
        <div className="space-x-6 flex mt-10 justify-center lg:justify-start">
          <Button
            backgroundColor={"#fff"}
            textColor={"#01A165"}
          >
            Get a quote
          </Button>
          <Button
            textColor={"#01A165"}
            backgroundColor={"#fff"}
          >
            See portfolio
          </Button>
        </div>
      </div>
    </div>
  </section>);
}

export default Banner;
