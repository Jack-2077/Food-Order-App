import React, {useContext, useEffect, useState} from "react"

import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context";

import classes from "./HeaderCart.module.css"


const HeaderCart = (props) => {

  const [animateButton, setAnimateButton] = useState(false)

 const cartCtx =  useContext(CartContext);
 const { items } = cartCtx;

const numberOfCartItems = items.reduce((curNum, item) => {
  return curNum + item.amount;
}, 0)

const buttonClasses = `${classes.button} ${animateButton ? classes.bump: ''}`;

useEffect(() => {
  if(items.length === 0){
    return;
  }
  setAnimateButton(true)

  const timer = setTimeout(() => {
    setAnimateButton(false)
  }, 300)

  return () => {
    clearTimeout(timer);
  }
}, [items])
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
        </span>
        <span>
          Your Cart 
          </span>
          <span className={classes.badge}
          >{numberOfCartItems} </span>
      </button>
  )
}

export default HeaderCart;