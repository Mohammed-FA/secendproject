import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import FlashSales from "./components/FlashSales";
import BestSelling from "./components/BestSelling";
import ExploreOurProducts from "./components/ExploreOurProducts";
import Categories from "./components/Categories";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import Enhancemusic from "./components/Enhancemusic";
import FeatureSection from "./components/FeatureSection";
import Calcalete from "./components/ex/Calcalete";

export default function App() {
  return (
    <div className="font-sans bg-white">
      {/* <Navbar /> */}

      <main className="w-full">
        <div className="mx-auto container">
          <Calcalete />
          {/* <HeroBanner />
          <FlashSales />
          <Categories />
          <Enhancemusic />
          <BestSelling />
          <ExploreOurProducts />
          <FeaturedSection /> */}
          {/* <FeatureSection /> */}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
