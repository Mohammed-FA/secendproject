import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import "./index.css";
import App from "./Pages/App";
import Login from "./Pages/Login";
import HomePageLayout from "./layouts/HomePageLayout";
import Signup from "./Pages/Signup";
import AddProduct from "./Pages/AddProduct";
import AddColor from "./Pages/AddColor";
import { AuthProvider } from "./Context/AuthContext.jsx";
import CartPage from "./Pages/CartPage.jsx";
import DetailsProduct from "./Pages/DetailsProduct.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<App />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="ProductDetails/:id" element={<DetailsProduct />} />

            <Route path="CartPage" element={<CartPage />} />
            <Route path="AddColor/:id" element={<AddColor />} />
            <Route path="login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
