const features = [
  {
    title: "Cultural Celebration",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_5.svg?v=1700067046&width=100",
    desc: "Join us in celebrating diversity and unity through the joy of coffee, blending the rich flavors of Vietnam with the Kiwi spirit.",
  },
  {
    title: "Daring to Be Different",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_8.svg?v=1700067046&width=100",
    desc: "Challenge stereotypes surrounding Vietnamese coffee. Uncover the untold story of hardworking farmers and innovative approaches that create exceptional coffee.",
  },
  {
    title: "A Family of Flavours",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_4.svg?v=1700067047&width=100",
    desc: "Indulge in a symphony of coffee flavors – delicate Arabica and robust Robusta. Each sip is a journey through diverse lands and tastes.",
  },
  {
    title: "Sustainable Sips",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_2.svg?v=1700067047&width=100",
    desc: "By choosing us, you're not just enjoying great coffee; you're supporting farmers who champion sustainable practices, creating a positive impact on communities and the environment.",
  },
  {
    title: "Exclusive Perks",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_3.svg?v=1700067046&width=100",
    desc: "Enjoy special rates and discounts when you become a part of the May Coffee Crew. Your cup of coffee becomes a gateway to savings and supporting a cause.",
  },
  {
    title: "Empowering Robusta",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_1.svg?v=1700067046&width=100",
    desc: "Discover the strength of Robusta coffee, a key player in the fight against climate challenges. Your choice helps secure coffee's future.",
  },
  {
    title: "Beyond Coffee",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_7.svg?v=1700067046&width=100",
    desc: "Our mission extends beyond the cup. We forge direct trade relationships, fostering transparency and fair pricing, enriching lives of farmers and communities.",
  },
  {
    title: "Join the Movement",
    img: "//maycoffeecrew.co.nz/cdn/shop/files/wholesale_why_6.svg?v=1700067047&width=100",
    desc: "Be a part of a movement that transcends borders and expectations. Embrace Vietnamese coffee and change lives one cup at a time.",
  },
];

export const Wholesales = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-0 max-w-3xl mx-auto text-[#0a7485]">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-anton text-center uppercase text-[#0a7485]">
        <strong> WHOLESALE</strong>
      </p>
      <p className="text-center mt-2 text-sm sm:text-base">
        Explore Wholesale Opportunities and Grow Together.
      </p>

      <form
        method="post"
        action="/contact#ContactForm"
        id="ContactForm"
        acceptCharset="UTF-8"
        className="mt-8 bg-neutral-50 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col gap-4"
      >
        <input type="hidden" name="form_type" value="contact" />
        <input type="hidden" name="utf8" value="✓" />

        <p className="font-semibold text-sm sm:text-base">
          Choose inquiry type:
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {["Restaurant", "Cafe", "Bakery", "Office", "Retailer"].map(
            (type) => (
              <label key={type} className="flex items-center space-x-1">
                <input type="radio" name="contact[Inquiry]" value={type} />
                <span className="text-sm">{type}</span>
              </label>
            )
          )}
        </div>

        <input
          className="form-field border-[#0a7485]  border rounded-2xl p-2"
          type="text"
          name="contact[name]"
          placeholder="Your name*"
          required
          autoComplete="name"
        />

        <input
          className="form-field border-[#0a7485]  border rounded-2xl p-2"
          type="email"
          name="contact[email]"
          placeholder="Email*"
          required
          autoComplete="email"
          spellCheck="false"
          autoCapitalize="off"
        />

        <input
          className="form-field border-[#0a7485]  border rounded-2xl p-2"
          type="tel"
          name="contact[phone]"
          placeholder="Phone*"
          required
          autoComplete="tel"
          pattern="[0-9\-]*"
        />

        <textarea
          className="form-field border-[#0a7485]  border rounded-2xl p-3"
          name="contact[Comment]"
          placeholder="Comment"
          rows="6"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#0a7485] text-white rounded-full px-6 sm:px-10 py-2 font-medium uppercase text-sm hover:brightness-110 transition-all"
          >
            Submit
          </button>
        </div>
      </form>
      <section className="">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-title sm:text-3xl lg:text-4xl font-anton uppercase">
            <strong>Why Should You Partner With Us</strong>
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#fdfca2] py-10 px-4 flex flex-col items-center space-y-4 max-w-xs w-full min-h-full"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <p className="font-semibold uppercase text-center text-sm sm:text-base">
                  {item.title}
                </p>
                <p className="text-center text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <img
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/wholesale_f2.svg?v=1700067416"
            alt=""
            className="hidden lg:block w-24 h-auto"
          />

          <div className="bg-[#fbc9ca] text-[#893f98] rounded-xl px-6 py-8 flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
            <p className="uppercase font-semibold text-xl min-w-fit">
              Your Cup
              <br />
              Your Choice
            </p>
            <p className="text-sm max-w-md">
              Every sip tells a story of empowerment, innovation, and positive
              change. Choose May Coffee Crew and be a catalyst for transforming
              coffee into a force for good.
            </p>
          </div>

          <img
            src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/wholesale_f1.svg?v=1700067416"
            alt=""
            className="hidden lg:block w-24 h-auto"
          />
        </div>
      </section>
    </div>
  );
};
