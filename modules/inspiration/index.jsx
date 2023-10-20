import Image from "next/image";

const Inspiration = () => {
  return (
    <section
      id="inspiration"
      className="pt-0 pb-20 flex justify-center h-auto lg:h-[500px]"
    >
      <div className="flex flex-col lg:flex-row w-auto lg:w-[1000px] space-y-10 lg:space-x-10">
        <div className="pt-16">
          <span className="bg-[#67C3A0] block px-20 h-[300px] w-[400px]  rounded-tr-[15px] rounded-bl-[15px] rounded-br-[100px] rounded-tl-[100px]">
            <span className="relative bottom-14 z-100" />
            <Image
              src={`/founder.png`}
              width={1000}
              height={1000}
              loading="lazy"
              className="relative right-[40px] bottom-[61px]"
            />
          </span>
        </div>
        <div className="space-y-8 px-5 lg:px-0 text-center lg:text-left">
          <h3 className="text-4xl lg:text-5xl text-[#04A367] font-bold leading-[50px] block">
            Vision to Reality, A Founder's Perspective !
          </h3>
          <div className="text-lg text-[#7E7E7E]">
            At Code Banana, we're more than just a digital company. We're a
            community of enthusiasts who are passionate about innovation and
            growth. We're here to partner with local businesses and startups on
            their digital journeys, to illuminate the path, and to celebrate
            every achievement. Together, we'll continue to push boundaries and
            pave the way for a brighter digital future.
          </div>
          <div>
            <h4 className="text-[#7E7E7E] text-xl font-semibold">
              Archita Moitra
            </h4>
            <span className="text-[#44644a] font-semibold text-md leading-[10px] block">
              Founder, Code Banana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
