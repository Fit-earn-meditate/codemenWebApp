import Image from "next/image";
import Button from "../../components/atoms/buttons";

const Banner = () => (
  <section id="banner" className="lg:container mx-auto pb-20">
    <div className="flex justify-around flex-col lg:flex-row gap-24 lg:gap-0">
      <span>
        <Image
          src="/codemenWebApp/banner.png"
          alt="Banner Image"
          width={1100}
          height={300}
        />
      </span>
      <div className="flex flex-col justify-center space-y-4 px-5 lg:px-28 text-center lg:text-left">
        <div>
          <span className="text-[#01A165] text-6xl font-normal  brandLogo">
            <span className="text-[#c0f500]">Code</span> Banana
          </span>
        </div>
        <div className="text-[#000000] text-lg">
          <p>
            Empowering businesses with innovative software solutions. Expert
            development services for growth and success.
          </p>
        </div>
        <div className="space-x-6 flex mt-10 justify-center lg:justify-start">
          <Button backgroundColor={"#c0f500"} textColor={"#fff"}>
            Get a quote
          </Button>
          <Button textColor={"#fff"} backgroundColor={"#c0f500"}>
            See portfolio
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
