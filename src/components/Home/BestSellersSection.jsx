import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    tag: "Best seller",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_1.png?v=1706686057&width=300",
    name: "HONEYMOON (BLEND)",
    description: "Crowd Pleaser - East Meets West",
    details:
      "Our signature robusta and arabica blend – a match made in heaven! Honeymoon is recommended...",
    link: "/products/honeymoon",
  },
  {
    id: 2,
    tag: "New",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_2.png?v=1706686057&width=300",
    name: "SUNRISE ARABICA",
    description: "Bright & Fruity",
    details:
      "A single origin arabica with a fruity note, great for those who love a smooth start.",
    link: "/products/sunrise",
  },
  {
    id: 3,
    tag: "Staff pick",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_2.png?v=1700628927&width=300",
    name: "DARK NIGHT",
    description: "Deep & Bold",
    details:
      "Strong, bold, and perfect for late-night coffee lovers. This roast is intense and flavorful.",
    link: "/products/dark-night",
  },
  {
    id: 4,
    tag: "Top Rated",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1746788103&amp;width=300",
    name: "MORNING DEW",
    description: "Light & Smooth",
    details:
      "Perfect for the early risers – a smooth, light blend to gently start your day.",
    link: "/products/morning-dew",
  },
];
  
export const BestSellersSection = () => {
  return (
    <section className="container mx-auto py-10 lg:py-20 text-[#0a7485] px-4 md:px-6 lg:px-0">
      <div className="flex justify-between items-center flex-col md:flex-row gap-5">
        <span className="text-title font-bold uppercase">
          MEET OUR BESTSELLERS
        </span>
        <div className="flex items-center space-x-1">
          <Link
            to="collections"
            className="text-submenu font-medium whitespace-nowrap"
          >
            Shop ALL
          </Link>
          <i className="fa-solid fa-arrow-right w-4"></i>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-rows justify-between relative p-4 rounded  bg-white"
            >
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs py-1 px-2 uppercase rounded">
                {item.tag}
              </div>
              <Link to="#">
                <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                  <div
                    className="h-40 w-full bg-center bg-contain bg-no-repeat"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  ></div>
                </div>
              </Link>
              <div className="flex flex-col items-center text-center py-4">
                <Link to="#">
                  <span className="font-bold text-sm">{item.name}</span>
                </Link>
                <p className="text-neutral-500 text-xs uppercase">
                  {item.description}
                </p>
                <p className="text-body mt-2">{item.details}</p>
                <Link to="#" className="mt-4">
                  <button className="bg-[#0a7485] text-white rounded-full px-6 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
