import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/group_556.webp?v=1699454910&width=700",
    text: "Pour hot water and enjoy the drip-drip magic.",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/group_557.webp?v=1699454910&width=700",
    text: "Personalise your cup with milk, sugar or ice",
  },
  {
    img: "//maycoffeecrew.co.nz/cdn/shop/files/group_555.webp?v=1699454910&width=700",
    text: "Add 2 Tbsp of medium-fine coffee grounds and drop the filter insert.",
  },
];

export const  VietnamesePhinSection = ()=> {
  return (
    <section>
      <div className="container mx-auto mt-10 lg:mt-20 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 max-w-[913px] mx-auto">
          <img
            className="w-[90px] lg:w-[128px]"
            src="//maycoffeecrew.co.nz/cdn/shop/files/Group_552.svg?v=1699454706&width=150"
            alt="Phin Filter Icon"
          />

          <div className="flex flex-col justify-between text-center lg:text-left">
            <p className="text-4xl lg:text-title font-bold uppercase text-[#0a7485]">
              LEARN A NEW BREWING METHOD,
              <br />
              EXPERIMENT WITH THE VIETNAMESE PHIN FILTER
            </p>
            <p className="text-[#0a7485] text-body mt-4 lg:mt-0">
              Nourish your soul amidst the hustle with a mindful, slow-drip
              coffee. Embrace this refreshing coffee experience in a bustling
              world!
            </p>
          </div>
        </div>

        {/* Swiper section */}
        <div className="mt-6 lg:mt-10">
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
                <div className="min-w-[335px]">
                  <img src={slide.img} alt={`Slide ${index + 1}`} />
                  <p className="text-[#0a7485] text-center mt-4 lg:mt-10">
                    {slide.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <Link to="/collections/brew-tools">
            <button className="bg-[#0a7485] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm hover:brightness-125">
              Get your phin filter
            </button>
          </Link>
        </div>
      </div>
    </section>
  
  );
}
