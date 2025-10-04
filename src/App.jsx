import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import FlashSales from "./components/FlashSales";
import BestSelling from "./components/BestSelling";
import ExploreOurProducts from "./components/ExploreOurProducts";
import Categories from "./components/Categories";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import Enhancemusic from "./components/Enhancemusic";
import Delivery from "./components/Delivery";
import { useEffect, useState } from "react";
import Loading from "./components/comment/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <div className="font-sans bg-white">
      <Navbar />

      {loading && <Loading />}
      <main className="w-full">
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
      </main>

      <Footer />
    </div>
  );
}
