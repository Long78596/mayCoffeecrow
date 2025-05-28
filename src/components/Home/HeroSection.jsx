import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-0">
      <div className="bg-[#fee7d8] rounded-lg flex flex-col-reverse lg:flex-row  lg:px-10 lg:py-10  px-6 py-6 gap-4 lg:gap-10 ">
        {/* Left content */}
        <div className="flex flex-col justify-center gap-2   lg:w-[495px] lg:gap-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-10">
          <p className="font-bold  lg:text-2xl text-[18px] pb-2 text-[#0a7485]">
            🔥 STRONG. BOLD. SMOOTH. 🔥
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a7485] pb-4">
            <strong>Supercharged with Natural Caffeine Iced Coffee</strong>
          </p>
          <p className=" text-2xl text-[#0a7485] pb-4">
            Powered by premium Vietnamese Robusta beans,
            <span className="font-bold pb-4 text-2xl">
              {" "}
              each can delivers the kick of three energy drinks
            </span>
            . Smooth, rich, and crafted to fuel your hustle, this is no ordinary
            pick-me-up.
          </p>
          <p className="text-2xl md:text-body lg:text-submenu text-[#0a7485] pb-4">
            Why settle for three when one does it all? Save money, boost your
            energy, and crush your day.
          </p>
          <p className="text-2xl italic text-[#0a7485] pb-4">
            <strong>*Disclaimer:</strong> A standard 250ml energy drink contains
            about 80mg caffeine.
          </p>
          <div className="pb-2">
            <Link to="#">
              <button className="rounded-full text-white bg-[#0a7485] px-6 md:px-10 lg:px-12 py-2 font-medium uppercase hover:brightness-125 cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full flex flex-1 justify-center items-center ">
          <img
            loading="eager"
            className="w-full lg:h-[90%] lg:w-[80%]"
            src="https://maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1746788103&width=1000"
            alt="Iced Coffee"
          />
        </div>
      </div>
    </div>
  );
};
