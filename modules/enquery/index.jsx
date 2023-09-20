const Enquiry = () => {
  return (
    <section
      id="enquery"
      className="px-0 lg:container py-5 mx-auto"
    >
      <div className="text-[#ffffff] bg-[#67C3A0] flex justify-center py-10 px-5 lg:px-20 overflow-hidden rounded-none lg:rounded-[60px]">
        <div className="flex flex-col lg:flex-row space-y-16 lg:space-x-8 items-center">
          <div className="">
            <h2 className="text-5xl font-bold mb-10 text-center lg:text-left">
              Accelerate Innovation with bespoken Tech Solutions
            </h2>
            <div className="text-xl text-center lg:text-left">
              <p>
                Get ahead of the competition with customized technology solutions
                with Code Banana
              </p>
            </div>
          </div>
          <div>
            <div className="w-auto lg:w-[500px] bg-[#ffffff] text-[#000000] py-10 px-5 lg:px-10 rounded-lg">
              <h3 className="flex justify-start text-3xl font-bold mb-6 text-center lg:text-left">
                Book a discovery call
              </h3>
              <form className="space-y-5">
                <div>
                  <input
                    placeholder="Name"
                    className="border-2 border-grey rounded-md w-full h-10 px-6"
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    className="border-2 border-grey rounded-md w-full h-10 px-6"
                  />
                </div>
                <div>
                  <input
                    placeholder="Contact"
                    className="border-2 border-grey rounded-md w-full h-10 px-6"
                  />
                </div>
                <div>
                  <select placeholder="Select Category" className="border-2 border-grey rounded-md w-full h-10 px-3">
                    <option defaultChecked={true} className="text-[red]">Select Category</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="border-2 border-grey rounded-md w-full h-28 px-6 py-2"
                  />
                </div>

                <div>
                  <button className="bg-[#67C3A0] border-2 rounded-md w-full h-10 px-10 text-center text-[#ffffff]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
