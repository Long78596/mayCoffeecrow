import React from "react";

const benefits = [
  {
    title: "2X MORE CAFFEINE",
    description:
      "Robusta coffee delivers real energy without the jitters. Plus, save money by drinking less!",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Layer_1.svg?v=1699451359",
  },
  {
    title: "60% LESS SUGARS",
    description: "Giving robusta beans the bold flavor profile we love.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Group_190.svg?v=1699451359",
  },
  {
    title: "MORE ANTIOXIDANTS",
    description:
      "Robusta coffee has up to 80% more antioxidants than arabica beans.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Group_70.svg?v=1699451359",
  },
  {
    title: "MORE RESISTANT",
    description: "Robust and thriving through climate change.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Isolation_Mode.svg?v=1699451359",
  },
  {
    title: "BOLD & SMOOTH",
    description: "Strong and chocolatey flavour profile, low acidity.",
    image:
      "https://maycoffeecrew.co.nz/cdn/shop/files/Layer_1_1.svg?v=1699451359",
  },
];

export const   RobustaBenefits = () => {
  return (
    <section className="container mx-auto  ">
      <div className="text-[#0a7485] text-center px-4 py-8">
        <h2 className="lg:text-title md:text-submenu text-xl uppercase font-bold mb-8">
          Elevate the familiar flavour with our premium Robusta beans
        </h2>
        <div className="flex flex-wrap gap-4 justify-center xl:justify-between">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-xl border-[#0a7485]/60 p-4 w-[160px] md:w-[250px] max-w-[200px]"
            >
              <img src={item.image} alt={item.title} className="h-10 w-auto" />
              <p className="mt-4 uppercase font-bold">{item.title}</p>
              <p className="mt-1 text-sm text-[#0a7485]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
