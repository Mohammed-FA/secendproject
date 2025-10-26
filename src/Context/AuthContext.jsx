import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetMyCart } from "../api/addtoCart";
/* eslint-disable react-refresh/only-export-components */

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cartcount, setCarcount] = useState(0);
  const [loadingitem, setLoadingitem] = useState(true);
  const navigate = useNavigate();
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    let ignor = false;

    if (!ignor) fetchData();
    return () => {
      ignor = true;
    };
  }, []);

  const fetchData = async () => {
    setLoadingitem(true);
    try {
      const response = await GetMyCart();
      if (response.data && Array.isArray(response.data)) {
        let counter = 0;
        let array = response.data;
        for (let index = 0; index < array.length; index++) {
          counter += array[index].count;
        }
        setCarcount(counter);
      }
    } catch {
      localStorage.removeItem("token");
      setToken("");
    } finally {
      setLoadingitem(false);
    }
  };

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <AuthContext.Provider
      value={{
        removeToast,
        toasts,
        setToasts,
        token,
        login,
        logout,
        setCarcount,
        setLoadingitem,
        cartcount,
        fetchData,
        loadingitem,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
