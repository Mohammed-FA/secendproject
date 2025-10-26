import axios from "axios";
import { baseurl, url } from "./api";

export async function AddProductToCart(productid) {
  const token = localStorage.getItem("token");
  return await axios.post(
    `${baseurl}/${url.CART}/add?productId=${productid}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
}

export async function GetMyCart() {
  const token = localStorage.getItem("token");
  if (token) {
    return await axios.get(`${baseurl}/${url.CART}/my-cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
}
export async function UpdateCart(cartItems) {
  const token = localStorage.getItem("token");

  await axios.post(`${baseurl}/${url.CART}/update-cart`, cartItems, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
