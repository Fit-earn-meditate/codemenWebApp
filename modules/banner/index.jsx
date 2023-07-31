import Image from "next/image";
import Button from "../../components/buttons";

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
      <div className="flex flex-col justify-center space-y-4 items-center text-center px-28">
        <div>
          <span className="text-[#01A165] text-4xl font-bold">
            Codemen
          </span>
        </div>
        <div className="text-[#000000]">
          <p>Empowering businesses with innovative software solutions. Expert development services for growth and success.</p>
        </div>
        <div className="space-x-5">
          <Button
            textColor={"#01A165"}
          >
            Get a quote
          </Button>
          <Button
            textColor={"#01A165"}
          >
            See portfolio
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;