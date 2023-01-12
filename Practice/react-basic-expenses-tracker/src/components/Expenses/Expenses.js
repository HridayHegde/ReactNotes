import React,{useState} from "react";
import "./Expenses.css";
import Expenseitem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState('2020');
  const changeFilterHandler = (filterYear) =>{
    //console.log(filterYear)
    setSelectedFilterYear(filterYear)
  }
  return (
    <div>
      
      <Card className="expenses">
        <ExpensesFilter selected={selectedFilterYear} onChangeFilter={changeFilterHandler}/>
        <Expenseitem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
          filterYear={selectedFilterYear}
        />
        <Expenseitem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
          filterYear={selectedFilterYear}
        />
        <Expenseitem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
          filterYear={selectedFilterYear}
        />
        <Expenseitem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
          filterYear={selectedFilterYear}
        />
      </Card>
    </div>
  );
};

export default Expenses;
