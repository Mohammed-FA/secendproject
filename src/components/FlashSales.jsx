import React, { useEffect, useState } from "react";

import Slider from "./comment/Slider";
import Button from "./comment/Button";
import { Product, ProductSkeleton } from "./comment/Product";
import Title from "./comment/Title";
import { GetProductsPagination } from "../api/Product/product";
function Number({ text, number }) {
  return (
    <div>
      <p className="md:text-sm text-[10px] font-medium">{text}</p>
      <h1 className="xxsm:font-bold font-medium">{number}</h1>
    </div>
  );
}

function FlashSales() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await GetProductsPagination(0, 6);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Title label="Today’s" />
      <Slider
        className="md:mt-10 mt-3 "
        type="product"
        titlecontaint={
          <div className="xxsm:flex-nowrap flex-wrap md:w-3/5 w-full flex justify-between items-center md:items-end">
            <h1 className="font-semibold">Flash Sales</h1>
            <div className="flex gap-2 flex-wrap items-end">
              <Number number="03" text="Day" />
              <h1 className="font-medium text-primary">:</h1>
              <Number number="23" text="Hours" />
              <h1 className="font-medium text-primary">:</h1>
              <Number number="19" text="Minutes" />
              <h1 className="font-medium text-primary">:</h1>
              <Number number="56" text="Seconds" />
            </div>
          </div>
        }
        slidesPerView={4}
      >
        {loading
          ? [...Array(4)].map((item, index) => <ProductSkeleton key={index} />)
          : products.map((item) => <Product key={item.id} {...item} />)}
      </Slider>
      <div className="flex justify-center items-center py-10 border-b border-gray-300">
        <Button className="rounded-md text-xs" size="lg">
          View All Product
        </Button>
      </div>
    </>
  );
}

export default FlashSales;
