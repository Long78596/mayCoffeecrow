import { Link } from "react-router-dom";

export const StorySection = () => {
  return (
    <section className="mt-10">
      {/* Desktop view */}
      <div
        className="hidden lg:block bg-[#90e9f6] bg-no-repeat bg-top bg-cover lg:bg-contain bg-primary-300 pt-10 lg:py-20"
        style={{
          backgroundImage:
            "url('https://cdn.shopify.com/s/files/1/0611/1956/1867/files/ourstory_cloud.webp?v=1699064890')",
        }}
      >
        <div className="grid container mx-auto relative grid-cols-5 gap-8">
          <div>
            <img
              className="w-full"
              loading="eager"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/mascot.svg"
              alt=""
            />
          </div>
          <div className="text-primary relative col-span-3">
            <img
              className="absolute -left-[5%] z-10"
              loading="eager"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/may_say.svg?v=1699067492"
              alt=""
            />
            <div className="mt-32">
              <p className="pr-[5%] leading-relaxed  text-[#0a7485] text-xl">
                As the first specialty Vietnamese coffee brand from New Zealand,
                <br />
                May Coffee Crew takes pride in showcasing the diversity of
                <br />
                coffee origins and the array of flavours that both robusta and
                <br />
                arabica beans offer. We import through direct-trade with farmers
                <br />
                in Vietnam and we're a Kiwi-Vietnamese family-owned company too.
              </p>
              <p className="mt-4 pr-[30%] leading-relaxed text-xl text-[#0a7485]">
                We are challenging misconceptions about
                <br />
                Vietnamese coffee and the robusta bean,
                <br />
                highlighting robusta's vital role in
                <br />
                mitigating coffee's climate challenges.
                <br />
                Join us on this journey to reshape perceptions!
              </p>
              <div className="pt-8">
                <a href="https://maycoffeecrew.co.nz/pages/about-our-story">
                  <button className="bg-[#153e44] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-sm whitespace-nowrap hover:brightness-125">
                    Our story
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="absolute bottom-0 right-0 min-w-[250%] z-10"
              loading="eager"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/bg_ourstory2.webp?v=1699064773"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden bg-primary-300 pt-10 lg:py-20 relative bg-[#90e9f6]">
        <img
          loading="eager"
          className="absolute top-0 -left-8 h-14 "
          src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/cloud3.webp"
          alt=""
        />

        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <img
            loading="eager"
            className="w-full"
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/justanother.webp?v=1699616398"
            alt=""
          />

          <p className="text-xl leading-relaxed text-[#0a7485]">
            As the first specialty Vietnamese coffee brand from New Zealand, May
            Coffee Crew takes pride in showcasing the diversity of coffee
            origins and the array of flavours that both robusta and arabica
            beans offer. We import through direct-trade with farmers in Vietnam
            and we're a Kiwi-Vietnamese family-owned company too.
          </p>
          <p className="text-xl leading-relaxed text-[#0a7485]">
            We are challenging misconceptions about Vietnamese coffee and the
            robusta bean, highlighting robusta's vital role in mitigating
            coffee's climate challenges. Join us on this journey to reshape
            perceptions!
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="https://maycoffeecrew.co.nz/pages/about-our-story">
              <button className="bg-[#204f56] text-white rounded-full px-4 lg:px-12 py-2 font-medium uppercase text-xl whitespace-nowrap hover:brightness-125">
                Our story
              </button>
            </a>
          </div>
          <div className="relative"></div>
        </div>

        <img
          loading="eager"
          className="w-24 absolute -bottom-3 left-6"
          src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/cloud.webp?v=1699629531"
          alt=""
        />
      </div>
    </section>
  );
};
