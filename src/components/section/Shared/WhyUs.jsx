import { Link } from "react-router-dom";

const whyUsData = [
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/familyowned.png?v=1699518639&width=300",
    text: "Kiwi-Vietnamese family owned",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/hand.png?v=1699518639&width=300",
    text: " Only the best beans hand-picked at peak ripeness",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/nz.png?v=1699518639&width=300",
    text: " 100% pure coffee beans roasted in NZ",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/directtrade.png?v=1699518639&width=300",
    text: "Ethically sourced farm-to-cup trade",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/diversity_1.svg?v=1699889122&width=300",
    text: "              Proudly promoting all coffees, including Robusta",
  },
];

export const WhyUs = () => {
  return (
    <section className="container mt-4 mx-auto rounded-xl md:py-4 lg:py-6">
      <div className="bg-[#fff0f0] mt-10 m-2 md:border">
        <p className="text-center text-4xl font-bold lg:py-10 md:py-5 text-[#28707b] uppercase">
          <strong>WHY US</strong>
        </p>
        <div className=" px-6 py-6 lg:mt-6 flex flex-wrap justify-evenly lg:justify-between">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              className="flex lg:flex-col items-center justify-center gap-4 w-full lg:w-[200px] mt-3"
            >
              <img
                loading="eager"
                className="h-auto w-16 lg:w-auto lg:h-20 mx-auto"
                src={item.img}
                alt=""
              />
              <div className="flex-1 w-full">
                <p className="text-[#28707b] font-medium  lg:text-center w-full">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 mb-6">
          <Link to="#">
            <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase mb-6">
              Our story
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
