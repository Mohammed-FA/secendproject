import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Addproduct } from "../api/Product/product";
import BottonLoading from "../components/comment/BottonLoading";
import Button from "../components/comment/Button";
import Input from "../components/comment/Input";

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
        setMessage(
          error.response.data.message ||
            "An error occurred while adding the product"
        );
      } else {
        setMessage("Failed to connect to the server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Product
        </h1>

        {message && (
          <div className="mb-4 text-center text-sm font-semibold text-green-600">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded  px-4 py-2 w-full focus:border-primary focus:ring-0 "
          />

          <Input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <Input
            type="number"
            name="oldPrice"
            placeholder="Old Price (optional)"
            value={formData.oldPrice}
            onChange={handleChange}
          />

          <Input
            type="file"
            name="imgUrl"
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            accept="image/*"
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full !font-light rounded-md"
          >
            {loading ? <BottonLoading /> : "Add Product"}
          </Button>
        </form>
      </div>
    </div>
  );
}
