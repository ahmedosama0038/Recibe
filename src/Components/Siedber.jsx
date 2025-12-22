import React, { useState } from "react";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // مهم
import { Link } from "react-router-dom";

export default function Siedber() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setisOpen(!isOpen)}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-15 text-gray-700  sm:hidden "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          onClick={() => setisOpen(false)}
          className=" fixed inset-0 bg-black/60 z-40 "
        ></div>
      )}

      <div
        className={`  flex  h-screen bg-white w-64 text-white   fixed top-0 left-0 z-40  transition-transform duration-300 ${
          isOpen ? `translate-x-0` : `-translate-x-full`
        } sm:translate-x-0  dark:bg-slate-800`}
      >
        <div className=" flex flex-col gap-6">
          <img
            src="https://assignment-sass.vercel.app/assets/logo-BfNap0Pe.png"
            alt="Logo"
          />

          <ul className=" space-y-8 text-center font-cursive">
            <li className=" hover:scale-105 hover:shadow-orange-400 2xl transition-all  duration-300  ">
              <Link
                to="/"
                className="bg-[#F29724] p-3 shadow rounded-2xl px-10  dark:bg-orange-500 "
              >
                <FontAwesomeIcon className=" text-2xl" icon={faUtensils} />
                <span className="text-2xl font-bold p-4  ">Meals</span>
              </Link>
            </li>
            <li className="text-black hover:scale-105  transition-all  duration-300  dark:text-white">
              <Link
                to="/"
                className=" p-3 px-9  border-gray-300  border rounded-xl"
              >
                <FontAwesomeIcon className="text-2xl" icon={faUtensils} />
                <span className=" text- font-bold p-3 ">Ingredients</span>
              </Link>
            </li>
            <li className=" text-black hover:scale-105  transition-all  duration-300 dark:text-white">
              <Link
                to="/"
                className=" p-3 px-15 border-gray-300  border rounded-xl"
              >
                <FontAwesomeIcon className="text-2xl" icon={faUtensils} />
                <span className=" text- font-bold p-3 ">Area</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
