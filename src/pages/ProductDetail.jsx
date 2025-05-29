
import { WhyUs } from "../components/section/Shared/WhyUs";
import { YourselfSection } from "../components/Home/YourselfSection";
import { BestSellersSection } from "../components/Home/BestSellersSection";
import { DirectTrade } from "../components/section/Shared/DirectTrade";
import { CustomerReviews } from "../components/section/Shared/CustomerReviews";
import { RobustaBenefits } from "../components/Home/RobustaBenefits";
import { VietnamesePhinSection } from "../components/section/Shared/VietnamesePhinSection";
import { News } from "../components/Home/News";
import { Detail } from "../components/ProductDetail/Detail";

const ProductDetail = () => {
  return (
    <>
      <Detail />
      <BestSellersSection />
      <WhyUs />
      <YourselfSection />

      <CustomerReviews />
    </>
  );
};
export default ProductDetail;
