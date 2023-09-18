import Image from "next/image";
import Button from "../../components/atoms/buttons";

const Footer = () => (
  <section id="banner" className="container mx-auto pb-20">
    <div className="flex justify-around">
      <span>
        <Image
          src="/codemenWebApp/banner.png"
          alt="Banner Image"
          width={1100}
          height={300}
        />
      </span>
      <div className="flex flex-col justify-center space-y-4 px-28">
        <div>
          <span className="text-[#01A165] text-6xl font-bold">
            <span className="text-[#c0f500]">Code</span> Banana
          </span>
        </div>
        <div className="text-[#000000] text-lg">
          <p>
            Empowering businesses with innovative software solutions. Expert
            development services for growth and success.
          </p>
        </div>
        <div className="space-x-5 flex mt-10">
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

export default Footer;
