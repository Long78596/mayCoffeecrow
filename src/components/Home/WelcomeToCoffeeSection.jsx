import { Link } from "react-router-dom";

const cards = [
  {
    title: "SHOP ALL PRODUCTS",
    desc: "Explore the world of energising and delicious Vietnamese coffee, bundles, brewing tools and gifts",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/3P_93294a49-4eca-429e-aeb5-b42e582db140.png?v=1702027933&width=250",
    bg: "#eec5a9",
    link: "/collections",
    isExternal: false,
  },
  {
    title: "DISCOVER OUR BUNDLES",
    desc: "Explore our curated coffee sets—perfect for gifting or savoring diverse flavours from our premium Vietnamese coffee collection",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/Bundle.png?v=1706603610&width=250",
    bg: "#f2f195",
    link: "https://maycoffeecrew.co.nz/collections/bundles",
    isExternal: true,
  },
  {
    title: "TRY OUR PHIN FILTER",
    desc: "Experience rich Vietnamese coffee with our traditional Phin Filter - embrace a unique brewing adventure today",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/Phin_Single_Double.png?v=1706603950&width=250",
    bg: "#fddede",
    link: "https://maycoffeecrew.co.nz/collections/brew-tools",
    isExternal: true,
  },
];

export const WelcomeCoffeeSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-bold py-4 lg:py-10 text-[#065e6c]">
          PREMIUM
          <br className="md:hidden" />
          VIETNAMESE COFFEE
        </h1>

        <div className="rounded bg-[#90e9f6] flex flex-col xl:flex-row gap-2 xl:gap-6">
          {/* Left Section */}
          <div className="flex flex-col justify-end xl:space-y-4 w-full xl:max-w-[17rem] pt-6 xl:pt-0">
            <div className="uppercase text-2xl md:text-4xl xl:text-5xl font-bold text-right flex items-center justify-center xl:items-end xl:flex-col gap-y-2">
              <span className="text-4xl text-[#065e6c]">
                <strong> Welcome to</strong>
              </span>
              <span className="tracking-wider text-center  font-bold text-[#90e9f6] stroke-text">
                THE CREW
              </span>
            </div>
            <p className="font-bold text-center text-[#065e6c]">
              SO GOOD, WE HAD TO SHARE
            </p>
            <img
              loading="eager"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/crew.svg?v=1699500244"
              alt=""
              className="hidden xl:block"
            />
          </div>

          {/* Slider Section */}
          <div className="flex-1 w-full xl:py-6 flex justify-between mt-4 xl:mt-0 px-4 gap-6 xl:pl-0 overflow-x-auto xl:overflow-x-hidden">
            {cards.map((card, index) => {
              const CardTag = card.isExternal ? "a" : Link;
              const cardProps = card.isExternal
                ? { href: card.link }
                : { to: card.link };

              return (
                <div
                  key={index}
                  style={{ backgroundColor: card.bg }}
                  className=" md:m-3 lg:m-4 rounded-xl p-4 flex flex-col text-primary w-[300px]  h-[380px]"
                >
                  <img
                    loading="eager"
                    className="h-[180px] w-auto mx-auto my-4"
                    src={card.image}
                    alt=""
                  />
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="font-bold text-[#065e6c]">
                        <strong>{card.title}</strong>
                      </p>
                      <p className="text-xs my-2 text-[#065e6c]">{card.desc}</p>
                    </div>
                    <CardTag {...cardProps}>
                      <button className="bg-[#065e6c] cursor-pointer text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm whitespace-nowrap hover:brightness-125">
                        Shop now
                      </button>
                    </CardTag>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigator Dots */}
          <div className="lg:hidden mt-4 flex space-x-6 justify-center items-center">
            <div className="rotate-180">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <div className="flex space-x-1">
              <div className="h-2 w-4 border-primary border rounded-full bg-primary"></div>
              <div className="h-2 w-2 border-primary border rounded-full"></div>
              <div className="h-2 w-2 border-primary border rounded-full"></div>
            </div>
            <i className="fa-solid fa-arrow-right"></i>
          </div>

          {/* Crew Image for mobile */}
          <img
            loading="eager"
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/crew.svg?v=1699500244"
            alt=""
            className="xl:hidden"
          />
        </div>
      </div>
    </section>
  );
};
