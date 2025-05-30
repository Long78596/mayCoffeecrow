import {BlogPhins} from "../components/BlogPhins/BlogPhins"

import { WhyUs } from "../components/section/Shared/WhyUs";
import { YourselfSection } from "../components/Home/YourselfSection";
import { BestSellersSection } from "../components/Home/BestSellersSection";
import { CustomerReviews } from "../components/section/Shared/CustomerReviews";

const BlogPhin = () => {
  return <>
   <BlogPhins />
    <BestSellersSection />
                 <WhyUs />
                 <YourselfSection />
           
                 <CustomerReviews />
  </>;
};
export default BlogPhin;
