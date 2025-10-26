import HeroBanner from "../components/HeroBanner";
import FlashSales from "../components/FlashSales";
import BestSelling from "../components/BestSelling";
import ExploreOurProducts from "../components/ExploreOurProducts";
import Categories from "../components/Categories";
import FeaturedSection from "../components/FeaturedSection";
import Enhancemusic from "../components/Enhancemusic";
import Delivery from "../components/Delivery";

export default function App() {
  return (
    <div className="mx-auto container">
      <HeroBanner />
      <FlashSales />
      <Categories />
      <BestSelling />
      <Enhancemusic />
      <ExploreOurProducts />
      <FeaturedSection />
      <Delivery />
    </div>
  );
}
