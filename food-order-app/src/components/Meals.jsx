import React from 'react'
import { useCartDispatch } from '../Contexts'
import { useAvailableMeals } from '../Contexts'
import MealItem from './MealItem'
export const Meals = () => {
  const meals = useAvailableMeals().meals
  const dispatchCart = useCartDispatch()
  function handleClick(meal) {
    dispatchCart({
      type: !meal.isSelected ? "added" : "ADDQUANTIY",
      orderMeal:  meal

    })
meal.isSelected = true
  }

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <MealItem
          key={meal.id}
          name={meal.name}
          image={meal.image}
          description={meal.description}
          price={meal.price}
          addToCart={() => handleClick(meal)}
        />
      })}

    </ul>

  )



}
