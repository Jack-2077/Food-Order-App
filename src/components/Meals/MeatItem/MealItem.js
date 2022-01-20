const MealItem = ({name, description, price}) => {

  const mealPrice = `$${price.toFixed(2)}`
  return (
    <li>
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{mealPrice}</div>
      </div>
      <div>

      </div>
      </li>
  )
}