import Image from "next/image";
import Button from "../../components/atoms/buttons";

const Banner = () => (
  <section id="banner" className="lg:container mx-auto pb-20">
    <div className="flex justify-around flex-col lg:flex-row gap-24 lg:gap-0">
      <span>
        <Image
          src="/codemenWebApp/banner.png"
          alt="Banner Image"
          width={1800}
          height={300}
        />
      </span>
      <div className="flex flex-col justify-center space-y-8 px-5 lg:px-28 text-center lg:text-left">
        <div>
          <span className="text-[#01A165] text-6xl font-normal  brandLogo">
            <span className="text-[#c0f500]">Code</span> Banana
          </span>
        </div>
        <div>
          <h1 className="text-4xl text-[#f27c03] grid"> Web Development and Digital Marketing Agency
            <i className="text-[#3d99778a] text-lg mt-2">Crafting ideas into future Digitally</i>
          </h1>
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
  </section>
);

export default Banner;
