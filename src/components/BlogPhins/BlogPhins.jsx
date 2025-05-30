import React from "react";
const steps = [
  {
    step: 1,
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/Boiling_water.jpg?v=1701336536&width=700",
    title: "Step 1",
    description: "Heat your water to around (90℃) - just below boiling",
  },
  {
    step: 2,
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/How_to_use_phin_filter_1.jpg?v=1706492501&width=700",
    title: "Step 2",
    description:
      "Set up your filter plate on a mug and place the chamber on top of the filter plate",
  },
  {
    step: 3,
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/How_to_use_phin_filter_2.jpg?v=1706492571&width=700",
    title: "Step 3",
    description:
      "Add 2 Tbsp of medium-fine ground coffee into the brewing chamber, lightly shake the chamber",
  },
  {
    step: 4,
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/How_to_use_phin_filter_3.jpg?v=1706492815&width=700",
    title: "Step 4",
    description:
      "Place the filter insert on top of the coffee grounds (no pressing needed)",
  },
  {
    step: 5,
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/How_to_use_phin_filter_4.jpg?v=1706492881&width=700",
    title: "Step 5",
    description:
      'Add about 20ml of hot water on top of the filter, let it "bloom" for 30 seconds',
  },
  {
    step: 6,
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/How_to_use_phin_filter_5.jpg?v=1706492950&width=700",
    title: "Step 6",
    description:
      "Slowly fill the chamber with hot water, leaving room for the lid. Pop the lid on and LET IT SLOWLY DRIP! (4-5 mins)",
  },
  {
    step: 7,
    image:
      "//maycoffeecrew.co.nz/cdn/shop/files/step_7.jpg?v=1707733587&width=700",
    title: "Step 7",
    description:
      "For Vietnamese Iced Coffee recipe: Adding 2 Tbsp condensed milk (single serve), stir well. Fill your glass with ice cubes. Have a sweet tooth? Double the condensed milk. Enjoy!",
  },
];

export const BlogPhins = () => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-[#0a7485] lg:max-w-[1024px]">
        <div className="flex flex-col space-y-2 items-center justify-center text-xl py-2">
          <span className="uppercase text-2xl font-bold py-2">
            <strong> Vietnamese Phin Filter</strong>
          </span>
          <div className="flex items-center space-x-2 py-2">
            <img
              loading="eager"
              className="h-4 w-4"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Clock.svg?v=1699975572"
              alt=""
            />

            <span className="text-xl font-medium">5 min prep time</span>
          </div>

          <p className="text-center"></p>
          <p className="py-2">
            <strong>FUN FACTS ABOUT ME:</strong>
          </p>
          <ul className="py-2 list-disc">
            <li>
              I am a popular coffee brewing tool, imagine if a V60 Pour Over and
              a French Press had a baby!
            </li>
            <li>Eco-friendly with no waste required from paper filters</li>
            <li>Great for travel, light and easy to use</li>
            <li>Medium-fine grind&nbsp;</li>
          </ul>
          <p className="p1" data-mce-fragment="1">
            <span className="s1" data-mce-fragment="1">
              <b data-mce-fragment="1">
                Recommended coffee:&nbsp;
                <a
                  href="https://maycoffeecrew.co.nz/products/buffalo"
                  title="How to make Vietnamese Iced Coffee"
                >
                  Buffalo,
                  <span className="text-decoration: underline;">
                    {" "}
                    get it here
                  </span>
                </a>
              </b>
            </span>
          </p>
          <p className="p1" data-mce-fragment="1">
            <em data-mce-fragment="1">
              <span className="s1" data-mce-fragment="1">
                The Robusta beans in this signature
                blend&nbsp;are&nbsp;indicative of&nbsp;Vietnamese coffee
                culture.
              </span>
            </em>
          </p>
          <p className="p1" data-mce-fragment="1">
            <span className="s1" data-mce-fragment="1">
              <b data-mce-fragment="1">Grind size:&nbsp;</b>
            </span>
            Medium-fine grind&nbsp;
          </p>
          <ol data-mce-fragment="1"></ol>
          <p data-mce-fragment="1">
            <em data-mce-fragment="1">
              There's no&nbsp;set rule&nbsp;as how to brew your coffee. Try our
              recommended guide&nbsp;below, or freestyle on the water / coffee
              ratio until you find your&nbsp;personal preference&nbsp;
            </em>
          </p>
          <p></p>
        </div>
        <div className="mt-5 lg:mt-10 bg-neutral-100 rounded-xl md:px-5 py-14 flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="lg:w-[360px] lg:sticky top-40 bg-amber-600 rounded-xl p-4 h-fit">
            <div className="flex gap-4 relative h-[150px] text-xl">
              <div className="flex justify-center items-center">
                <span className="text-4xl font-bold  uppercase leading-9">
                  What you'll need
                </span>
              </div>
              <div className="w-[150px] ">
                <img
                  loading="eager"
                  className="w-[150px] absolute -top-12 right-0"
                  width=""
                  height=""
                  src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Group_552.svg?v=1699454706"
                  alt=""
                />
              </div>
            </div>
            <ul className="mt-4 text-xl list-disc px-4">
              <li>Single serve recipe below:</li>

              <li>1:5 Coffee to Water (eg: 20gr coffee to 100ml water)</li>

              <li>2 Tbsp of Robusta coffee</li>

              <li>Vietnamese Iced Coffee recipe:</li>

              <li>2Tbsp Condensed Milk</li>

              <li>Ice cubes</li>
            </ul>
          </div>
          <div className="flex-1 w-full flex flex-col space-y-5 lg:space-y-10">
            {steps.map((item, index) => (
              <div className="flex space-x-4" key={index}>
                <div className="relative">
                  <div className="rounded-full w-8 h-8 md:w-12 md:h-12 bg-[#0a7485] text-white flex justify-center items-center">
                    {item.step}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="h-full w-[1px] bg-[#0a7485] absolute left-1/2  top-8 md:top-12 z-[0]"></div>
                  )}
                </div>
                <div className="flex flex-col space-y-4">
                  <div
                    className="w-full h-[153px] md:h-[225px]  bg-center bg-cover bg-no-repeat rounded-xl overflow-hidden"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  ></div>
                  <p className="font-bold text-xl">{item.title}</p>
                  <p className="text-xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
