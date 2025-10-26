import React, { useEffect, useState } from "react";

import { Product, ProductSkeleton } from "./comment/Product";

import Slider from "./comment/Slider";
import Button from "./comment/Button";
import Title from "./comment/Title";
import { GetProductsPagination } from "../api/Product/product";

function ExploreOurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await GetProductsPagination(7, 17);
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
      <Title label="Our Products" />
      <Slider
        className="sm:mt-10 mt-3 "
        type="product"
        titlecontaint={
          <div className="flex justify-between items-center md:items-end">
            <h1 className="font-semibold">Explore Our Products</h1>
          </div>
        }
        slidesPerView={4}
      >
        {loading
          ? [...Array(8)].reduce((rows, item, index) => {
              if (index % 2 === 0) {
                rows.push(
                  <div key={index} className="flex flex-col gap-5">
                    <ProductSkeleton />
                    <ProductSkeleton />
                  </div>
                );
              }
              return rows;
            }, [])
          : products.reduce((rows, item, index) => {
              if (index % 2 === 0) {
                rows.push(
                  <div key={index} className="flex flex-col gap-5">
                    <Product typeTow {...products[index]} />
                    {products[index + 1] && (
                      <Product typeTow {...products[index + 1]} />
                    )}
                  </div>
                );
              }
              return rows;
            }, [])}
      </Slider>
      <div className="flex justify-center items-center py-10 ">
        <Button className="rounded-md">View All Product</Button>
      </div>
    </>
  );
}

export default ExploreOurProducts;
