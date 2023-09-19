import Image from "next/image";
import React, { useState, useEffect } from "react";

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
          className="right-0 absolute bottom-0 z-[0] right-10"
        />
        <div className="py-16 z-[100]">
          <h1 className="text-5xl text-center">Frequently asked questions</h1>
          <div className="space-y-3 lg:px-64 mt-12">
            {faqs &&
              faqs.map((faq, i) => (
                <div className="border-1 border-b border-gray-300 py-4 text-2xl">
                  <div className="flex justify-between items-center relative z-[50]">
                    <span>{faq.title}</span>

                    <button
                      onClick={() => {
                        faqs[i]["isCollapsed"] = !faqs[i]["isCollapsed"];
                        setFaqs([...faqs]);
                      }}
                    >
                      {faq["isCollapsed"] ? (
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.82994 11.1193L3.20082 4.49016L4.32576 3.36522L10.9549 9.99434L9.82994 11.1193ZM4.32576 11.1193L3.20082 9.99434L9.82994 3.36522L10.9549 4.49016L4.32576 11.1193Z"
                            fill="darkslategrey"
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
                            fill="darkslategrey"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {faq["isCollapsed"] && (
                    <div className={`text-lg text-[#7E7E7E] py-2`}>
                      {faq.response}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
