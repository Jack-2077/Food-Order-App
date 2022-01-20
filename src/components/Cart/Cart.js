import classes from "./Cart.module.css"

import Modal from "../UI/Modal"

const Cart = props => {

  const cartItems = <ul className={classes['cart-items']}>
    {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(
    (Item) => <li>{Item.name}</li>)}</ul>
  
    return (
        <Modal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
          </div>
          <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          <button className={classes.button}>Order</button>
          </div>
          </Modal>
    )
}

export default Cart;