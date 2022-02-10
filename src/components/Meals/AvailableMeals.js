import React, {useEffect, useState} from "react"

import Card from "../UI/Card"
import MealItem from "./MeatItem/MealItem"

import classes from "./AvailableMeals.module.css"

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);

  useEffect( () => {
    console.log("hi")
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-e0a9d-default-rtdb.firebaseio.com/meals.json')
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data){
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }

      setMeals(loadedMeals)
    }

    fetchMeals();
  }, [])

  const mealsList = meals.map((meal) => 
  <MealItem 
  key={meal.id} 
  id={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}
  >{meal.name}</MealItem>);

  return(
    <section className={classes.meals}>
      <Card>
      <ul>
        {mealsList}
        </ul>
        </Card>
      </section>
  )
}

export default AvailableMeals;

