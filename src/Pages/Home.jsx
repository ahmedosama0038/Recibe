import axios from "axios";
import React, { useEffect, useState } from "react";
import MealCard from "../Components/MealCard";
import Loading from "../Components/Loading";

export default function Home() {
  const [resipy, setresipy] = useState([]);
  const [selectTab, setselectTab] = useState("All");
  const Catagrts = [
    "All",
    "Beef",
    "Chicken",
    "Seafood",
    "Dessert",
    "Pasta",
    "Pork",
    "Side",
    "Starter",
    "Vegan",
    "Goat",
    "Lamb",
    "Miscellaneous",
  ];
  async function getrespy() {
    try {
      let url = "";

      if (selectTab === "All") {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectTab}`;
      }

      const res = await axios.get(url);
      setresipy(res.data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getrespy();
  }, [selectTab]);
  return (
    <>
      <section>
        {resipy.length == 0 ? (
          <Loading />
        ) : (
          <div className=" container mx-auto px-5 dark:text-white   dark:bg-gray-900  transition-colors duration-300">
            <h1 className="text-4xl italic  font-bold font-ahmed  py-5 sm:text-start text-center bg-gradient-to-r from-primary via-[#ca102384] to-[#c90519] bg-clip-text text-orange-400 text-transparent drop-shadow-lg  ">
              Learn, Cook, Eat Your Food
            </h1>
            <label htmlFor="tabs"></label>
            <select
              name=""
              id="tabs"
              className=" w-full px-4 py-3 rounded-2xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparen  sm:hidden  transition-all duration-300 dark:bg-gray-800 dark:text-white"
              value={selectTab}
              onChange={(e) => setselectTab(e.target.value)}
            >
              {Catagrts.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <ul
              className=" sm:flex hidden  text-center text-[#c2c3c6ef] flex-wrap font-cursive  
 gap-4 mt-4 border-b border-[#E5E7EB]   "
            >
              {Catagrts.map((Catagrt, index) => (
                <li
                  key={index}
                  className={
                    "border text-2xl my-2 p-3   border-gray-400  capitalize rounded-3xl px-12 " +
                    (selectTab === Catagrt
                      ? " bg-black text-white font-black font-Pacifico"
                      : "text-gray-400 hover:scale-105 hover:bg-white transition-all duration-500")
                  }
                >
                  <button onClick={() => setselectTab(Catagrt)}>
                    {" "}
                    {Catagrt}{" "}
                  </button>
                </li>
              ))}
            </ul>

            <div className="   grid mt-24 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-6  gap-y-20 ">
              {resipy.map((ietm) => (
                <MealCard
                  key={ietm.idMeal}
                  id={ietm.idMeal}
                  image={ietm.strMealThumb}
                  arry={ietm.strArea}
                  titel={ietm.strMeal}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
