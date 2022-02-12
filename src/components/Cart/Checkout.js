import {useForm} from "react-hook-form"

import classes from "./Checkout.module.css"


const Checkout = (props) => {

  const {register, formState: { errors }, handleSubmit} = useForm()

  const onSubmitHandler = (e) => {
    //e.preventDefault();
    alert(JSON.stringify(e))
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type="text" {...register("name", { required: true})} id='name' />
        {errors.name?.type === 'required' && "Name is required"}
        </div>
        <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type="text" {...register("street", { required: true})} id='street' />
        {errors.street?.type === 'required' && "Street is required"}
        </div>
        <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type="text" {...register("postal", { required: true})} id='postal' />
        {errors.postal?.type === 'required' && "Postal is required"}
        </div>
        <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type="text" {...register("city", { required: true})} id='city' />
        {errors.city?.type === 'required' && "City is required"}
        </div>
        <button type="button" onClick={props.onCancel}>cancel</button>
        <button>Confirm</button>
      </form>
  )
}

export default Checkout