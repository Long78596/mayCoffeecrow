import {Link} from "react-router-dom";
export const ListProduct=()=>{
    return (
      <>
        <section class="container mx-auto">
          <div className="flex flex-col space-y-10 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div>
              <div className="flex justify-between lg:items-center flex-col md:flex-row gap-2 lg:gap-4">
                <p className="uppercase text-title font-bold text-[#0a7485]">
                  Coffee
                </p>
                <div className="flex items-center space-x-1">
                  <Link to="#" className="text-submenu text-[#0a7485]">
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex flex-col  relative h-full">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-white  text-center px-2 uppercase rounded  bg-[#218c74] z-10">
                    OUR STRONGEST
                  </div>
                  <Link to="#" className="mt-1 lg:mt-2">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage:
                            "url('https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=300')",
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="#">
                          <span className="font-bold text-sm text-[#0a7485]">
                            BUFFALO (ROBUSTA)
                          </span>
                        </Link>
                        <p className="text-neutral-500 text-xs uppercase">
                          Traditional Vietnamese Coffee MUST TRY
                        </p>
                      </div>
                      <div className="text-xs text-[#0a7485] text-left mt-1">
                        100% pure robusta, Buffalo is a bold, powerful yet
                        smooth, clean coffee that effortlessly complements milk.
                        Giving you that double shot of caffeine without breaking
                        the bank....
                      </div>
                    </div>

                    <Link to="#">
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
                  <Link to="#" className="text-submenu text-[#0a7485]">
                    See All
                  </Link>
                  <div className="w-4 text-[#0a7485]">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex flex-col  relative h-full">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm text-white  text-center px-2 uppercase rounded  bg-[#218c74] z-10">
                    OUR STRONGEST
                  </div>
                  <Link to="#" className="mt-1 lg:mt-2">
                    <div className="bg-neutral-50 flex justify-center py-2 rounded mt-4">
                      <div
                        className="h-[124px] md:h-[180px] w-full bg-center bg-contain bg-no-repeat"
                        style={{
                          backgroundImage:
                            "url('https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=300')",
                        }}
                      ></div>
                    </div>
                  </Link>
                  <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col h-full justify-between text-center py-4">
                      <div>
                        <Link to="#">
                          <span className="font-bold text-sm text-[#0a7485]">
                            BUFFALO (ROBUSTA)
                          </span>
                        </Link>
                        <p className="text-neutral-500 text-xs uppercase">
                          Traditional Vietnamese Coffee MUST TRY
                        </p>
                      </div>
                      <div className="text-xs text-[#0a7485] text-left mt-1">
                        100% pure robusta, Buffalo is a bold, powerful yet
                        smooth, clean coffee that effortlessly complements milk.
                        Giving you that double shot of caffeine without breaking
                        the bank....
                      </div>
                    </div>

                    <Link to="#">
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