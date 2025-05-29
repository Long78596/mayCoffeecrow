import { WhyUs } from "../components/section/Shared/WhyUs";
import { YourselfSection } from "../components/Home/YourselfSection";
import { Banner } from "../components/section/Shared/Banner";
import { ListProduct } from "../components/Collections/ListProducts";
export const Collections = () => {
  return <section>
   <Banner />
   <ListProduct />
    <WhyUs />
    <YourselfSection />
  </section>;
  
};
