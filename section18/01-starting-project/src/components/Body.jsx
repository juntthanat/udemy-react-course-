import { useState, useEffect } from "react";
import { fetchMeals } from "../http";
import MealModal from "./MealModal";

export default function Body() {
  const [fetchData, setFetchData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const meals = await fetchMeals();

        setFetchData(meals);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch meals, please try again later.",
        });
        setIsFetching(false);
      }
    }

    fetchData();
  }, []);

  console.log(fetchData)

  return <div id="meals">
    {fetchData.map((meal) => <MealModal key={meal.id} meal={meal}/>)}
  </div>;
}
