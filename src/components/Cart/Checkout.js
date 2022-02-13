import {useForm} from "react-hook-form"

import classes from "./Checkout.module.css"


const Checkout = (props) => {

  const {register, formState: { errors }, handleSubmit} = useForm()

  const onSubmitHandler = (e) => {
    //e.preventDefault();
    alert(JSON.stringify(e))
  }

  const isNameValid = errors.name && errors.name?.type === 'required';
  const isStreetValid = errors.street && errors.street?.type === 'required';
  const isPostalValid = errors.postal && errors.postal?.type === 'required';
  const isCityValid = errors.city && errors.city?.type === 'required';

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={`${classes.control} ${!isNameValid ? '' : classes.invalid }`}>
        <label htmlFor='name'>Your Name</label>
        <input type="text" {...register("name", { required: true})} id='name' />
        {isNameValid && "Name is required"}
        </div>
        <div className={`${classes.control} ${!isStreetValid ? '' : classes.invalid }`}>
        <label htmlFor='street'>Street</label>
        <input type="text" {...register("street", { required: true})} id='street' />
        {isStreetValid && "Street is required"}
        </div>
        <div className={`${classes.control} ${!isPostalValid ? '' : classes.invalid }`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type="text" {...register("postal", { required: true,  maxLength: 6})} id='postal' />
        {isPostalValid && "Postal is required"}
        {errors.postal?.type === 'maxLength' && "Postal length exceeded"}
        </div>
        <div className={`${classes.control} ${!isCityValid ? '' : classes.invalid }`}>
        <label htmlFor='city'>City</label>
        <input type="text" {...register("city", { required: true})} id='city' />
        {isCityValid && "City is required"}
        </div>
        <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>cancel</button>
        <button>Confirm</button>
        </div>
      </form>
  )
}

export default Checkout