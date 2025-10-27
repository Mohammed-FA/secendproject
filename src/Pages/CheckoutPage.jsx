import React, { useEffect, useState } from "react";
import { GetMyCart } from "../api/addtoCart";
import Button from "../components/comment/Button";
import Input from "../components/comment/Input";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [payment, setPayment] = useState("cash");
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await GetMyCart();
        console.log(res);
        setCart(res.data);
        const total = res.data.reduce(
          (sum, item) => sum + item.price * item.count,
          0
        );
        setSubtotal(total);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCart();
  }, []);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  const formDate = [
    {
      placeholder: "First Name",
      type: "text",
    },

    {
      placeholder: "Company Name",
      type: "text",
    },
    {
      placeholder: "Street Address",
      type: "text",
    },
    {
      placeholder: "Apartment, floor, etc. (optional)",
      type: "text",
    },
    {
      placeholder: "Town/City",
      type: "text",
    },
    {
      placeholder: "Phone Number",
      type: "text",
    },
    {
      placeholder: "Email Address",
      type: "email",
    },
  ];
  return (
    <div className="min-h-screen container  mx-auto py-10 ">
      <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
      <div className=" justify-between  md:gap-0 gap-5  flex flex-col md:flex-row ">
        <div className="md:w-[45%]">
          <form className="space-y-4">
            {formDate.map((item) => (
              <Input
                isrequired
                inputstyle="background"
                className="bg-bg-gray "
                label={item.placeholder}
                type={item.type}
              />
            ))}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="save"
                checked
                className="accent-red-500 w-5 h-5"
              />
              <label htmlFor="save" className="text-sm text-gray-600">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        <div className="md:w-[45%]  mt-4">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover"
                  />
                  <span className="text-sm text-gray-700">{item.name}</span>
                </div>
                <span className="text-sm text-gray-800 font-medium">
                  ${item.price}
                </span>
              </div>
            ))}
            <hr />
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>

            {/* Payment */}
            <div className="mt-6 space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  onChange={(e) => setPayment(e.target.value)}
                  className="accent-black w-4 h-4"
                />
                <span>Bank</span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="cards"
                  className="h-5 ml-2"
                />
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={payment === "cash"}
                  onChange={(e) => setPayment(e.target.value)}
                  className="accent-black w-4 h-4"
                />
                <span>Cash on delivery</span>
              </label>
            </div>

            {/* Coupon */}
            <div className="flex mt-4 space-x-2">
              <Input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                className="w-3/5 !py-4"
                onChange={(e) => setCoupon(e.target.value)}
              />
              <Button size="lg" className="text-xs !py-4 font-normal w-2/5">
                Apply Coupon
              </Button>
            </div>

            {/* Place Order */}
            <Button
              size="lg"
              onClick={handlePlaceOrder}
              className="text-xs !py-4 font-normal "
            >
              Place Order
            </Button>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
