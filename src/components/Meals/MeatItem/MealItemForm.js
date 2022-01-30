import {useRef, useState} from "react"

import classes from "./MealItemForm.module.css"

import Input from "../../UI/Input"

const MealItem = (props) => {

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const amountInputRef = amountRef.current.value;
    const amountNumber = +amountInputRef;

    if(amountInputRef.trim().length === 0 || amountNumber < 1 || amountNumber > 5){
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amountNumber);
  }

    return (
      <form className={classes.form} onSubmit={submitHandler} >
        <Input 
        label="Amount" 
        ref={amountRef}
        input={{
          id: 'amount_' + props.id, 
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
           }}/>
        <button>+ Add</button>
        {!amountIsValid && <p>Please Enter a valid amount</p>}
        </form>
    )
}

export default MealItem;