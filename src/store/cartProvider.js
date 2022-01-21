
import cartContext from "./cart-context"

const cartProvider = (props) => {

  const addCartItem = (item) => {

  }

  const removeCartItem = (id) => {

  }


  const CartContext = {
    items: [],
  amount: 0,
  addItem: (item) => addCartItem,
  removeItem: (id) => removeCartItem
  }
    return (<cartContext.Provider>
      {props.children}
      </cartContext.Provider>)
}

export default cartProvider;