import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {Link} from "react-router-dom";
import { Sliders } from "lucide-react";


const slides = [
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/articles/World_Coffee_Map.jpg?v=1707475411&amp;width=500",
    text: " A global Tour Of Coffee...",
    date: "10 FEBRUARY 2024",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/articles/World_Coffee_Map.jpg?v=1707475411&amp;width=500",
    text: " A global Tour Of Coffee...",
    date: "10 FEBRUARY 2024",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/articles/World_Coffee_Map.jpg?v=1707475411&amp;width=500",
    text: " A global Tour Of Coffee...",
    date: "10 FEBRUARY 2024",
  },
];
export const News = () => {
  return (
    <section className="container mx-auto mt-10 lg:mt-20">
      <p className="text-[#28707b] text-4xl text-bold uppercase text-center justify-center hover:underline">
        <strong> READ OUR LATEST NEWS</strong>
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
              <div className="min-w-[335px] justify-center items-center ">
                <img src={slide.img} alt="" />
                <p className="text-[#0a7485] text-center mt-4 lg:mt-10"></p>
                <p className="text-body text-[#28707b] text-center">
                  {" "}
                  {slide.date}
                </p>
                <p className="text-title font-bold text-[#28707b] text-center">
                  {slide.text}
                </p>
              </div>

              <div className="flex justify-center mt-6">
                <Link to="#">
                  <button className="bg-[#0a7485] cursor-pointer text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm hover:brightness-125">
                    READ MORE
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
