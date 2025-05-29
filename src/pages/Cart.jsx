import { ListCart } from "../components/Cart/ListCart";
import { Banner } from "../components/section/Shared/Banner";

import { WhyUs } from "../components/section/Shared/WhyUs";
import { YourselfSection } from "../components/Home/YourselfSection";
import { BestSellersSection } from "../components/Home/BestSellersSection";
import { CustomerReviews } from "../components/section/Shared/CustomerReviews";
export const Cart = () => {
  return (
    <>
      <section>
        <Banner />
        <ListCart />
        <BestSellersSection />
              <WhyUs />
              <YourselfSection />
        
              <CustomerReviews />
      </section>
    </>
  );
};
