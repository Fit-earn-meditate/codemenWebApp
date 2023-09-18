import Image from "next/image";

const Process = () => (
  <section id="process" className="bg-[#67C3A0] text-[#ffffff] py-20 text-center">
    <div className="px-5 lg:container mx-auto">
      <h2 className="text-5xl font-semibold">Looking for a business solution?</h2>
      <div className="mt-10 lg:mt-2 text-[#ffffff] px-5 lg:px-20 text-lg">
        <p>Well Your Ends Here ! Here’s How We Solve Business Problems.
          Our 5 - Step Process To Provide End To End Solution.</p>
      </div>
      <div className="flex justify-center mt-20">
        <Image
          src={"/codemenWebApp/process.png"}
          width={1200}
          height={500}
        />
      </div>
    </div>
  </section>
);

export default Process;