import React from "react";

const reviews = [
  {
    title: "The most amazing coffee",
    content:
      "I recently travelled through Vietnam and was amazed by how delicious the Vietnamese coffee was from the very first cup...",
    name: "James Neilson",
    date: "16/01/24",
    avatar: "", 
  },
  {
    title: "Amazing! Not bitter or sour coffee",
    content:
      "Wow. Absolutely love the chocolate note! Having just had Arabica before, I was a bit hesitant...",
    name: "Daniel",
    date: "22/01/24",
    avatar: "", 
  },
  {
    title: "Something for both of us",
    content: "We tried Honeymoon and Buffalo beans from May Coffee Crew...",
    name: "Sue Lindsay",
    date: "15/03/24",
    avatar: "", 
  },
];

const ReviewCard = ({ title, content, name, date, avatar }) => (
  <div className="border rounded-xl border-[#28707b] text-[#28707b] px-6 py-6 max-w-[390px] min-w-[300px] flex flex-col justify-between bg-white">
    <p className="font-bold text-title">{title}</p>
    <p className="text-body mt-2">{content}</p>
    <div className="mt-4">
      <div className="h-[1px] bg-[#28707b] my-3"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
            {avatar ? <img src={avatar} alt={name} /> : null}
          </div>
          <span className="text-submenu font-bold uppercase">{name}</span>
        </div>
        <div className="rounded-full bg-[#28707b] text-white px-2 text-xs">
          {date}
        </div>
      </div>
    </div>
  </div>
);

export const CustomerReviews = () => {
  return (
    <section
      className=" container mx-auto  lg:py-50 py-15  px-4 md:px-12 bg-cover bg-top md:bg-contain bg-no-repeat "
      style={{
        backgroundImage:
          "url('https://cdn.shopify.com/s/files/1/0611/1956/1867/files/peoplesay_bg.svg?v=1699151935')",
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-title font-bold uppercase text-[#28707b]">
          <strong>Reviews</strong>
        </h2>
      </div>
      <div className="flex overflow-x-auto gap-6 justify-start lg:justify-center">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </section>
  );
};


