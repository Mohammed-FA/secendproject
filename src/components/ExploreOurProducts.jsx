import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import cartImg from "../assets/4.png";
import { Product } from "./comment/Product";

import Slider from "./comment/Slider";
import Button from "./comment/Button";
import Title from "./comment/Title";

const products = [
  {
    id: 1,
    discount: 40,
    image: img1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    discount: 35,
    image: img2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
    color: [
      {
        color: "red",
        img: img2,
      },
      {
        color: "blue",
        img: img1,
      },
    ],
  },
  {
    id: 3,
    discount: 30,
    image: img3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 4,
    reviews: 99,
  },
  {
    id: 4,
    discount: 25,
    image: img4,
    title: "S-Series Comfort Chair",
    price: 375,
    rating: 5,
    reviews: 99,
  },
  {
    id: 5,
    discount: 20,
    image: cartImg,
    title: "Cart with Buy",
    price: 220,
    rating: 4,
    reviews: 50,
  },
  {
    id: 9,
    discount: 40,
    image: img1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    rating: 5,
    reviews: 88,
  },
  {
    id: 7,
    discount: 35,
    image: img2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    rating: 4,
    reviews: 75,
  },
  {
    id: 8,
    discount: 30,
    image: img3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    rating: 4,
    reviews: 99,
  },
  {
    id: 9,
    discount: 25,
    image: img4,
    title: "S-Series Comfort Chair",
    price: 375,
    rating: 5,
    reviews: 99,
  },
  {
    id: 10,
    discount: 20,
    image: cartImg,
    title: "Cart with Buy",
    price: 220,
    rating: 4,
    reviews: 50,
  },
];
function ExploreOurProducts() {
  return (
    <>
      <div className="mt-[8%] ">
        <Title label="Our Products" />
      </div>
      <Slider
        className="sm:mt-10 mt-3"
        type="product"
        titlecontaint={
          <div className="flex justify-between items-center md:items-end">
            <h1 className="font-semibold">Explore Our Products</h1>
          </div>
        }
        slidesPerView={4}
      >
        {products.reduce((rows, item, index) => {
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
      <div className="flex justify-center items-center py-10 border-b border-gray-300">
        <Button className="rounded-md">View All Product</Button>
      </div>
    </>
  );
}

export default ExploreOurProducts;
