/// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#f192179a] to-[#C4CE2C] dark:from-gray-800 dark:to-gray-900">
      <div className="text-center px-6 py-12 bg-white rounded-3xl shadow-2xl max-w-md dark:bg-gray-800">
        <h1 className="text-9xl font-extrabold text-gray-800 mb-4 animate-bounce  dark:text-red-200">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#f19217a4] to-[#C4CE2C] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform dark:from-orange-600 dark:to-yellow-400"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
