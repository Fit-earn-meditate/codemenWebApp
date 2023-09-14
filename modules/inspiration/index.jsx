import Image from "next/image";

const Inspiration = () => {
  return (
    <section id="inspiration" className="py-20 flex justify-center h-[500px]">
      <div className="flex w-[1000px] space-x-10">
        <div>
          <span className="bg-[#67C3A0] block px-20 h-[300px] w-[400px]  rounded-tr-[15px] rounded-bl-[15px] rounded-br-[100px] rounded-tl-[100px]">
            <span className="relative bottom-14 z-100" />
            <Image
              src={`/codemenWebApp/founder.png`}
              width={1000}
              height={1000}
              loading="lazy"
              className="relative right-[40px] bottom-[61px]"
            />
          </span>
        </div>
        <div className="space-y-8">
          <h3 className="text-5xl text-[#04A367] font-bold leading-[50px] block">
            It's Time for you to future proof your career!
          </h3>
          <div className="text-lg text-[#7E7E7E]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            omnis? Nesciunt possimus quisquam tenetur, vitae, necessitatibus,
            modi accusantium placeat aliquam consectetur laudantium.
          </div>
          <div>
            <h4 className="text-[#7E7E7E] text-xl font-semibold">Aman Gupta</h4>
            <span className="text-[#44644a] font-semibold text-md leading-[10px] block">Founder, Codemen</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
