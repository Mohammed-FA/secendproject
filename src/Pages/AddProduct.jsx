import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Addproduct } from "../api/Product/product";
import BottonLoading from "../components/comment/BottonLoading";

export default function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    oldPrice: 0,
    imgUrl: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imgUrl") {
      setFormData({ ...formData, imgUrl: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const form = new FormData();
      form.append("Title", formData.title);
      form.append("Description", formData.description);
      form.append("Price", formData.price);
      form.append("OldPrice", formData.oldPrice);
      if (formData.imgUrl) {
        form.append("ImgUrl", formData.imgUrl);
      }

      const response = await Addproduct(form);
      const product = response.data.product;
      if (product.id) {
        navigate(`/AddColor/${product.id}`);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "حدث خطأ أثناء الإضافة");
      } else {
        setMessage("فشل الاتصال بالسيرفر");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          إضافة منتج
        </h1>

        {message && (
          <div className="mb-4 text-center text-sm font-semibold text-green-600">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="العنوان"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="description"
            placeholder="الوصف"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="price"
            placeholder="السعر"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="oldPrice"
            placeholder="السعر القديم (اختياري)"
            value={formData.oldPrice}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="file"
            name="imgUrl"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            accept="image/*"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? <BottonLoading /> : "إضافة المنتج"}
          </button>
        </form>
      </div>
    </div>
  );
}
