import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import ReactDOM from "react-dom";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BottonLoading from "./BottonLoading";
import { AddProductToCart } from "../../api/addtoCart";
import { AuthContext } from "../../Context/AuthContext";

function Modal({ onClose, imgsrc, title, price, oldPrice, rating, reviews }) {
  const [finsh, setfinsh] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setfinsh(true);
    }, 50);
  }, []);

  const hideelement = () => {
    setfinsh(false);
    setTimeout(() => {
      onClose();
    }, 100);
  };
  return ReactDOM.createPortal(
    <div
      className={`${
        finsh ? "opacity-100" : "opacity-0"
      } duration-300 fixed inset-0 bg-black/70 bg-opacity-50 flex justify-center items-center z-50`}
      onClick={hideelement}
    >
      <div
        className={`${
          finsh ? "translate-y-0" : "-translate-y-full"
        } bg-white rounded-lg shadow-lg p-6 w-96 relative duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={hideelement}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <IoMdClose size={28} />
        </button>
        <img src={imgsrc} alt={title} className="w-full h-48 object-contain" />
        <h2 className="mt-4 text-lg font-semibold">{title}</h2>
        <p className="text-red-500 font-bold text-lg">${price}</p>
        {oldPrice && <p className="text-gray-400 line-through">${oldPrice}</p>}
        <p className="text-gray-600 mt-2">
          ⭐ {rating} ({reviews} reviews)
        </p>
      </div>
    </div>,
    document.body
  );
}

export function Product({
  id,
  typeTow = false,
  isNew,
  discount,
  imgsrc,
  title,
  price,
  oldPrice,
  rating,
  reviews,
  color,
  myColor,
}) {
  const { setCarcount, removeToast, setToasts } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [likeId, setLikeId] = useState(0);
  const [imgurl, setImgsrc] = useState(imgsrc);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const CheckUser = (errorformuser) => {
    const token = localStorage.getItem("token");

    if (!token || errorformuser) {
      Swal.fire({
        title: "You need to sign in",
        text: "You must sign in to like this post. Do you want to sign in now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Sign In",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
          window.scrollTo(0, 0);
        } else {
          setLikeId(0);
        }
      });
      return;
    }
  };
  const LikethisPost = (id) => {
    CheckUser();
    console.log(id);
  };
  const alert = (message) => {
    const id = Date.now();
    const newToast = { id, message };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => removeToast(id), 5000);
  };

  const AddToCart = async (id, title) => {
    CheckUser();
    setLoading(true);
    try {
      await AddProductToCart(id);
      alert(`Added product ${title.slice(0, 5)}... to cart ✅`);
      setCarcount((pre) => pre + 1);
    } catch {
      console.log(1);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        className="bg-white   relative group"
        onClick={() => {
          navigate(`/ProductDetails/${id}`);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        {isNew && (
          <span className="absolute top-2 z-10 left-2 bg-green-400 text-white text-xs font-semibold px-2 py-1 rounded">
            New
          </span>
        )}
        {discount && (
          <span className="absolute top-2 z-10 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        <div className=" rounded-md h-60 flex  overflow-hidden relative items-center justify-center bg-bg-gray">
          <img
            src={imgurl}
            alt={title}
            className="h-44 object-contain w-full"
          />
          <div className="absolute  top-0 right-0  w-full h-full flex flex-col justify-between  md:opacity-0 opacity-100  group-hover:opacity-100 transition">
            <div className="w-full flex  justify-end">
              <div className="flex flex-col mr-3 mt-2 justify-end gap-2">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLikeId((prev) => (prev === 0 ? id : 0));
                    LikethisPost(id);
                  }}
                  variant="circular"
                  className="bg-white h-8 w-8"
                  size="sm"
                >
                  {likeId == 0 ? (
                    <CiHeart className="text-gray-600" size={25} />
                  ) : (
                    <FaHeart className="text-red-500" size={20} />
                  )}
                </Button>
                <Button
                  onClick={() => setShowModal(true)}
                  variant="circular"
                  className="bg-white h-8 w-8"
                  size="sm"
                >
                  <IoEyeOutline className="text-gray-600 " size={25} />
                </Button>
              </div>
            </div>
            <div
              style={{ backgroundColor: "red" }}
              className="bg-white w-full absolute md:-bottom-full bottom-0 group-hover:bottom-0 duration-300 "
            >
              <Button
                disabled={loading}
                onClick={(e) => {
                  e.stopPropagation();
                  AddToCart(id, title);
                }}
                className="w-full md:text-base text-xs"
                variant="black"
              >
                {loading ? <BottonLoading /> : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4 ">
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

          <div
            className={`flex ${
              typeTow ? "flex-row flex-wrap" : "flex-col"
            } gap-2 mt-2`}
          >
            <div className="">
              <span className="text-red-500 font-bold text-lg">${price}</span>
              {oldPrice != 0 && (
                <span className="text-gray-400 line-through ml-2">
                  ${oldPrice}
                </span>
              )}
            </div>

            <div className="flex  items-center gap-1 ">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-500 text-sm ml-1">({reviews})</span>
            </div>
          </div>
        </div>
        {color && (
          <div className="flex gap-2 mt-2">
            {Array.isArray(color) && color.length != 0 && (
              <>
                <div
                  className={`${
                    imgurl == imgsrc ? "border-2" : "border-0"
                  } border-black rounded-full flex justify-center items-center`}
                >
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImgsrc(imgsrc);
                    }}
                    size="sm"
                    style={{ backgroundColor: myColor }}
                    variant="circular"
                    className="  border-white border-2 "
                  ></Button>
                </div>
                {color.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      imgurl == item.imgsrc ? "border-2" : "border-0"
                    } border-black rounded-full flex justify-center items-center`}
                  >
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgsrc(item.imgsrc);
                      }}
                      size="sm"
                      style={{ backgroundColor: item.color }}
                      variant="circular"
                      className="  border-white border-2 "
                    ></Button>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          imgsrc={imgurl}
          title={title}
          price={price}
          oldPrice={oldPrice}
          rating={rating}
          reviews={reviews}
        />
      )}
    </>
  );
}

export function ProductSkeleton() {
  return (
    <div className="bg-white animate-pulse rounded-md p-4">
      <div className="h-60 bg-gray-200 rounded-md"></div>

      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="flex gap-2 mt-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-4 bg-gray-200 rounded-full"></div>
          ))}
        </div>
        <div className="h-6 bg-gray-200 rounded w-full mt-3"></div>
      </div>
    </div>
  );
}
