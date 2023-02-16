import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment } from "react";
import MealItems from "./components/Meals/MealItems";

const mealitems = [
  { id:"p1", name: "Potato", price: "900" },
  { id:"t1",name: "Tomato", price: "800" },
];

function App() {
  return (
    <Fragment>
      <Header />
      <MealItems mealitems={mealitems} />
    </Fragment>
  );
}

export default App;
