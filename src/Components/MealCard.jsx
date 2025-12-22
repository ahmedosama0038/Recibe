import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function MealCard(props) {
  const { id, image, arry, titel } = props;

  return (
    <>
      <div
        className="
  bg-white rounded-[35px] font-cursive text-center
  hover:scale-105 transition-all duration-400
  hover:shadow-xl group p-6  my-5 dark:bg-gray-800
"
      >
        <div>
          <img
            src={image}
            alt={titel}
            className="
      w-full mx-auto
      -translate-y-20 rounded-full
      shadow-2xl
      transition-transform duration-700
      group-hover:rotate-[360deg]
    "
          />

          <h3 className="font-bold text-xl mb-5 tracking-wider">{titel}</h3>

          <h5 className="mb-3 text-gren text-xl dark:text-green-400">
            {" "}
            <FontAwesomeIcon icon={faGlobe} /> {arry}
          </h5>
        </div>

        <button className="text-xl  px-8 py-4 mt-2  bg-gren  text-white rounded-4xl hover:bg-emerald-400 hover:scale-105  transition-all duration-500 dark:bg-green-600 dark:hover:bg-green-500">
          <Link to={`/meal/${id}`}>view Recipe</Link>
        </button>
      </div>
    </>
  );
}
