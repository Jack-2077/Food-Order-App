import {useContext} from "react"

import classes from "./Cart.module.css"

import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../store/cart-context"


const Cart = props => {

  const cartCtx = useContext(CartContext) 

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) =>
    (
      <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} />
    ))}
    </ul>
    );


  
    return (
        <Modal onCartClose={props.onCartClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onCartClose}>Close</button>
          {hasItems && <button className={classes.button}>Order</button>}
          </div>
          </Modal>
    )
}

export default Cart;