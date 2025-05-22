import { HeroSection } from "../components/Home/HeroSection";
import { HightSection } from "../components/Home/HightSection";
import { StorySection } from "../components/Home/StorySection";
import { WelcomeCoffeeSection } from "../components/Home/WelcomeToCoffeeSection";
import { CoffeeStorySection } from "../components/Home/CoffeeStorySection";
import  MapSection  from "../components/Home/MapSection";
import { WhyUs } from "../components/Home/WhyUs";
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
    </>
  );
};
export default Home;
