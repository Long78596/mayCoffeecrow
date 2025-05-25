import React from "react";

export const BlogPhins = ({ steps = [] }) => {
  return (
    <div className="container-auto lg:max-w-[1024px] px-4 mx-auto">
      <div className="flex flex-col space-y-4 items-center justify-center text-center">
        <span className="uppercase text-h2 font-anton">
          Vietnamese Phin Filter
        </span>
        <div className="flex items-center space-x-2">
          <img
            loading="eager"
            className="h-4 w-4"
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Clock.svg?v=1699975572"
            alt="Clock"
          />
          <span className="text-sm font-medium">5 min prep time</span>
        </div>

        <div className="text-sm space-y-3">
          <p>
            <strong>FUN FACTS ABOUT ME:</strong>
          </p>
          <ul className="list-disc list-inside text-left">
            <li>
              I am a popular coffee brewing tool, imagine if a V60 Pour Over and
              a French Press had a baby!
            </li>
            <li>Eco-friendly with no waste required from paper filters</li>
            <li>Great for travel, light and easy to use</li>
            <li>Medium-fine grind</li>
          </ul>
          <p>
            <strong>Recommended coffee: </strong>
            <a
              href="https://maycoffeecrew.co.nz/products/buffalo"
              className="underline font-semibold"
              title="How to make Vietnamese Iced Coffee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buffalo, get it here
            </a>
          </p>
          <p>
            <em>
              The Robusta beans in this signature blend are indicative of
              Vietnamese coffee culture.
            </em>
          </p>
          <p>
            <strong>Grind size: </strong>Medium-fine grind
          </p>
          <p>
            <em>
              There's no set rule as how to brew your coffee. Try our
              recommended guide below, or freestyle on the water/coffee ratio
              until you find your personal preference.
            </em>
          </p>
        </div>
      </div>

      {/* Brew Guide Section */}
      <div className="mt-5 lg:mt-10 bg-neutral-100 rounded-xl md:px-5 py-14 flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* Sidebar */}
        <div className="lg:w-[360px] lg:sticky top-40 bg-secondary rounded-xl p-4 h-fit">
          <div className="flex gap-4 relative h-[150px]">
            <div className="flex justify-center items-center">
              <span className="text-4xl font-bold uppercase leading-9">
                What you'll need
              </span>
            </div>
            <div className="w-[150px]">
              <img
                loading="eager"
                className="w-[150px] absolute -top-12 right-0"
                src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/Group_552.svg?v=1699454706"
                alt="Decor"
              />
            </div>
          </div>
          <ul className="mt-4 text-sm list-disc px-4">
            <li>Single serve recipe below:</li>
            <li>1:5 Coffee to Water (eg: 20gr coffee to 100ml water)</li>
            <li>2 Tbsp of Robusta coffee</li>
            <li>Vietnamese Iced Coffee recipe:</li>
            <li>2 Tbsp Condensed Milk</li>
            <li>Ice cubes</li>
          </ul>
        </div>

        {/* Steps */}
        <div className="flex-1 w-full flex flex-col space-y-5 lg:space-y-10">
          {steps.map((step, index) => (
            <div className="flex space-x-4" key={index}>
              <div className="relative">
                <div className="rounded-full w-8 h-8 md:w-12 md:h-12 bg-primary text-white flex justify-center items-center">
                  {step.number}
                </div>
                {!step.isLast && (
                  <div className="h-full w-[1px] bg-primary absolute left-1/2 -translate-x-1/2 top-8 md:top-12 z-[0]" />
                )}
              </div>
              <div className="flex flex-col space-y-4">
                <div
                  className="w-full h-[153px] md:h-[225px] bg-center bg-cover bg-no-repeat rounded-xl overflow-hidden"
                  style={{ backgroundImage: `url(${step.image})` }}
                />
                <p className="font-semibold">Step {step.number}</p>
                <p className="text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
