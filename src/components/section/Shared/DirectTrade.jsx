export const DirectTrade = () => {
  const mobileSections = [
    {
      img: "https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade1.png?v=1699771101",
      className: "w-[227px] mx-auto",
      text: `What makes us really stand out? We're all about ensuring our
        amazing farmers in Vietnam get a fair deal for their hard work,
        paying significantly over market to ensure the best quality coffee
        and a sustainable future`,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade2.png",
      className: "w-[260px]",
      text: "Once picked, coffee cherries are processed and packed for a sea adventure",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade3.png",
      className: "w-[340px] ml-auto",
      text: `At the core of direct trade is simplicity and transparency. By
        managing the supply chain and logistics ourselves, we ensure more
        goes directly to the farmers so they earn a sustainable wage`,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade4.png",
      className: "w-[329px]",
      text: "We're brewing positive change in coffee villages and their communities",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade6.webp",
      className: "w-[279px] ml-auto",
      text: "Elevating farmers' livelihoods",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade5.png",
      className: "w-[310px]",
      text: "Bringing you the freshest and finest coffee",
    },
  ];

  return (
    <section className="container mx-auto text-[#0a7485] px-4 md:px-6 lg:px-0">
      <div className="max-w-[1080px] mx-auto text-center m-2">
        <p className="font-bold text-title uppercase lg:px-8">
          WHAT DOES "DIRECT TRADE" COFFEE MEAN WITH MAY COFFEE CREW
        </p>
        <p className="mt-3 lg:mt-6 text-body m-4">
          What is the process of direct trade, and how is it permitting us to
          receive and sell premium coffee beans? Most importantly, how are the
          farms positively benefiting from the direct trade process?
        </p>
      </div>

      <div className="mt-6 lg:mt-10 text-body">
        <img
          loading="eager"
          className="hidden lg:block w-full"
          src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/directtrade.webp?v=1699150985"
          alt="Direct Trade Overview"
        />

        <div className="lg:hidden flex flex-col text-center m-4">
          {mobileSections.map((item, index) => (
            <div key={index}>
              <img
                loading="eager"
                className={item.className}
                src={item.img}
                alt=""
              />
              <p className="mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
