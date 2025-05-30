import { Link } from "lucide-react";

export const BlogGuide=()=>{
    return (
      <>
        <div className="container mx-auto w-full px-4 md:px-6 lg:px-0 text-[#0a7485]">
          <div className="flex flex-col md:flex-row items-center gap-6 px-4 sm:px-6 lg:px-12 py-10 max-w-screen-xl mx-auto">
            <img
              loading="eager"
              src="//maycoffeecrew.co.nz/cdn/shop/files/mascot2.svg?v=1699109038&amp;width=350"
              alt="Mascot"
              className="h-40 sm:h-48 md:h-56 lg:h-64 w-auto mx-auto md:mx-0"
            />

            <div className="flex flex-col space-y-4 md:space-y-3 text-center md:text-left max-w-xl">
              <p className="font-bold text-2xl sm:text-3xl md:text-4xl uppercase ">
                <strong> How to Brew</strong>
              </p>

              <p className="font-semibold uppercase text-sm sm:text-base md:text-lg">
                Learn a new brewing method, experiment with the Vietnamese Phin
                Filter
              </p>

              <p className="text-sm sm:text-base text-[#0a7485]">
                Nourish your soul amidst the hustle with a mindful, slow-drip
                coffee. Embrace this refreshing coffee experience in a bustling
                world!
              </p>
            </div>
          </div>
          <section>
            <div className="container mx-auto px-4 md:max-w-[970px]">
              <Link
                to="/blogs/brew-guide/vietnamese-phin-filter"
                className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden bg-secondary cursor-pointer"
              >
                <div>
                  <img
                    loading="eager"
                    className="w-full h-full object-cover"
                    src="//maycoffeecrew.co.nz/cdn/shop/articles/Phin_filter_Vietnamese_coffee.jpg?v=1701333886&amp;width=500"
                    alt="Vietnamese Phin Filter"
                  />
                </div>

                <div className="flex bg-amber-600 flex-col justify-center items-center text-center p-6 lg:p-12 space-y-4 text-[#0a7485]">
                  <span className="uppercase font-semibold text-xl sm:text-2xl">
                    Vietnamese Phin Filter
                  </span>

                  <div className="flex justify-center items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-4 w-4"
                        src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Clock.svg?v=1699975572"
                        alt="Clock"
                      />
                      <span className="font-medium">5 min prep time</span>
                    </div>

                    <div className="flex items-center gap-1 font-semibold uppercase">
                      <span>Read more</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="pt-6 lg:pt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" rounded-xl overflow-hidden shadow-sm">
                <Link to="/blogs/brew-guide/vietnamese-phin-filter" className="flex items-center gap-1 font-semibold uppercase">
                    <img
                      loading="eager"
                      className="w-full h-[250px] object-cover"
                      src="//maycoffeecrew.co.nz/cdn/shop/articles/Phin_filter_Vietnamese_coffee.jpg?v=1701333886&amp;width=500"
                      alt="Vietnamese Phin Filter"
                    />
                  </Link>

                  <div className="py-4 px-4 space-y-3">
                    <Link to="/blogs/brew-guide/vietnamese-phin-filter" className="flex items-center gap-1 font-semibold uppercase">
                      <span className="uppercase font-semibold text-base line-clamp-1">
                        Vietnamese Phin Filter
                      </span>
                    </Link>

                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-2">
                        <img
                          className="h-4 w-4"
                          src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Clock.svg?v=1699975572"
                          alt="Clock"
                        />
                        <span className="font-medium">5 min prep time</span>
                      </div>

                      <Link to="/blogs/brew-guide/vietnamese-phin-filter"
                        className="flex items-center gap-1 font-semibold uppercase"
                      >
                        <span>Read more</span>
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}