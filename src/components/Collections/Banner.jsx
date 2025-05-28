import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";
const slides = [
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/collections/Group_161.png?v=1706779006&width=300",
    text: " BREW TOOLS",
    date: "10 FEBRUARY 2024",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/collections/t_ixu_ng_e46886b4-5a31-4398-80d6-3cc3d53806d1.png?v=1706688144&width=300",
    text: "COFFEE",
    date: "10 FEBRUARY 2024",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/collections/image_49.png?v=1701337799&width=300",
    text: " BUNNDLES",
    date: "10 FEBRUARY 2024",
  },
];
export const Banner = () => {
  return (
    <section class="w-full bg-[#caf3ff]">
      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <p className="text-title font-bold uppercase text-[#0a7485]">
          SHOP BY CATEGORY
        </p>
        <div className="mt-6 lg:mt-10 m-2 justify-center items-center ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            navigation
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              770: { slidesPerView: 2 },
              1256: { slidesPerView: 3 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-between items-center ">
                  <Link to="#" className="flex flex-col space-y-4">
                    <div className="bg-white w-full justify-center py-4 rounded-xl overflow-hidden">
                      <img
                        loading="eager"
                        className="h-40 px-4 "
                        src={slide.img}
                        alt=""
                      />
                    </div>
                    <div className=" flex lg:flex-row items-center justify-between lg:mb-4">
                      <div className="div">
                        <p className="text-[#0a7485] font-bold text-center  ">
                          <strong> {slide.text}</strong>
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <span className=" font-bold text-body uppercase text-[#0a7485]">
                          SHOP NOW
                        </span>
                        <div className="w-4">
                          <i className="fa-solid fa-arrow-right text-[#0a7485]"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
