export default function MealModal({ meal }) {
  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.image} />
        <h3>{meal.name}</h3>
        <div>
          <div className="meal-item-price">{`$${meal.price}`}</div>
          <div className="meal-item-description">{meal.description}</div>
          <div className="meal-item-actions meal-item-price button">add to cart</div>
        </div>
      </article>
    </div>
  );
}
