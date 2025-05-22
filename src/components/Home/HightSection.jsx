import { Link } from "react-router-dom";

export const HightSection = () => {
  return (
    <section className="mt-5">
      <div className="container mx-auto px-4">
        <div className="bg-[#f2f195] rounded-xl flex flex-col lg:flex-row lg:pr-0">
          <div className="w-full lg:w-1/2 m-1 lg:m-10 text-[#0a7485] flex-col space-y-3 md:space-y-6 lg:pr-0 text-base rounded-xl container-content text-center lg:text-left pb-5 lg:pb-10">
            <p className="font-bold text-sm md:text-xl">
              NEW ZEALAND'S FIRST SPECIALTY
              <br />
              VIETNAMESE COFFEE BRAND
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              <strong>SO GOOD WE HAD TO SHARE</strong>
            </h2>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Uncensored Vietnamese flavours, a traditional taste with a modern
              touch. Premium beans sourced directly from Vietnamese farms and
              small batch roasted in Aotearoa.
            </p>

            <div className="flex flex-wrap justify-center md:justify-between lg:grid lg:grid-cols-5 gap-x-4 gap-y-6 md:gap-y-8 lg:gap-8">
              {[
                {
                  img: "//maycoffeecrew.co.nz/cdn/shop/files/morecaffeine.svg?height=32&v=1699585924",
                  text: "2X MORE CAFFEINE",
                },
                {
                  img: "//maycoffeecrew.co.nz/cdn/shop/files/lessugars.svg?height=32&v=1699585925",
                  text: "60% LESS SUGARS",
                },
                {
                  img: "//maycoffeecrew.co.nz/cdn/shop/files/Group_70.svg?height=32&v=1699451359",
                  text: "MORE ANTIOXIDANTS",
                },
                {
                  img: "//maycoffeecrew.co.nz/cdn/shop/files/Isolation_Mode.svg?height=32&v=1699451359",
                  text: "MORE resistant",
                },
                {
                  img: "//maycoffeecrew.co.nz/cdn/shop/files/Layer_1_1.svg?height=32&v=1699451359",
                  text: "Bold & Smooth",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col justify-between gap-2 text-primary w-[85px] md:w-[100px]"
                >
                  <img
                    src={item.img}
                    alt={item.text}
                    width="32"
                    height="32"
                    loading="lazy"
                  />
                  <p className="text-center font-bold uppercase text-[10px] md:text-xs lg:text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-5 md:pt-6 lg:pt-8">
              <Link to="/collections">
                <button
                  type="button"
                  className="bg-[#0a7485] cursor-pointer text-white rounded-full px-6 lg:px-12 py-2 font-medium uppercase text-sm lg:text-base whitespace-nowrap hover:brightness-125"
                >
                  shop all
                </button>
              </Link>
            </div>
          </div>

          {/* Ảnh mobile */}
          <img
            loading="eager"
            className="lg:hidden pt-6 md:pt-10 w-full object-contain"
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/goodwitheverything.png?v=1699616208"
            alt=""
          />

          {/* Ảnh nền desktop */}
          <div
            className="hidden lg:block w-full lg:w-1/2 bg-cover bg-left-bottom bg-no-repeat rounded-r-xl"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/0611/1956/1867/files/beans.webp?v=1699100135')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
