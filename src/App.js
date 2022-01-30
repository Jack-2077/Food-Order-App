import React, {useState, Fragment} from "react"

import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);

  const disableCartHandler = () => setCartIsShown(false);


  return (
    <CartProvider>
    {cartIsShown && <Cart onCartClose={disableCartHandler}/>}
    <Header onCartShow={showCartHandler} />
    <main>
      <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
