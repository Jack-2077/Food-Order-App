import {useForm} from "react-hook-form"

import classes from "./Checkout.module.css"


const Checkout = (props) => {

  const {register, handleSubmit} = useForm()

  const onSubmitHandler = (e) => {
    //e.preventDefault();
    alert(JSON.stringify(e))
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type="text" {...register("name", { required: true})} id='name' />
        </div>
        <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type="text" {...register("street", { required: true})} id='street' />
        </div>
        <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type="text" {...register("postal", { required: true})} id='postal' />
        </div>
        <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type="text" {...register("city", { required: true})} id='city' />
        </div>
        <button type="button" onClick={props.onCancel}>cancel</button>
        <button>Confirm</button>
      </form>
  )
}

export default Checkout