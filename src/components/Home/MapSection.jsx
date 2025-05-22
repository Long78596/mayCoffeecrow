import React from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is Vietnamese coffee?",
    answer:
      "Vietnamese coffee is defined by its origin and brewing method, using a Phin Filter, and typically the use of Robusta beans. This combo yields a strong, rich and smooth brew. It is often paired with condensed milk, creating a distinctive and flavourful cup.",
  },
  {
    question: "What brewing methods do you recommend for your coffee?",
    answer:
      "Treat our coffee like any other beans you may purchase from other roasters or find at the cafe (we import green beans through direct trade and small batch roast in NZ). Continue your daily coffee routine with your go-to brewing method or experience the essence of authentic Vietnamese coffee with our versatile Phin filter.",
  },
  {
    question:
      "Are your products ethically sourced and environmentally friendly?",
    answer:
      "Yes, our products are ethically sourced, emphasising direct trade with small farms. We champion sustainability by promoting Robusta beans, resilient yet flavourful. Our focus on people and the planet drives our vision, detailed in our sustainability commitment.",
  },
  {
    question: "Can you be better with packaging?",
    answer:
      "Glad you asked! We're committed to sustainability, and we've prioritised eco-friendly packaging from the start. Our bags are soft plastic recyclable, ensuring both quality preservation for our beans and environmental responsibility. We continue to explore alternatives to enhance our sustainability efforts, it's progress not perfection!",
  },
  {
    question: "What varieties or blends of coffee do you offer?",
    answer:
      "We offer diverse blends sourced from Vietnam's Central Highlands and Northern regions, featuring robust Robusta and aromatic Arabica beans. Our range celebrates the rich flavours originating from these distinct Vietnamese coffee-growing areas.",
  },
  {
    question: "Can I purchase your coffee as whole beans or pre-ground?",
    answer:
      "Yes, you can choose between whole beans or pre-ground coffee on our Product Page. Whole beans preserve the flavour best (like fresh ground pepper) as once coffee is ground the oxidation process begins and it will lose its flavour and aroma from that point onwards. We offer free grinding for your convenience, ensuring a delightful brew to suit your preferences.",
  },
  {
    question: "Can you reduce the shipping threshold?",
    answer:
      "Our small business operates solely online, relying on e-commerce so shipping is a significant cost in our business. Unlike larger brands with multiple revenue streams, we absorb shipping costs. Our flat-rate charge ensures customer convenience, and is intended to pass through shipping at cost (or sometimes below!).",
  },
];

const MapSection = () => {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 text-[#28707b]">
        {/* Left Image */}
        <img
          src="//maycoffeecrew.co.nz/cdn/shop/files/earth.webp?v=1699619568&amp;width=1000"
          alt="Earth"
          srcSet="//maycoffeecrew.co.nz/cdn/shop/files/earth.webp?v=1699619568&amp;width=352 352w, //maycoffeecrew.co.nz/cdn/shop/files/earth.webp?v=1699619568&amp;width=832 832w"
          loading="lazy"
        />

        {/* Right FAQ */}
        <div id="faq" className="lg:pl-8 text-xl">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center pb-3">
                <span className="text-6xl md:text-h2 font-semibold mr-4">
                  {index + 1}
                </span>
                <span className="font-semibold  cursor-pointer hover:brightness-125">
                  {item.question}
                </span>
              </div>
              <div className="hidden border-l border-[#28707b] ml-2 pl-2 text-sm pb-4">
                {item.answer}
              </div>
            </div>
          ))}

          {/* Button */}
          <div className="flex justify-center mt-6">
            <Link to="#">
              <button className="bg-[#28707b] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm whitespace-nowrap hover:brightness-125">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
