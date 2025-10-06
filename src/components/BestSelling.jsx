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
    image: img1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    image: img2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviews: 65,
  },
  {
    id: 3,
    image: img3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    rating: 4,
    reviews: 65,
  },
  {
    id: 4,
    image: img4,
    title: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    rating: 5,
    reviews: 65,
  },
];
function BestSelling() {
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
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default BestSelling;
