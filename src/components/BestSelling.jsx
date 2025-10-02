import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { Product } from "./comment/Product";
import Title from "./comment/Title";
import Button from "./comment/Button";
const products = [
  {
    id: 1,
    discount: 40,
    image: img1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    discount: 35,
    image: img2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    discount: 30,
    image: img3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    discount: 25,
    image: img4,
    title: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 5,
    reviews: 99,
  },
];
function BestSelling() {
  return (
    <section className="mt-[8%] ">
      <div>
        <Title label="This Month" />
      </div>
      <div className="flex justify-between md:flex-nowrap flex-wrap items-end">
        <div className="xxs:flex-row flex-col mt-3 w-full flex justify-between items-center md:items-end">
          <h1 className="font-semibold">Best Selling Products</h1>
          <div>
            <Button size="lg" className="text-xs ">
              View All
            </Button>
          </div>
        </div>
      </div>
      <div className="grid xxs:grid-cols-2 md:mt-10 mt-3  gap-5 sm:grid-cols-3 lg:grid-cols-4 ">
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default BestSelling;
