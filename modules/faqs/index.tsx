import { useSpring, animated } from "@react-spring/web";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useEffect } from "react";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const Accordion = ({ title, children, isOpen = false, setIsOpen }) => {
  const animation = useSpring({
    height: isOpen ? "100px" : "0px",
    opacity: isOpen ? 1 : 0,
    config: { tension: 180, friction: 12 },
  });

  return (
    <div className="rounded-xl px-7 lg:px-10 py-4 bg-[#4bb133e8] text-[#fff]">
      <div
        className="cursor-pointer flex justify-between items-center space-x-5 font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        <button>
          {isOpen ? (
            <svg
              width="36"
              height="36"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.82994 11.1193L3.20082 4.49016L4.32576 3.36522L10.9549 9.99434L9.82994 11.1193ZM4.32576 11.1193L3.20082 9.99434L9.82994 3.36522L10.9549 4.49016L4.32576 11.1193Z"
                fill="#fff299"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.40202 9.61237V0.23737H5.99293V9.61237H4.40202ZM0.509976 5.72032L0.509976 4.12941H9.88498V5.72032H0.509976Z"
                fill="#fff299"
              />
            </svg>
          )}
        </button>
      </div>
      <animated.div style={animation} className="overflow-hidden mt-4 text-lg text-[#fff299]">
        {children}
      </animated.div>
    </div>
  );
};

const FAQs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setFaqs(
      [...Array(4)].map((_, i) => ({
        id: i + 1,
        title: "Lorem ipsum dolor sit amet consectetur ?",
        response:
          "Lorem ipsum dolor sit amet consectetur. In ornare et quis scelerisque posuere ac felis. Id aliquet at morbi vel vitae sed. Et egestas neque mattis gravida ornare maecenas libero sem. Massa pellentesque neque nisl congue feugiat eget. Aliquam commodo laoreet mauris ipsum. Aenean eros scelerisque elit vel odio lacus.",
      }))
    );
  }, []);

  return (
    <section className="mx-auto container relative py-12">
      <div>
        <Image
          src={`/faqs-bg.png`}
          alt=""
          width={400}
          height={400}
          loading="lazy"
          className="right-0 absolute bottom-0 z-[0] right-10 opacity-50"
        />
        <div className="py-16 z-[100] relative z-[999]">
          <h1 className="text-4xl lg:text-5xl text-center">
            Frequently asked questions
          </h1>
          <ul className="space-y-3 lg:px-40 mt-12">
            {faqs &&
              faqs.map((faq, i) => (
                <Accordion
                  setIsOpen={() => {
                    faq.isOpen = !faq.isOpen;
                    setFaqs([...faqs]);
                  }}
                  isOpen={faq.isOpen}
                  title={faq.title}>
                  This is some content inside the accordion. You can place any
                  content you want here!
                </Accordion>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
