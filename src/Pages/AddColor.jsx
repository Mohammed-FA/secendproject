import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Addcolor } from "../api/Product/product";

export default function AddColor() {
  const { id } = useParams();
  const [colors, setColors] = useState([{ color: "#000000", img: null }]);

  const addColorField = () => {
    setColors([...colors, { color: "#000000", img: null }]);
  };

  const removeColorField = (index) => {
    const updated = [...colors];
    updated.splice(index, 1);
    setColors(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...colors];
    updated[index][field] = value;
    setColors(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    colors.forEach((c, index) => {
      formData.append(`[${index}].ProductId`, id);
      formData.append(`[${index}].color`, c.color);
      if (c.img) formData.append(`[${index}].ImgUrl`, c.img);
    });

    try {
      const res = await Addcolor(formData);
      alert(res.data.message || "Colors added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding colors!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Add Colors for Product #{id}
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
        {colors.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row items-center gap-4"
          >
            {/* color picker */}
            <div className="flex items-center gap-2 w-full md:w-1/3">
              <label className="text-sm text-gray-700">Color:</label>
              <input
                type="color"
                value={item.color}
                onChange={(e) => handleChange(index, "color", e.target.value)}
                className="w-12 h-10 cursor-pointer border border-gray-300 rounded"
              />
            </div>

            {/* image upload */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleChange(index, "img", e.target.files[0])}
              className="flex-1"
              required
            />

            {/* delete button */}
            <button
              type="button"
              onClick={() => removeColorField(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={addColorField}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            + Add Another Color
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Colors
          </button>
        </div>
      </form>
    </div>
  );
}
