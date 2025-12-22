import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Components/Loading";

export default function MealDetails() {
  const [detailsData, setdetailsData] = useState(null);
  const [ingredients, setingredients] = useState([]);
  const { id } = useParams();

  async function fetchMealDetails() {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = res.data.meals;

      setdetailsData(data);
      if (data && data.length > 0) {
        const meal = data[0];
        const ingArr = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            ingArr.push({ ingredient, measure });
          }
        }
        setingredients(ingArr);
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  }

  useEffect(() => {
    fetchMealDetails();
  }, []);

  console.log(detailsData);

  return (
    <section className="dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      {detailsData !== null ? (
        <div className="container p-4">
          <h1 className="text-5xl font-ahmed font-semibold mb-4 dark:text-white text-center">
            {detailsData ? detailsData[0].strMeal : ""}
          </h1>

          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="gap-4 grid lg:grid-cols-2">
              <div>
                <img
                  src={detailsData ? detailsData[0].strMealThumb : ""}
                  className="w-full rounded-2xl mb-8"
                  alt=""
                />

                <button className="text-xl px-3 py-2 mt-2 me-3 bg-red-600 text-white rounded-2xl hover:bg-red-500 hover:scale-105 transition-all duration-500 dark:bg-red-600 dark:hover:bg-red-500">
                  <Link to={detailsData ? detailsData[0].strYoutube : ""}>
                    <FaYoutube className="text-white text-2xl inline" /> Youtube
                  </Link>
                </button>

                <button className="text-xl px-3 py-2 mt-2 bg-green-600 text-white rounded-2xl hover:bg-green-400 hover:scale-105 transition-all duration-500 dark:bg-green-600 dark:hover:bg-green-500">
                  <Link to={detailsData ? detailsData[0].strSource : ""}>
                    <FontAwesomeIcon icon={faGlobe} /> Source
                  </Link>
                </button>
              </div>

              <p className="text-center font-cursive text-lg leading-8 text-justify">
                {detailsData ? detailsData[0].strInstructions : ""}
              </p>
            </div>

            <div className="Ingredients lg:w-1/3 p-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg dark:bg-gray-800">
                <h2 className="text-2xl font-cursive p-2 font-semibold mb-4 border-b-4 border-gray-400">
                  Ingredients
                </h2>

                {ingredients.map(
                  (ing, index) =>
                    ing && (
                      <div
                        key={index}
                        className="flex justify-between items-center  gap-10 border-b border-gray-400 p-2"
                      >
                        <span className=" font-cursive">{ing.ingredient}</span>
                        <span className=" font-cursive">{ing.measure}</span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
