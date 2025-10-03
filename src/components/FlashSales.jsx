import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import cartImg from "../assets/4.png";
import Slider from "./comment/Slider";
import Button from "./comment/Button";
import { Product } from "./comment/Product";
import Title from "./comment/Title";
function Number({ text, number }) {
  return (
    <div>
      <p className="md:text-sm text-[10px] font-medium">{text}</p>
      <h1 className="xxsm:font-bold font-medium">{number}</h1>
    </div>
  );
}

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
  {
    id: 5,
    discount: 20,
    image: cartImg,
    title: "Cart with Buy",
    price: 220,
    oldPrice: 275,
    rating: 4,
    reviews: 50,
  },
];
function FlashSales() {
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
        {products.map((item) => (
          <Product key={item.id} {...item} />
        ))}
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
