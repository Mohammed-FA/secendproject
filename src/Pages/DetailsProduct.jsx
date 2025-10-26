import React, { useEffect, useState } from "react";
import Button from "../components/comment/Button";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductDetails } from "../api/Product/product";
import { Product, ProductSkeleton } from "../components/comment/Product";
import { CiHeart } from "react-icons/ci";
import cart from "../assets/cart.png";
import reverst from "../assets/reverst.png";
function DetailsProduct() {
  const navigator = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [imgurl, setImgsrc] = useState(null);

  const [selectedSize, setSelectedSize] = useState("M");
  const { id } = useParams();
  const productId = parseInt(id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignor = false;

    const getProduct = async () => {
      try {
        if (!ignor) {
          const responsive = await GetProductDetails(productId);
          setProduct(responsive.data);

          if (Array.isArray(responsive.data) && responsive.data.length == 0) {
            navigator("/");
          }
        }
      } catch {
        navigator("/");
      } finally {
        setLoading(false);
      }
    };
    getProduct();
    return () => {
      ignor = true;
    };
  }, [id]);
  useEffect(() => {
    if (product && Array.isArray(product) && product.length > 0) {
      setImgsrc(product[0].imgsrc);
      console.log(product[0]);
    }
  }, [product]);

  const buyProduct = (id, quantity) => {
    
  };
  if (loading) {
    return (
      <div className="container mx-auto py-10 px-5 lg:px-20 animate-pulse">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex gap-4 w-3/5">
            <div className="flex h-full flex-col gap-4 w-1/4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-20 bg-gray-200 rounded-md"
                ></div>
              ))}
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-md"></div>
          </div>

          <div className="flex-1 flex flex-col w-2/5 gap-4">
            <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
            <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
            <div className="h-8 bg-gray-200 w-1/3 rounded"></div>
            <div className="h-20 bg-gray-200 w-full rounded"></div>
            <div className="h-10 bg-gray-200 w-1/2 rounded"></div>
            <div className="h-10 bg-gray-200 w-2/3 rounded"></div>
          </div>
        </div>

        <div className="mt-10">
          <div className="h-6 bg-gray-200 w-40 mb-4 rounded"></div>
          <div className="grid xxs:grid-cols-2 md:mt-10 mt-3  gap-5 sm:grid-cols-3 lg:grid-cols-4 ">
            {[...Array(4)].map(() => (
              <ProductSkeleton />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container lg:py-20 md:py-16 sm:py-12 py-10 mx-auto">
      {/* Product Section */}
      {product && (
        <div className="flex flex-col md:flex-row gap-10">
          {/* Images */}
          <div className="flex toptablet:flex-row flex-col-reverse gap-4 lg:w-3/5 toptablet:w-3/5 md:w-1/2  w-full">
            <div className="flex toptablet:flex-col flex-row gap-4 toptablet:w-1/4 w-full h-full">
              {[...Array(4)].map((item, index) => (
                <div
                  key={index}
                  className="w-full toptablet:h-full h-20 flex justify-center items-center bg-bg-gray"
                >
                  <img
                    src={imgurl}
                    alt="product"
                    className="w-full  rounded-md object-contain cursor-pointer  "
                  />
                </div>
              ))}
            </div>
            <div className="w-full  md:h-full h-96  ">
              <img
                src={imgurl}
                alt="product main"
                className=" bg-bg-gray w-full h-full  object-contain  rounded-md"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:w-1/5 toptablet:w-2/5 md:w-1/2 w-full gap-4">
            <h1 className="text-2xl font-semibold">{product[0].title}</h1>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-gray-500">(150 Reviews)</span>
              <span className="text-green-600 ml-4">In Stock</span>
            </div>
            <p className="text-2xl font-bold">${product[0].price}</p>
            <p className="text-gray-600">{product[0].Description}</p>

            {Array.isArray(product[0].color) && product[0].color.length > 0 && (
              <div className="flex items-center gap-1">
                <span>Colours:</span>
                <>
                  <div
                    className={`${
                      imgurl == product[0].imgsrc ? "border-2" : "border-0"
                    } border-black rounded-full flex justify-center items-center`}
                  >
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgsrc(product[0].imgsrc);
                      }}
                      size="sm"
                      style={{ backgroundColor: product[0].myColor }}
                      variant="circular"
                      className="  border-white border-2 "
                    ></Button>
                  </div>

                  {product[0].color.map((item, index) => (
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
              </div>
            )}

            <div className="flex xxs:flex-nowrap flex-wrap items-center gap-2">
              <span>Size:</span>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded hover:bg-primary hover:text-white duration-300 cursor-pointer ${
                    selectedSize === size ? "bg-primary text-white" : "bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex md:w-full sm:w-1/4 w-full justify-between items-center border border-black/70 rounded-md overflow-hidden">
                <Button
                  variant="white"
                  className="border-0  border-r border-gray-500"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  -
                </Button>
                <span className="">{quantity}</span>
                <Button onClick={() => setQuantity((q) => q + 1)}>+</Button>
              </div>
              <Button
                onClick={() => {
                  buyProduct(id, quantity);
                }}
                size="lg"
                className="!py-3 text-sm md:w-full sm:w-1/4 w-full"
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                className="!p-2 h-full bg-white border border-black/50   text-sm md:w-1/6"
              >
                <CiHeart className="text-gray-600" size={25} />
              </Button>
            </div>

            <div className="flex flex-col gap-2 mt-4 border text-black border-black/50 rounded-md overflow-hidden">
              <div className="flex items-center gap-2 p-3  ">
                <div>
                  <img src={cart} />
                </div>
                <div>
                  <h2> Free Delivery:</h2>
                  <span className="text-xs underline">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>
              <hr className="opacity-50 " />
              <div className="flex items-center gap-2 p-3">
                <div>
                  <img src={reverst} />
                </div>

                <div>
                  <h2>Return Delivery:</h2>
                  <span className="text-xs underline">
                    Free 30 Days Delivery Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Related Item</h2>
        <div className="grid xxs:grid-cols-2 md:mt-10 mt-3  gap-5 sm:grid-cols-3 lg:grid-cols-4 ">
          {Array.isArray(product) &&
            product
              .slice(1, 5)
              .map((item, index) => <Product key={index} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
