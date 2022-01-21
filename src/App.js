import React, {useState, Fragment} from "react"

import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);

  const disableCartHandler = () => setCartIsShown(false);


  return (
    <Fragment>
    {cartIsShown && <Cart onCartClose={disableCartHandler}/>}
    <Header onCartShow={showCartHandler} />
    <main>
      <Meals />
      </main>
    </Fragment>
  );
}

export default App;
