import React, {useContext, useState} from "react"

import classes from "./Cart.module.css"

import Modal from "../UI/Modal"
import CartItem from "./CartItem"
import CartContext from "../../store/cart-context"

import Checkout from "./Checkout"


const Cart = props => {

  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmited, setIsSubmited] = useState(false)

  const cartCtx = useContext(CartContext) 

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => { cartCtx.removeItem(id)}

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }

  const checkoutHandler = (orderItems) => {
    setIsSubmitting(true);
    const orderDetails = {
      user: orderItems,
      order: cartCtx.items
    }
      const sendOrder = async () => {
        const settings = {
          method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
        }
        try {
          await fetch('https://react-http-e0a9d-default-rtdb.firebaseio.com/orders.json',settings);
        }
      catch (e){
        return e;
      }
    }
    sendOrder();
    setIsSubmitting(false)
    setIsSubmited(true);
    cartCtx.clearCart();
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

    const cartModal = (
      <React.Fragment>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {isCheckout && <Checkout onCancel={props.onCartClose} onCheckout={checkoutHandler}/>}
          {!isCheckout && modalActions}
          </React.Fragment>
    )

    const onSubmitText = (
      <React.Fragment>
        <p>Your order has been placed</p>
        <div className={classes.actions}>
        <button className={classes.button} onClick={props.onCartClose}>Close</button>
        </div>
        </React.Fragment>
    )
  
    return (
      <Modal onCartClose={props.onCartClose}>
        {!isSubmitting && !isSubmited && cartModal}
           {isSubmitting && <p>Processing your order</p>}
          {isSubmited && !isSubmitting && onSubmitText}
          </Modal>
    )
}

export default Cart;