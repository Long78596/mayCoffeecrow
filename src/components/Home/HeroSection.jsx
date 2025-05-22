export const HeroSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#fee7d8] rounded-lg flex flex-col-reverse lg:flex-row gap-6 lg:gap-10">
        {/* Left content */}
        <div className="flex flex-col justify-center gap-2  lg:px-8 lg:w-[495px] m-2">
          <p className="font-bold  md:text-xl lg:text-xl text-[#0a7485]">
            🔥 STRONG. BOLD. SMOOTH. 🔥
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a7485]">
            <strong>Supercharged with Natural Caffeine Iced Coffee</strong>
          </p>
          <p className="text-base md:text-xl lg:text-2xl text-[#0a7485]">
            Powered by premium Vietnamese Robusta beans,
            <span className="font-bold">
              {" "}
              each can delivers the kick of three energy drinks
            </span>
            . Smooth, rich, and crafted to fuel your hustle, this is no ordinary
            pick-me-up.
          </p>
          <p className="text-base md:text-xl lg:text-2xl text-[#0a7485]">
            Why settle for three when one does it all? Save money, boost your
            energy, and crush your day.
          </p>
          <div>
            <a>
              <button className="rounded-full text-white bg-[#0a7485] px-6 md:px-10 lg:px-12 py-2 font-medium uppercase hover:brightness-125 cursor-pointer">
                Shop Now
              </button>
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full flex justify-center items-center p-3 lg:p-8">
          <img
            loading="eager"
            className="w-[80%] h-auto max-w-md lg:max-w-full"
            src="//maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1746788103"
            alt="Iced Coffee"
          />
        </div>
      </div>
    </div>
  );
};
