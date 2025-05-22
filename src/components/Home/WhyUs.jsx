import { Link } from "react-router-dom";

const whyUsData = [
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/familyowned.png?v=1699518639&width=300",
    text: "Kiwi-Vietnamese family owned",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/hand.png?v=1699518639&width=300",
    text: "Only the best beans hand-picked at peak ripeness",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/nz.png?v=1699518639&width=300",
    text: "100% pure coffee beans roasted in NZ",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/directtrade.png?v=1699518639&width=300",
    text: "Ethically sourced farm-to-cup trade",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/diversity_1.svg?v=1699889122&width=300",
    text: "Proudly promoting all coffees, including Robusta",
  },
];

export const WhyUs = () => {
  return (
    <section className="container mt-4 mx-auto rounded-xl md:py-4 lg:py-6 px-4">
      <div className="bg-[#fff0f0] mt-10 rounded-xl py-6 px-4">
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#28707b] uppercase mb-6">
          <strong>WHY US</strong>
        </p>

        {/* Items */}
        <div className="flex flex-wrap justify-center gap-6">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[250px]"
            >
              <img
                loading="eager"
                className="w-16 h-auto mb-3 lg:w-20"
                src={item.img}
                alt=""
              />
              <p className="text-[#28707b] font-medium text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <Link to="#">
            <button className="bg-[#0a7485] text-white rounded-full px-6 py-2 font-medium uppercase hover:brightness-110 transition">
              Our Story
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
