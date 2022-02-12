import {useContext, useState} from "react"

import classes from "./Cart.module.css"

import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../store/cart-context"

import Checkout from "./Checkout"


const Cart = props => {

  const [isCheckout, setIsCheckout] = useState(false)

  const cartCtx = useContext(CartContext) 

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => { cartCtx.removeItem(id)}

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) =>
    (
      <CartItem key={item.id} name={item.name} amount={item.amount} 
      price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}/>
    ))}
    </ul>
    );

    const orderHandler = () => {
      setIsCheckout(true);
    }


    const modalActions = (
      <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onCartClose}>Close</button>
      {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
    )
  
    return (
        <Modal onCartClose={props.onCartClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {isCheckout && <Checkout onCancel={props.onCartClose} />}
          {!isCheckout && modalActions}
          </Modal>
    )
}

export default Cart;