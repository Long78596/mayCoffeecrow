import {Link} from "react-router-dom";
const listcoffee = [
  {
    id: 1,
    category: "Coffee",
    name: "BUFFALO (ROBUSTA)",
    description: "100% robusta with a bold, traditional flavor.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=300",
    tag: "OUR STRONGEST",
    tagColor: "#218c74",
  },
  {
    id: 2,
    category: "Coffee",
    name: "HONEYMOON (BLEND)",
    description: "Our signature medium-dark blend.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/N_1.png?v=1706686057&amp;width=300",
    tag: "BEST SELLER",
    tagColor: "#f39c12",
  },
  {
    id: 3,
    category: "Coffee",
    name: "SUNSHINE (ARABICA)",
    description: "Mellow and acidic, with a pop of citrus.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/N_2.png?v=1700628927&amp;width=300",
    tag: "DON'T SLEEP ON IT",
    tagColor: "#e84393",
  },
  {
    id: 4,
    category: "Coffee",
    name: "The Triplet Sampler",
    description: "Why try one? Try them all.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/3P.png?v=1700629093&amp;width=300",
    tag: "TRY ME!",
    tagColor: "#00cec9",
  },

  {
    id: 5,
    category: "Bundles",
    name: "Vietnamese Coffee Gift Box",
    description: "The very best Vietnamese coffee and gear in one box.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Traditional-clear.png?v=1748516508&amp;width=300",
  },
  {
    id: 6,
    category: "Bundles",
    label: "TRY ME!",
    name: "The Triplet Sampler",
    description:
      "Why settle for one? Sample our bestselling blends in one box.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Traditional-clear.png?v=1748516508&amp;width=300",
  },
  {
    id: 7,
    category: "Bundles",
    name: "The 'Phin'omenal Pair",
    description: "Includes Phin Filter and a premium bag of coffee.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Coconut-Clear_f27b6461-b3b0-4bdd-a299-bfe7ddf934c8.png?v=1748517075&amp;width=300",
  },
  {
    id: 8,
    category: "Bundles",
    name: "Iced Coffee Sampler Pack",
    description: "Powered by plants, 3 bottles of clean iced coffee.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1748514333&amp;width=300",
  },
  {
    id: 9,
    category: "Gift",
    name: "Gift Card",
    description: "Let them choose their favorite brew with a MAX gift card.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1748514333&amp;width=300",
  },
];
const listBundles = [
  {
    id: 1,
    category: "Bundles",
    name: "Vietnamese Coffee Gift Box",
    description:
      "Why not try them all and brew using the traditional Vietnamese Phin filter? There's something for every taste and feeling!",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/phintriobundle.png?v=1706782353&amp;width=300", // Giả định tên file
    tag: null,
    tagColor: null,
  },
  {
    id: 2,
    category: "Bundles",
    name: "The Triplet Sampler",
    description:
      "Why not try them all? There’s something for every taste and feeling! You will receive one bag of each type in the...",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/3P.png?v=1700629093&amp;width=300",
    tag: "TRY 'EM ALL",
    tagColor: "#00cec9", // xanh ngọc
  },
  {
    id: 3,
    category: "Bundles",
    name: "The 'Phin'omenal Pair",
    description:
      "The 'Phin'omenal Pairing of our Phin Filter with our Buffalo Robusta, buy together and save! This bundle includes...",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Phincoffee.png?v=1706687757&amp;width=300",
    tag: null,
    tagColor: null,
  },
  {
    id: 4,
    category: "Bundles",
    name: "Iced Coffee Sampler Pack",
    description:
      "Powered by premium Vietnamese Robusta beans, this is a triple shot that's smooth, rich, and crafted to fuel...",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1748514333&amp;width=300g",
    tag: null,
    tagColor: null,
  },
  {
    id: 5,
    category: "Gift",
    name: "Gift Card",
    description:
      "Treat someone special (or yourself) to the exquisite taste and cultural heritage woven into each cup of our premium...",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/MayOnlineGiftCard.png?v=1700907510&amp;width=300",
    tag: null,
    tagColor: null,
  },
];
const brewTools = [
  {
    id: 1,
    category: "Bundles",
    name: "Vietnamese Coffee Gift Box",
    description:
      "Why not try them all and brew using the traditional Vietnamese Phin filter? There's something for every taste and feeling!",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/phintriobundle.png?v=1706782353&amp;width=300", // Giả định tên file
    tag: null,
    tagColor: null,
  },
  {
    id: 2,
    category: "Bundles",
    name: "The Triplet Sampler",
    description:
      "Why not try them all? There’s something for every taste and feeling! You will receive one bag of each type in the...",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/3P.png?v=1700629093&amp;width=300",
    tag: "TRY 'EM ALL",
    tagColor: "#00cec9", // xanh ngọc
  },
  
];
export const ListProduct=()=>{
    return (
      <>
        <section class="container mx-auto px-4 md:px-6 lg:px-0 mt-10">
          <div className="flex flex-col space-y-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div>
              <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2 lg:gap-4">
                <p className="uppercase text-title font-bold text-[#0a7485]">
                  Coffee
                </p>
                <div className="flex items-center space-x-1">
                  <Link
                    to="/collections"
                    className="text-submenu text-[#0a7485]"
                  >
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {listcoffee.map((item, index) => (
                <div key={index} className="flex flex-col  relative h-full">
                  {item.tag && (
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 lg:text-sm text-white text-[10px] text-center px-2 uppercase rounded z-10"
                      style={{ backgroundColor: item.tagColor }}
                    >
                      {item.tag}
                    </div>
                  )}
                  <Link to="/products/buffalo" className="mt-2 lg:mt-3">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="/products/buffalo">
                          <span className="font-bold text-sm text-[#0a7485]">
                            {item.category}
                          </span>
                        </Link>
                        <p className="text-neutral-500 text-xs uppercase">
                          {item.name}
                        </p>
                      </div>
                      <div className="text-xs text-[#0a7485] text-left mt-1">
                        {item.description}
                      </div>
                    </div>

                    <Link to="/products/buffalo">
                      <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                        Shop now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-3">
            <div>
              <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2 lg:gap-4">
                <p className="uppercase text-title font-bold text-[#0a7485]">
                  Bundles
                </p>
                <div className="flex items-center space-x-1">
                  <Link
                    to="/collections"
                    className="text-submenu text-[#0a7485]"
                  >
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {listBundles.map((item, index) => (
                <div key={index} className="flex flex-col  relative h-full">
                  {item.tag && (
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 lg:text-sm text-white text-[10px] text-center px-2 uppercase rounded z-10"
                      style={{ backgroundColor: item.tagColor }}
                    >
                      {item.tag}
                    </div>
                  )}
                  <Link to="/products/buffalo" className="mt-2 lg:mt-3">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="/products/buffalo">
                          <span className="font-bold text-sm text-[#0a7485]">
                            {item.category}
                          </span>
                        </Link>
                        <p className="text-neutral-500 text-xs uppercase">
                          {item.name}
                        </p>
                      </div>
                      <div className="text-xs text-[#0a7485] text-left mt-1">
                        {item.description}
                      </div>
                    </div>

                    <Link to="/products/buffalo">
                      <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                        Shop now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mt-3">
            <div>
              <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2 lg:gap-4">
                <p className="uppercase text-title font-bold text-[#0a7485]">
                  Brew Tools
                </p>
                <div className="flex items-center space-x-1">
                  <Link
                    to="/collections"
                    className="text-submenu text-[#0a7485]"
                  >
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {brewTools.map((item, index) => (
                <div key={index} className="flex flex-col  relative h-full">
                  {item.tag && (
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 lg:text-sm text-white text-[10px] text-center px-2 uppercase rounded z-10"
                      style={{ backgroundColor: item.tagColor }}
                    >
                      {item.tag}
                    </div>
                  )}
                  <Link to="/products/buffalo" className="mt-2 lg:mt-3">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage: `url('${item.image}')`,
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="/products/buffalo">
                          <span className="font-bold text-sm text-[#0a7485]">
                            {item.category}
                          </span>
                        </Link>
                        <p className="text-neutral-500 text-xs uppercase">
                          {item.name}
                        </p>
                      </div>
                      <div className="text-xs text-[#0a7485] text-left mt-1">
                        {item.description}
                      </div>
                    </div>

                    <Link to="/products/buffalo">
                      <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm cursor-pointer hover:brightness-125">
                        Shop now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
}