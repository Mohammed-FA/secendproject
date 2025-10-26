import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Loading from "../components/comment/Loading";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import ToastContainer from "../components/comment/ToastContainer";

function HomePageLayout() {
  const { loadingitem, cartcount, toasts } = useContext(AuthContext);

  return (
    <div className="font-sans bg-white">
      <Navbar cartCount={cartcount} />

      <main className="w-full">
        <Outlet />
      </main>
      {loadingitem && <Loading />}
      {toasts.length > 0 && <ToastContainer toasts={toasts} />}
      <Footer />
    </div>
  );
}

export default HomePageLayout;
