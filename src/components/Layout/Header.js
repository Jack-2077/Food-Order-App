import React from "react"

import MealsImage from "../../Assests/meals.jpg";
import classes from "./Header.module.css"


const Header = (props) => {

  return (
    <>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
      <img src={MealsImage} alt="meals on a table" />
    </div>
    </>
  )
}


export default Header;