import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Siedber from "../Components/Siedber";
import Footer from "../Components/Footer";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F4F2EE] dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

  
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 z-50 px-5 py-3 rounded-3xl
                   bg-white dark:bg-gray-700 shadow
                   hover:scale-105 transition"
      >
        {darkMode ? "☀️ " : "🌙"}
      </button>

      <Siedber />

      <div className="sm:ml-64">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}