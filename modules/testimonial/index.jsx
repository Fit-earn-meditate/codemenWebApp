import Image from "next/image";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const testimonials = [
    {
      id: "1",
      serviceProvided: "UX Designing",
      authorInfo: {
        authorName: "Coca Cola",
        profileImage: "profile1.png",
      },
      comment:
        "I was very happy with the work that [project name] did on our website redesign. They were able to take our vision and turn it into a beautiful and functional website that has exceeded our expectations. We were especially impressed with their attention to detail and their willingness to go the extra mile. We would definitely recommend [project name] to anyone looking for a great web development team.",
      rating: 4,
    },
    {
      id: "2",
      serviceProvided: "Web Application Development",
      authorInfo: {
        authorName: "SpaceX",
        profileImage: "profile1.png",
      },
      comment:
        "I was very happy with the work that [project name] did on our website redesign. They were able to take our vision and turn it into a beautiful and functional website that has exceeded our expectations. We were especially impressed with their attention to detail and their willingness to go the extra mile. We would definitely recommend [project name] to anyone looking for a great web development team.",
      rating: 4,
    },
    {
      id: "3",
      serviceProvided: "Mobile Application Development",
      author: "Walter Green",
      authorInfo: {
        authorName: "Tesla",
        profileImage: "profile1.png",
      },
      comment:
        "I was very happy with the work that [project name] did on our website redesign. They were able to take our vision and turn it into a beautiful and functional website that has exceeded our expectations. We were especially impressed with their attention to detail and their willingness to go the extra mile. We would definitely recommend [project name] to anyone looking for a great web development team.",
      rating: 5,
    },
    {
      id: "4",
      serviceProvided: "UX Designing",
      author: "Jolly White",
      authorInfo: {
        authorName: "Coca Cola",
        profileImage: "profile1.png",
      },
      comment:
        "I was very happy with the work that [project name] did on our website redesign. They were able to take our vision and turn it into a beautiful and functional website that has exceeded our expectations. We were especially impressed with their attention to detail and their willingness to go the extra mile. We would definitely recommend [project name] to anyone looking for a great web development team.",
      rating: 4,
    },
    {
      id: "5",
      serviceProvided: "NFT",
      authorInfo: {
        authorName: "Pepsi",
        profileImage: "profile1.png",
      },
      comment:
        "I was very happy with the work that [project name] did on our website redesign. They were able to take our vision and turn it into a beautiful and functional website that has exceeded our expectations. We were especially impressed with their attention to detail and their willingness to go the extra mile. We would definitely recommend [project name] to anyone looking for a great web development team.",
      rating: 4,
    },
  ];

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

  const events = {
    onDragged: function (event) { },
    onChanged: function (event) { },
  };

  return (
    <section id="testimonials" className="container mx-auto bg-[#67C3A0] overflow-hidden relative pt-14 pb-32">
      <Image
        src={`/codemenWebApp/testimonial-bg.png`}
        width={1200}
        height={1200}
        loading="lazy"
        className="mx-auto absolute top-0 w-full p-28"
      />
      <div className="relative">
        <div className="text-center flex justify-center items-center flex-col lg:mb-20 absolute w-full top-0">
          <h2 className="text-5xl font-semibold text-[#ffffff]">Testimonials</h2>
          <div className="mt-2 px-20 text-[#ffffff] text-lg lg:w-[60rem]">
            <p>
              Customers rave about our exceptional service and solutions! Join us
              today for a remarkable experience.
            </p>
          </div>
        </div>

        <ul className="flex justify-center space-x-10 overflow-hidden md:overflow-visible w-full scale-[0.8] relative top-28">
          <OwlCarousel ref={carouselRef} {...options} {...events} className="owl-carousel owl-theme">
            {testimonials &&
              testimonials.map((elm, i) => (
                <li className={"opacity-1 flex justify-center"}>
                  <div
                    id="card"
                    className="bg-[#F3FAF7] w-80 flex justify-center items-center flex-col text-center space-y-1 pt-5 pb-10 px-5 rounded-3xl"
                  >
                    <div className="h-20 w-20 flex justify-center items-center font-bold text-[#01A165] rounded-xl">
                      <Image
                        src={`/codemenWebApp/${elm &&
                          elm["authorInfo"] &&
                          elm["authorInfo"]["profileImage"]
                          }`}
                        width={200}
                        height={200}
                      />
                    </div>

                    <div className="font-semibold">
                      {elm && elm.authorInfo.authorName}
                    </div>

                    <div className="flex">
                      {[...Array(5)].map(() => (
                        <svg
                          width="29"
                          height="30"
                          viewBox="0 0 29 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_904)">
                            <path
                              d="M9.96007 9.175L2.2509 10.3312L2.11436 10.36C1.90766 10.4168 1.71923 10.5293 1.56831 10.686C1.41738 10.8427 1.30937 11.0381 1.25531 11.2522C1.20125 11.4662 1.20307 11.6913 1.26059 11.9043C1.3181 12.1174 1.42926 12.3109 1.58269 12.465L7.16761 18.0887L5.85053 26.0325L5.83482 26.17C5.82217 26.3911 5.86656 26.6118 5.96345 26.8094C6.06034 27.0069 6.20624 27.1743 6.38623 27.2944C6.56621 27.4144 6.7738 27.4829 6.98775 27.4926C7.2017 27.5024 7.41431 27.4532 7.60382 27.35L14.4986 23.6L21.3776 27.35L21.4984 27.4075C21.6979 27.4888 21.9147 27.5137 22.1265 27.4797C22.3383 27.4457 22.5376 27.354 22.7039 27.2141C22.8702 27.0741 22.9975 26.8909 23.0727 26.6833C23.148 26.4757 23.1685 26.251 23.1321 26.0325L21.8138 18.0887L27.4012 12.4637L27.4954 12.3575C27.63 12.186 27.7183 11.9806 27.7512 11.7622C27.7842 11.5439 27.7605 11.3205 27.6828 11.1147C27.6051 10.9088 27.476 10.728 27.3087 10.5906C27.1414 10.4532 26.9419 10.3642 26.7305 10.3325L19.0214 9.175L15.5752 1.94999C15.4755 1.74066 15.3211 1.56439 15.1296 1.44113C14.938 1.31786 14.7169 1.25253 14.4913 1.25253C14.2657 1.25253 14.0446 1.31786 13.8531 1.44113C13.6615 1.56439 13.5072 1.74066 13.4074 1.94999L9.96007 9.175Z"
                              fill="#FF9A62"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_904">
                              <rect
                                width="29"
                                height="30"
                                fill="white"
                                transform="translate(-0.000244141)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      ))}
                    </div>

                    <div>
                      <span className="relative top-6">
                        <svg
                          width="21"
                          height="16"
                          viewBox="0 0 21 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.1222 7.05065C15.8889 7.05239 15.656 7.06948 15.4253 7.10179C15.4867 6.13722 15.8118 5.20235 16.3708 4.38345C16.9298 3.56454 17.7046 2.88797 18.6238 2.41617C19.2161 2.10933 19.8851 1.6299 19.4948 0.818071C19.4367 0.659858 19.3433 0.514486 19.2206 0.391224C19.0978 0.267962 18.9484 0.169514 18.7819 0.102155C18.6154 0.0347964 18.4354 5.48655e-06 18.2534 6.48869e-10C18.0714 -5.48525e-06 17.8914 0.0347747 17.7249 0.102123L17.5785 0.153262C13.7878 1.45092 10.5475 5.13294 11.2443 11.5253C11.5022 14.0823 13.4254 16 16.1222 16C17.4158 16 18.6565 15.5286 19.5713 14.6894C20.4861 13.8502 21 12.7121 21 11.5253C21 10.3386 20.4861 9.20042 19.5713 8.36125C18.6565 7.52209 17.4158 7.05065 16.1222 7.05065ZM4.97283 7.05065C4.73952 7.05239 4.50664 7.06948 4.27599 7.10179C4.33733 6.13722 4.66249 5.20235 5.22149 4.38345C5.78048 3.56454 6.5553 2.88797 7.47446 2.41617C8.06677 2.10933 8.73573 1.6299 8.3455 0.818071C8.2874 0.659858 8.19399 0.514486 8.07124 0.391224C7.9485 0.267962 7.7991 0.169514 7.63258 0.102155C7.46605 0.0347964 7.28606 5.48655e-06 7.10406 6.48869e-10C6.92207 -5.48525e-06 6.74207 0.0347747 6.57555 0.102123L6.42921 0.153262C2.63844 1.45092 -0.601841 5.13294 0.0949923 11.5253C0.352821 14.0823 2.27608 16 4.97283 16C5.61339 16 6.24769 15.8843 6.83949 15.6594C7.4313 15.4345 7.96903 15.1049 8.42198 14.6894C8.87493 14.2739 9.23423 13.7806 9.47936 13.2377C9.72449 12.6948 9.85066 12.1129 9.85066 11.5253C9.85066 10.9377 9.72449 10.3558 9.47936 9.81294C9.23423 9.27005 8.87493 8.77677 8.42198 8.36125C7.96903 7.94574 7.4313 7.61614 6.83949 7.39127C6.24769 7.16639 5.61339 7.05065 4.97283 7.05065Z"
                            fill="#008A56"
                          />
                        </svg>
                      </span>
                      <div className="text-[#7E7E7E] pt-6">
                        {elm && elm.comment}
                      </div>
                      <div>
                        <svg
                          className="float-right"
                          width="21"
                          height="16"
                          viewBox="0 0 21 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.87783 8.94935C5.11115 8.94761 5.34402 8.93052 5.57467 8.89821C5.51334 9.86278 5.18817 10.7976 4.62918 11.6166C4.07018 12.4355 3.29536 13.112 2.3762 13.5838C1.78389 13.8907 1.11493 14.3701 1.50516 15.1819C1.56327 15.3401 1.65667 15.4855 1.77942 15.6088C1.90216 15.732 2.05156 15.8305 2.21808 15.8978C2.38461 15.9652 2.5646 16 2.7466 16C2.92859 16 3.10859 15.9652 3.27512 15.8979L3.42145 15.8467C7.21223 14.5491 10.4525 10.8671 9.75567 4.47467C9.49784 1.91772 7.57458 0 4.87783 0C3.58415 0 2.34346 0.471438 1.42868 1.3106C0.513912 2.14977 0 3.28792 0 4.47467C0 5.66143 0.513912 6.79958 1.42868 7.63875C2.34346 8.47791 3.58415 8.94935 4.87783 8.94935ZM16.0272 8.94935C16.2605 8.94761 16.4934 8.93052 16.724 8.89821C16.6627 9.86278 16.3375 10.7976 15.7785 11.6166C15.2195 12.4355 14.4447 13.112 13.5255 13.5838C12.9332 13.8907 12.2643 14.3701 12.6545 15.1819C12.7126 15.3401 12.806 15.4855 12.9288 15.6088C13.0515 15.732 13.2009 15.8305 13.3674 15.8978C13.5339 15.9652 13.7139 16 13.8959 16C14.0779 16 14.2579 15.9652 14.4245 15.8979L14.5708 15.8467C18.3616 14.5491 21.6018 10.8671 20.905 4.47467C20.6472 1.91772 18.7239 0 16.0272 0C15.3866 0 14.7523 0.115741 14.1605 0.340614C13.5687 0.565488 13.031 0.89509 12.578 1.3106C12.1251 1.72611 11.7658 2.2194 11.5206 2.76229C11.2755 3.30518 11.1493 3.88705 11.1493 4.47467C11.1493 5.0623 11.2755 5.64417 11.5206 6.18706C11.7658 6.72995 12.1251 7.22323 12.578 7.63875C13.031 8.05426 13.5687 8.38386 14.1605 8.60873C14.7523 8.83361 15.3866 8.94935 16.0272 8.94935Z"
                            fill="#008A56"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </OwlCarousel>
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
