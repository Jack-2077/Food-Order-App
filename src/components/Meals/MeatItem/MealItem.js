import {useContext} from "react"

import classes from "./MealItem.module.css"

import MealItemForm from "./MealItemForm"
import CartContext from "../../../store/cart-context"

const MealItem = ({name, description, price, id}) => {

  const cardCtx = useContext(CartContext);

  const onAddToCartHandler = amount => {
    console.log(id, name, amount, price)
      cardCtx.addItem({id: id,name: name, amount: amount, price: price});
  }

  const mealPrice = `$${price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
      <MealItemForm id={id} onAddToCart={onAddToCartHandler}/>
      </div>
      </li>
  )
}

export default MealItem;