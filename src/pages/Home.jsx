import { HeroSection } from "../components/Home/HeroSection";
import { HightSection } from "../components/Home/HightSection";
import { StorySection } from "../components/Home/StorySection";
import { WelcomeCoffeeSection } from "../components/Home/WelcomeToCoffeeSection";
import { CoffeeStorySection } from "../components/Home/CoffeeStorySection";
import  MapSection  from "../components/Home/MapSection";
import { WhyUs } from "../components/Home/WhyUs";
import {YourselfSection} from  "../components/Home/YourselfSection";
import { BestSellersSection } from "../components/Home/BestSellersSection";
import { DirectTrade } from "../components/Home/DirectTrade";
import { CustomerReviews } from "../components/Home/CustomerReviews";
import { RobustaBenefits } from "../components/Home/RobustaBenefits";
import { VietnamesePhinSection } from "../components/Home/VietnamesePhinSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <HightSection />
      <StorySection />
      <WelcomeCoffeeSection />
      <CoffeeStorySection />
      <MapSection />
      <WhyUs />
      <YourselfSection />
      <BestSellersSection />
      <DirectTrade />
      <CustomerReviews />
      <RobustaBenefits />
      <VietnamesePhinSection />
    </>
  );
};
export default Home;
