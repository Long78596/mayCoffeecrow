import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
const productList = [
  {
    id: "41742368342155",
    productId: "7226660814987",
    name: "HONEYMOON (BLEND)",
    description: "Crowd Pleaser - East Meets West",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_1.png?v=1706686057&width=150",
    url: "/products/buffalo",
    price: 16.0,
    sizes: ["250G", "500G", "1 KG"],
    grinds: ["Whole Bean", "Plunger (Coarse)", "Phin (Medium Fine)"],
  },
  {
    id: "41742368342156",
    productId: "7226660814988",
    name: "VIETNAMESE ESPRESSO",
    description: "Bold - Chocolatey - Smooth",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_2.png?v=1706686057&width=150",
    url: "/products/buffalo",
    price: 18.5,
    sizes: ["250G", "500G"],
    grinds: ["Whole Bean", "Espresso", "Phin (Medium Fine)"],
  },
  {
    id: "41742368342155",
    productId: "7226660814987",
    name: "HONEYMOON (BLEND)",
    description: "Crowd Pleaser - East Meets West",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_1.png?v=1706686057&width=150",
    url: "/products/buffalo",
    price: 16.0,
    sizes: ["250G", "500G", "1 KG"],
    grinds: ["Whole Bean", "Plunger (Coarse)", "Phin (Medium Fine)"],
  },
  {
    id: "41742368342155",
    productId: "7226660814987",
    name: "HONEYMOON (BLEND)",
    description: "Crowd Pleaser - East Meets West",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_1.png?v=1706686057&width=150",
    url: "/products/buffalo",
    price: 16.0,
    sizes: ["250G", "500G", "1 KG"],
    grinds: ["Whole Bean", "Plunger (Coarse)", "Phin (Medium Fine)"],
  },
  {
    id: "41742368342155",
    productId: "7226660814987",
    name: "HONEYMOON (BLEND)",
    description: "Crowd Pleaser - East Meets West",
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/N_1.png?v=1706686057&width=150",
    url: "/products/buffalo",
    price: 16.0,
    sizes: ["250G", "500G", "1 KG"],
    grinds: ["Whole Bean", "Plunger (Coarse)", "Phin (Medium Fine)"],
  },
];
  
export const ProductCarousel = () => {
    const scrollRef = useRef(null);
    const scroll = (dir) => {
      scrollRef.current?.scrollBy({
        left: dir === "left" ? -400 : 400,
        behavior: "smooth",
      });
    };
  return (
    <div className="relative w-full px-4 text-[#0a7485]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">
          <strong>Complete your coffee routine:</strong>
        </h2>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => scroll("left")}
            className="p-1.5 border-2 border-[#0a7485] rounded-full hover:bg-[#0a7485]/10 transition"
          >
            <ArrowLeft size={20} className="text-[#0a7485]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1.5 border-2 border-[#0a7485] rounded-full hover:bg-[#0a7485]/10 transition"
          >
            <ArrowRight size={20} className="text-[#0a7485]" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="overflow-x-auto">
        <div className="flex  space-x-2">
          {productList.map((product) => (
            <div
              key={product.id}
              className="p-4 bg-orange-100 rounded-xl flex space-x-2 w-[320px] lg:w-[525px] mt-5 overflow: auto"
            >
              <Link to={product.url}>
                <div
                  className="h-[115px] w-[125px] bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
              </Link>

              <div className="flex flex-col w-full justify-between space-y-2">
                <div className="flex flex-col lg:flex-row justify-between w-full">
                  <div>
                    <Link to={product.url} rel="noopener noreferrer">
                      <p className="font-semibold line-clamp-2 lg:line-clamp-1 text-xl">
                        {product.name}
                      </p>
                    </Link>
                    <p className="text-xs truncate hidden lg:block">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex gap-2 lg:flex-col items-end text-xs lg:text-sm font-semibold">
                    <p className="text-secondary line-through"></p>
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex w-full gap-2 flex-col lg:flex-row">
                  <div className="border border-[#0a7485] rounded-xl bg-white px-2 text-xs">
                    <select
                      className="outline-none text-[#0a7485] w-full"
                      name="options[Size]"
                    >
                      {product.sizes.map((size) => (
                        <option key={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  <div className="border border-primary rounded-xl bg-white px-2 text-xs">
                    <select
                      className="outline-none text-primary w-full"
                      name="options[Grind]"
                    >
                      {product.grinds.map((grind) => (
                        <option key={grind}>{grind}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <form
                  method="post"
                  action="/cart/add"
                  acceptCharset="UTF-8"
                  className="form"
                  encType="multipart/form-data"
                  noValidate
                >
                  <input type="hidden" name="form_type" value="product" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input
                    type="hidden"
                    name="id"
                    value={product.id}
                    className="product-variant-id"
                  />

                  <div className="product-form__buttons">
                    <button
                      type="submit"
                      name="add"
                      className="rounded-full w-full px-4 lg:px-12 py-2 font-medium uppercase text-sm whitespace-nowrap bg-[#0a7485] text-white hover:brightness-125"
                    >
                      <div className="flex space-x-4">
                        <p className="text-center w-full text-xs">
                          Add to cart
                        </p>
                      </div>
                      <div className="loading__spinner hidden">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          className="spinner"
                          viewBox="0 0 66 66"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="path"
                            fill="none"
                            strokeWidth="6"
                            cx="33"
                            cy="33"
                            r="30"
                          ></circle>
                        </svg>
                      </div>
                    </button>
                  </div>

                  <input
                    type="hidden"
                    name="product-id"
                    value={product.productId}
                  />
                  <input
                    type="hidden"
                    name="section-id"
                    value="template--15780775198859__main"
                  />
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
