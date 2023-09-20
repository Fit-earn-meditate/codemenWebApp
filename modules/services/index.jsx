import dynamic from "next/dynamic";
import Image from "next/image";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const options = {
  loop: true,
  center: true,
  items: 3,
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
      items: 1.5
    },
    1200: {
      items: 3
    },
    1390: {
      items: 3
    },
    1700: {
      items: 3
    },
    1900: {
      items: 4
    }
  }
};

const Services = () => (
  <section id="services" className="lg:container mx-auto py-20">
    <div className="text-center flex justify-center items-center flex-col">
      <h2 className="text-4xl lg:text-5xl font-semibold text-[#44644a]">Services</h2>
      <div className="mt-2 px-20 text-[#7E7E7E] text-lg">
        <p>We Serve All Your Digital Needs</p>
      </div>
    </div>

    <ul
      className={`hidden lg:grid grid-rows-2 grid-flow-row md:grid-flow-col gap-12 mt-0 justify-center scale-[0.8]`}
    >
      {[...Array(6)].map(() => (
        <div className="w-96 h-96 bg-[#E6F4EF] rounded-xl p-10 justify-center hover:scale-105 hover:cursor-pointer">
          <div>
            <span className="bg-[#01A165] inline-block h-20 w-20 flex justify-center items-center p-2 rounded-2xl">
              <Image src={"/services-1.png"} height={1000} width={1000} />
            </span>
          </div>
          <div className="mt-16">
            <div>
              <h2 className="font-bold text-2xl">Digital Marketing</h2>
            </div>
            <div className="text-[#7E7E7E] font-md mt-2 text-xl">
              <p>
                Comprehensive online strategies to promote brands, products, and
                services across digital platforms for maximum impact.
              </p>
            </div>
          </div>
        </div>
      ))}
    </ul>

    <ul
      className={`lg:hidden mt-14 px-5`}
    >
      <OwlCarousel {...options}>
        {[...Array(6)].map(() => (
          <li className="w-full bg-[#E6F4EF] rounded-xl py-10 px-8 justify-center hover:scale-105 hover:cursor-pointer">
            <div className="flex justify-center">
              <span className="bg-[#01A165] inline-block h-20 w-20 flex justify-center items-center p-2 rounded-2xl">
                <Image src={"/services-1.png"} height={1000} width={1000} />
              </span>
            </div>
            <div className="mt-8">
              <div>
                <h2 className="font-bold text-2xl text-center">Digital Marketing</h2>
              </div>
              <div className="text-[#7E7E7E] font-md mt-2 text-xl text-center">
                <p>
                  Comprehensive online strategies to promote brands, products, and
                  services across digital platforms for maximum impact.
                </p>
              </div>
            </div>
          </li>
        ))}
      </OwlCarousel>
    </ul>
  </section>
);

export default Services;
