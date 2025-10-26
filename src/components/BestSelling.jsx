import React, { useEffect, useState } from "react";

import { Product, ProductSkeleton } from "./comment/Product";
import Title from "./comment/Title";
import Button from "./comment/Button";
import { GetProductsPagination } from "../api/Product/product";

function BestSelling() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await GetProductsPagination(5, 9);
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
    <section className="lg:pb-10 md:pb-4 pb-3">
      <Title label="This Month" />
      <div className="flex justify-between md:flex-nowrap flex-wrap items-end">
        <div className="xxs:flex-row gap-3 flex-col mt-3 w-full flex justify-between items-center md:items-end">
          <h1 className="font-semibold">Best Selling Products</h1>
          <div>
            <Button size="lg" className="text-xs ">
              View All
            </Button>
          </div>
        </div>
      </div>
      <div className="grid xxs:grid-cols-2 md:mt-10 mt-3  gap-5 sm:grid-cols-3 lg:grid-cols-4 ">
        {loading
          ? [...Array(4)].map((item, index) => <ProductSkeleton key={index} />)
          : products.map((item) => <Product key={item.id} {...item} />)}
      </div>
    </section>
  );
}

export default BestSelling;
