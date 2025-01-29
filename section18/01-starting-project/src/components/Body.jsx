import { useState, useEffect } from "react";
import Header from "../components/Header";
import { fetchMeals } from "../http";
import MealModal from "./MealModal";
import CartModal from "./CartModal";

export default function Body() {
  const [fetchData, setFetchData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  const [cartOrder, setCartOrder] = useState([]);

  const [isCartModal, setIsCartModal] = useState(false);

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
      setIsFetching(false);
    }

    fetchData();
  }, []);

  const handleAddToCart = (id) => {

    setCartOrder((prev) => {
      const temp = prev.slice();

      const index = temp.findIndex((d) => d.id === id);

      if (index !== -1) {
        temp[index] = { ...temp[index], amount: temp[index].amount + 1 };
      } else {
        temp.push({ id: id, amount: 1 });
      }

      return temp;
    });
  };

  function handleIsCartModal() {
    setIsCartModal(!isCartModal);
  }

  return (
    <>
      <Header cartOrder={cartOrder}  onClickIsCartModal={handleIsCartModal} />
      {isCartModal && <CartModal className='cart-item' cartOrder={cartOrder} mealData={fetchData}/>}
      <div id="meals">
        {isFetching && "Data is currently Fetching from Server"}
        {!isFetching &&
          fetchData.map((meal) => (
            <MealModal
              key={meal.id}
              meal={meal}
              onAddToCart={handleAddToCart}
            />
          ))}
      </div>
    </>
  );
}
