import Image from "next/image";

const Services = () => (
  <section id="services" className="container mx-auto py-20">
    <div className="text-center flex justify-center items-center flex-col">
      <h2 className="text-5xl font-semibold">Services</h2>
      <div className="mt-2 px-20 text-[#7E7E7E] text-lg">
        <p>We Serve All Your Digital Needs</p>
      </div>
    </div>

    <div className="grid grid-rows-2 grid-flow-col gap-12 mt-16">
      {[...Array(6)].map(() => (
        <div className="w-96 bg-[#E6F4EF] rounded-xl p-10 justify-center">
          <div>
            <span className="bg-[#01A165] inline-block h-20 w-20 flex justify-center items-center p-2 rounded-2xl">
              <Image
                src={"/services-1.png"}
                height={1000}
                width={1000}
              />
            </span>
          </div>
          <div className="mt-5">
            <div>
              <h2 className="font-bold">Digital Marketing</h2>
            </div>
            <div className="text-[#7E7E7E] font-md mt-1">
              <p>Comprehensive online strategies to promote brands, products, and services across digital platforms for maximum impact.</p>
            </div>
          </div>
        </div>))}
    </div>
  </section>
);

export default Services;