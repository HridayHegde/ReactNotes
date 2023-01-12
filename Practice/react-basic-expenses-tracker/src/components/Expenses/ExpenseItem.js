import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expenseitem = (props) => {
  console.log(props.filterYear)
  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
    console.log("Clicked !!!");
    setTitle("Updated !!")
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default Expenseitem;
