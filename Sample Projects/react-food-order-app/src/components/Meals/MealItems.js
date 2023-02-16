import React from 'react';
import Meal from './Meal';

const MealItems = (props) => {
    const mealList = props.mealitems.map(meal => <Meal key={meal.id} name={meal.name} price={meal.price}/>)
    return (
        <div>
           {mealList}
        </div>
    );
}

export default MealItems;
