import React, { useContext, useEffect, useState } from "react";
import Button from "../components/comment/Button";
import Input from "../components/comment/Input";
import CenterElement from "../components/comment/CenterElement";

import { GetMyCart, UpdateCart } from "../api/addtoCart";
import { AuthContext } from "../Context/AuthContext";
import ToastContainer from "../components/comment/ToastContainer";
import { useNavigate } from "react-router-dom";
import BottonLoading from "../components/comment/BottonLoading";
export default function CartPage() {
  const [loading, setLoading] = useState(true);
  const [loding2, setLoading2] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { setCarcount, setToasts, removeToast } = useContext(AuthContext);
  const navigator = useNavigate();

  useEffect(() => {
    let ignor = false;
    const fetchData = async () => {
      try {
        const response = await GetMyCart();
        if (!ignor) setCartItems(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      ignor = true;
    };
  }, []);
  const updateQuantity = (id, count) => {
    console.log(count);
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: parseInt(count) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const UpdateCartitems = async () => {
    try {
      setLoading2(true);
      await UpdateCart(cartItems);
      const count = cartItems.reduce((acc, item) => acc + item.count, 0);
      setCarcount(count);
      alert("Update Sucsusfully ✅");
    } catch {
      navigator("/login");
    } finally {
      setLoading2(false);
    }
  };
  const alert = (message) => {
    const id = Date.now();
    const newToast = { id, message };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => removeToast(id), 5000);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-5 lg:px-20">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-10 py-5 overflow-x-auto">
          <div className="grid grid-cols-5  text-black/80  p-5 bg-white shadow  px-9 min-w-4xl  rounded-md">
            <span className="col-span-2">Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span className="text-right">Subtotal</span>
          </div>
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : cartItems.length == 0 ? (
            <p className="text-center">No items in the Cart</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 items-center bg-white shadow rounded-md p-4 px-9 min-w-4xl"
              >
                <div className="flex items-center gap-4 relative  col-span-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm absolute top-1 -left-2"
                  >
                    ×
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-medium">{item.name}</span>
                </div>

                <div className="text-gray-700">${item.price}</div>

                <div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 text-center border rounded-md py-1"
                      min="1"
                    />
                  </div>
                </div>

                <div className="text-right font-semibold">
                  ${item.price * item.count}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-between mt-8 xxs:flex-row flex-col gap-3">
          <Button
            variant="outlineBlack"
            onClick={() => navigator("/")}
            size="lg"
            className=" font-normal md:text-base sm:text-sm text-xs "
          >
            Return To Shop
          </Button>
          <Button
            disabled={loding2}
            onClick={UpdateCartitems}
            variant="outlineBlack"
            size="lg"
            className="md:text-base sm:text-sm text-xs font-normal"
          >
            {loading ? <BottonLoading /> : "Update Cart"}
          </Button>
        </div>

        <div className="mt-10 flex flex-col toptablet:flex-row justify-between lg:gap-10 md:gap-7 sm:gap-5 gap-3">
          <div className="flex sm:gap-4 xxs:flex-row flex-col gap-2 lg:w-3/5 toptablet:w-2/3 w-full">
            <Input
              type="text"
              placeholder="Coupon Code"
              className="border  !border-black xxs:w-full  rounded-md sm:text-sm text-xs md:text-base !py-3 "
            />
            <Button className="lg:w-1/2 xxs:w-3/5 h-fit !font-light sm:text-sm text-xs rounded-md  md:text-base py-3">
              Apply Coupon
            </Button>
          </div>

          <div className="border border-black  flex flex-col gap-2.5 sm:text-base text-sm rounded-md md:p-6 p-3 toptablet:w-1/2 w-full  lg:w-1/3">
            <h2 className="sm:text-lg text-base font-semibold ">Cart Total</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-2 ">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <CenterElement>
              <Button
                size="lg"
                onClick={() => {
                  navigator("/checkoutPage");

                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className="rounded-md !font-light text-sm"
              >
                Proceed to Checkout
              </Button>
            </CenterElement>
          </div>
        </div>
      </div>
    </div>
  );
}
