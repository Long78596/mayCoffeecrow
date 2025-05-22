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
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl text-center font-bold text-[#065e6c] leading-tight">
          PREMIUM
          <br className="md:hidden" /> VIETNAMESE COFFEE
        </h1>

        <div className="rounded bg-[#90e9f6] mt-6 flex flex-col xl:flex-row gap-4 xl:gap-6">
          {/* Left Section */}
          <div className="flex flex-col items-center text-center xl:text-right justify-end xl:space-y-4 w-full xl:max-w-[17rem] pt-6 xl:pt-0 px-4">
            <div className="uppercase text-2xl md:text-3xl xl:text-4xl font-bold text-[#065e6c]">
              Welcome to
              <div className="tracking-wider font-bold text-[#90e9f6] stroke-text">
                THE CREW
              </div>
            </div>
            <p className="font-bold text-[#065e6c] mt-2">
              SO GOOD, WE HAD TO SHARE
            </p>
            <img
              loading="eager"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/crew.svg?v=1699500244"
              alt=""
              className="hidden xl:block w-full"
            />
          </div>

          {/* Slider Section */}
          <div className="flex-1 w-full xl:py-6 flex xl:justify-between mt-4 xl:mt-0 px-2 xl:pl-0 overflow-x-auto xl:overflow-x-hidden snap-x gap-4">
            {cards.map((card, index) => {
              const CardTag = card.isExternal ? "a" : Link;
              const cardProps = card.isExternal
                ? {
                    href: card.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { to: card.link };

              return (
                <div
                  key={index}
                  style={{ backgroundColor: card.bg }}
                  className="min-w-[80%] md:min-w-[250px] rounded-xl p-4 flex flex-col text-primary h-[400px] snap-center"
                >
                  <img
                    loading="eager"
                    className="h-[180px] w-auto mx-auto my-4"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="font-bold text-[#065e6c]">{card.title}</p>
                      <p className="text-xs my-2 text-[#065e6c]">{card.desc}</p>
                    </div>
                    <CardTag {...cardProps}>
                      <button className="bg-[#065e6c] text-white rounded-full px-6 py-2 font-medium uppercase text-sm hover:brightness-110">
                        Shop now
                      </button>
                    </CardTag>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Crew image for mobile */}
          <img
            loading="eager"
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/crew.svg?v=1699500244"
            alt=""
            className="xl:hidden mt-6 w-full"
          />
        </div>
      </div>
    </section>
  );
};
