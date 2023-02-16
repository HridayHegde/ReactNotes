import React from 'react';
import Card from '../UI/Card';
import classes from './Meal.module.css'
const Meal = (props) => {
    return (
        <Card className={classes.mealbody}>
            <span className={classes.name}>{props.name}</span>
            <span className={classes.price}>{props.price}</span>
        </Card>
    );
}

export default Meal;
