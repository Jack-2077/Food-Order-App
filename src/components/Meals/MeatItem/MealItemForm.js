import {useRef} from "react"

import classes from "./MealItemForm.module.css"

import Input from "../../UI/Input"

const MealItem = (props) => {

  const amoutRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  }

    return (
      <form className={classes.form} onSubmit={submitHandler} >
        <Input 
        label="Amount" 
        ref={amoutRef}
        input={{
          id: 'amount_' + props.id, 
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
           }}/>
        <button>+ Add</button>
        </form>
    )
}

export default MealItem;