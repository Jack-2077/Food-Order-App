import {useReducer} from 'react';

import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0,
}


const cartReducer = (state, action) => {
  if(action.type === 'ADD_ITEM'){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems

    if(existingCartItem){
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem
    }
    else{
      updatedItems = state.items.concat(action.item);
    }
      
    return {items: updatedItems, 
      totalAmount: updatedTotalAmount};
  }

  if(action.type === 'REMOVE_ITEM'){
    const isItemExistsIndex = state.items.findIndex(item => item.id === action.id)
    const existingCartItem = state.items[isItemExistsIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if(existingCartItem.amount === 1){
       updatedItems =  state.items.filter(item => item.id !== action.id)
    }else{
        const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
        updatedItems = [...state.items];
        updatedItems[isItemExistsIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if(action.type === 'CLEAR_CART'){
    return defaultCartState;
  }
  return defaultCartState;
}


const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addCartItem = (item) => {
      dispatchCartAction({type: 'ADD_ITEM', item: item})
  }

  const removeCartItem = (id) => {
    dispatchCartAction({type: 'REMOVE_ITEM', id: id})
  }

  const clearCartItems = () => {
    dispatchCartAction({type: 'CLEAR_CART'});
  }


  const cartContext = {
    items: cartState.items,
  totalAmount: cartState.totalAmount,
  addItem:  addCartItem,
  removeItem: removeCartItem,
  clearCart: clearCartItems
  }
    return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      </CartContext.Provider>)
}

export default CartProvider;