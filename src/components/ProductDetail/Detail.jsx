// import React, { useState } from "react";
import { AddToCartForm } from "./AddtoCartForm";
import { SellingPlan } from "./SellingPlan";
import { CustomerReviews } from "./CustomerReviews";
import { ProductCarousel } from "./ProductCarousel";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Đăng ký module

const images = [
  "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100",
  "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100",
  "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100",
  "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100",
  "https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100",
];
export const Detail = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.update();
      }, 200);
    }
  }, []);
  // const handleDecrease = () => {
  //   if (quantity > 1) setQuantity(quantity - 1);
  // };

  // const handleIncrease = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleChange = (e) => {
  //   const value = parseInt(e.target.value, 10);
  //   if (!isNaN(value) && value >= 1) setQuantity(value);
  // };
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#0a7485]">
          <div>
            <div className="bg-white rounded shadow p-4">
              <img
                src="https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=700"
                alt="Buffalo Robusta"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={10}
                navigation
                pagination={{ clickable: true }}
                observer={true}
                observeParents={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="rounded overflow-hidden w-full h-64">
                      <img
                        src={img}
                        alt={`Image ${idx}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="flex flex-col space-y-4 text-xl">
            <div className="text-yellow-500 text-xs lg:text-xl ">
              <i className="fa-solid fa-star px-2"></i>
              <i className="fa-solid fa-star px-2"></i>
              <i className="fa-solid fa-star px-2"></i>
              <i className="fa-solid fa-star px-2"></i>
              <i className="fa-solid fa-star px-2"></i>
            </div>
            <h1 className="text-2xl font-bold text-[#0a7485] uppercase">
              <strong>BUFFALO (ROBUSTA)</strong>
            </h1>
            <span className="inline-block bg-yellow-200 text-xs font-medium px-2 py-1 rounded mt-2 mb-4 text-[#0a7485]">
              Traditional Vietnamese Coffee MUST TRY
            </span>

            <p className="text-sm  mb-4 text-[#0a7485]">
              100% pure robusta, Buffalo is a bold, powerful yet smooth, clean
              coffee that effortlessly complements milk. Giving you that double
              shot of caffeine without breaking the bank.
            </p>
            <div className="mt-2 underline text-xl cursor-pointer font-medium">
              Read more
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:sm:grid-cols-3 xl:grid-col-2  text-sm  mb-4 text-[#0a7485]">
              <div>
                <div className="flex text-xs py-1">
                  <div className="flex items-center space-x-2 min-w-[7rem]">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        loading="eager"
                        className="h-4"
                        width=""
                        height=""
                        src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Bean_type.svg"
                        alt=""
                      />
                    </div>
                    <span className="font-medium">Variety</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>: </span>
                    <span className="truncate">Robusta</span>
                  </div>
                </div>

                <div className="flex text-xs py-1">
                  <div className="flex items-center space-x-2 min-w-[7rem]">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        loading="eager"
                        className="h-4"
                        width=""
                        height=""
                        src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Region.svg"
                        alt=""
                      />
                    </div>
                    <span className="font-medium">Region</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>: </span>
                    <span className="truncate">Gia Lai</span>
                  </div>
                </div>
              </div>
              <div className="div">
                <div className="flex text-xs py-1">
                  <div className="flex items-center space-x-2 w-[7rem] md:w-24">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        loading="eager"
                        className="h-4"
                        width=""
                        height=""
                        src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Bean_type.svg"
                        alt=""
                      />
                    </div>
                    <span className="font-medium">Strength</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>: </span>
                    <div className="flex space-x-1">
                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex text-xs py-1">
                  <div className="flex items-center space-x-2 w-[7rem] md:w-24">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        loading="eager"
                        className="h-4"
                        width=""
                        height=""
                        src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Roast.svg"
                        alt=""
                      />
                    </div>
                    <span className="font-medium">Roast</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>: </span>
                    <div className="flex space-x-1">
                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                      <div className="h-3 w-3 rounded-full bg-[#0a7485]"></div>

                      <div className="h-3 w-3 rounded-full bg-orange-300"></div>

                      <div className="h-3 w-3 rounded-full  bg-orange-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" sm:col-span-2">
                <div className="flex text-xs py-1">
                  <div className="flex items-center space-x-2 min-w-[7rem]">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        loading="eager"
                        className="h-4"
                        width=""
                        height=""
                        src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Flavour_Notes.svg?v=1700465940"
                        alt=""
                      />
                    </div>
                    <span className="font-medium">Taste</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>: </span>
                    <span className="truncate">Strong &amp; Bold</span>
                  </div>
                </div>
              </div>
              <div className=" sm:col-span-2">
                <div className="flex text-xs py-1">
                  <div className="flex items-center space-x-2 min-w-[7rem]">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <img
                        loading="eager"
                        className="h-4"
                        width=""
                        height=""
                        src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Flavour_Notes.svg?v=1700465940"
                        alt=""
                      />
                    </div>
                    <span className="font-medium">Flavour Note</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>: </span>
                    <span className="truncate">Dark chocolate, Nutty</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold">SELECT STYLE:</p>

              <div className="        flex flex-wrap w-full gap-4 mt-2">
                <div className="flex flex-col space-y-1 w-fit ">
                  <span className="text-sm font-medium">Size</span>
                  <div className="border border-primary rounded-lg px-2">
                    <select
                      className="outline-none w-full text-sm"
                      id="Option-template--15780775198859__main-0"
                      name="options[Size]"
                      form=""
                      select-variant="Size"
                    >
                      <option value="250G" selected="selected">
                        250G
                      </option>
                      <option value="500G">500G</option>
                      <option value="1 KG">1 KG</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 w-fit ">
                  <span className="text-sm font-medium">Grind</span>
                  <div className="border border-primary rounded-lg px-2">
                    <select
                      className="outline-none w-full text-sm"
                      id="Option-template--15780775198859__main-1"
                      name="options[Grind]"
                      form=""
                      select-variant="Grind"
                    >
                      <option value="Whole Bean" selected="selected">
                        Whole Bean
                      </option>
                      <option value="Plunger (Coarse)">Plunger (Coarse)</option>
                      <option value="Phin (Medium Fine)">
                        Phin (Medium Fine)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 max-w-md mx-auto">
              <AddToCartForm />
            </div>
            <SellingPlan />
          </div>
        </div>
        <CustomerReviews />

        <ProductCarousel />
      </div>
    </section>
  );
};
