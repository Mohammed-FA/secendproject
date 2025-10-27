import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  DeleteProduct,
  GetAllProduct,
  Updateproduct,
} from "../api/Product/product";
import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Button from "../components/comment/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BottonLoading from "../components/comment/BottonLoading";

export default function ShowAllProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editLoading, setEditLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    oldPrice: 0,
    imgUrl: null,
  });
  const navigator = useNavigate();

  useEffect(() => {
    let ignore = false;
    const fetchProducts = async () => {
      try {
        if (!ignore) {
          const res = await GetAllProduct();
          setProducts(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      ignore = true;
    };
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await DeleteProduct(id);
        setProducts(products.filter((p) => p.id !== id));
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      } catch (err) {
        console.error("Failed to delete:", err);
        Swal.fire("Error", "Failed to delete product.", "error");
      }
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price,
      oldPrice: product.oldPrice,
    });

    setShowEditModal(true);
    setTimeout(() => setModalVisible(true), 10);
  };

  const handleUpdate = async () => {
    try {
      setEditLoading(true);
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("price", formData.price);
      form.append("oldPrice", formData.oldPrice);
      if (formData.imgUrl) form.append("imgUrl", formData.imgUrl);

      const responsive = await Updateproduct(selectedProduct.id, form);
      console.log(responsive);
      setProducts((prev) =>
        prev.map((p) =>
          p.id === selectedProduct.id ? { ...p, ...formData } : p
        )
      );
      closeModal();
      Swal.fire("Updated!", "Product updated successfully.", "success");
    } catch (err) {
      console.error("Failed to update:", err);
      Swal.fire("Error", "Failed to update product.", "error");
    } finally {
      setEditLoading(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setShowEditModal(false), 300);
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imgUrl") {
      setFormData({ ...formData, imgUrl: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "70px",
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={row.imgsrc}
          alt={row.title}
          className="w-10 h-10 rounded-md object-cover border"
        />
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) =>
        row.description
          ? row.description.length > 20
            ? row.description.slice(0, 20) + "..."
            : row.description
          : "-",
      wrap: true,
      grow: 2,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Color",
      cell: (row) => (
        <div
          className="w-6 h-6 rounded-full border"
          style={{ backgroundColor: row.myColor }}
        ></div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-3 text-lg">
          <button
            onClick={() => {
              navigator(`/ProductDetails/${row.id}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-blue-500 hover:text-blue-700"
            title="View Details"
          >
            <FaEye />
          </button>
          <button
            onClick={() => handleEditClick(row)}
            className="text-green-600 hover:text-green-800"
            title="Edit Product"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="text-red-500 hover:text-red-700"
            title="Delete Product"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const SkeletonRow = () => (
    <div className="animate-pulse flex items-center justify-between py-3 px-4">
      <div className="w-8 h-4 bg-gray-200 rounded"></div>
      <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
      <div className="w-24 h-4 bg-gray-200 rounded"></div>
      <div className="w-40 h-4 bg-gray-200 rounded"></div>
      <div className="w-16 h-4 bg-gray-200 rounded"></div>
      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
      <div className="flex gap-3">
        <div className="w-5 h-5 bg-gray-200 rounded"></div>
        <div className="w-5 h-5 bg-gray-200 rounded"></div>
        <div className="w-5 h-5 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className="rounded-lg py-10 container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">All Products</h1>
        <Button
          className="text-sm rounded-md !font-light flex gap-2 items-center"
          onClick={() => navigator("/AddProduct")}
        >
          <FaPlus /> Add Product
        </Button>
      </div>

      {loading ? (
        <div className="rounded-lg bg-white shadow-sm">
          {[...Array(6)].map((_, i) => (
            <SkeletonRow key={i} />
          ))}
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={products}
          pagination
          highlightOnHover
          striped
          responsive
          noDataComponent="No products found"
        />
      )}

      {/* ✅ Edit Modal with CSS animation */}
      {showEditModal && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ${
            modalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white p-6 rounded-xl shadow-lg w-[400px] transform transition-all duration-300 ${
              modalVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-10 scale-95"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4 text-center">
              Edit Product
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Title"
                className="w-full border p-2 rounded"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <textarea
                placeholder="Description"
                className="w-full border p-2 rounded"
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full border p-2 rounded"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Old Price"
                className="w-full border p-2 rounded"
                value={formData.oldPrice}
                onChange={(e) =>
                  setFormData({ ...formData, oldPrice: e.target.value })
                }
              />
              <input
                type="file"
                name="imgUrl"
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                accept="image/*"
              />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <Button
                disabled={editLoading}
                onClick={handleUpdate}
                className="rounded-md text-xs"
              >
                {editLoading ? <BottonLoading /> : "Edit"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
