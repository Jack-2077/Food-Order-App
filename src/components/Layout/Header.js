import React, {Fragment} from "react"

import HeaderCart from "./HeaderCart"
import MealsImage from "../../Assests/meals.jpg";
import classes from "./Header.module.css"


const Header = (props) => {

  return (
    <Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
     <HeaderCart onClick={props.onCartShow}/>
    </header>
    <div className={classes['main-image']}>
      <img src={MealsImage} alt="meals on a table" />
    </div>
    </Fragment>
  )
}


export default Header;