# React Basics

## Basic Structure

- Custom components in React

  - They use props to pass values to the inner inbuilt elements
  - {} can be used to execute standard js code (not custom component specific)
  - They can also use States to handle events on the component

- useState

  - This function creates a special variable that uses states and also creates a function to set a value to that new variable
  - eg. [variablename, functionname] = useState(props.variablename);
  - here functionname can be used to set a new value to the variable which will re render the react component
  - eg functionname("Updated value")
  - the newly created variable can be used like a standard variable in the function
  - Note : useState must only be used inside react component fucntions and not outside or inside a nested function

- Using multiple useState
  - This is fine to do either in an individual format or in a single state object
  - When using a single state object by passing an object in the state you might need to use the status of your previous state when setting a new value to one of the other states, this should be done by passing an arrow function into the setstate function and then accepting the previousState parameter in that function
  - This prevState parameter is provided by default by react
  - eg. setUserInput((prevState) => {
    return {...prevState,enteredtitle:event.target.value}
    })

- Keys
  - keys need to be added to dynamically loaded component lists for react to identify all the components correctly
  - Not assigning this may lead it to discard state changes on other similar elements as it rerenders the entire list of components


- JSX ternary expressions are allowed

- && can be used in a condition statement to output the item after && when the first condition is true


- JSX Limitations
  - multiple components cannot exist side by side when returning jsx
  - This can be worked around by adding a div around those components, however a better approach is to add a custom wrapper component, This component only return props.children back without adding any new elements to the content
  - Div Soup(solution : Fragments)
    - This can be mitigated by the same solution as above, however react has a similar component available called <React.Fragment> which can be added and serves the same purpose
  - Portals
  - Refs - use where you done want to set state every keystroke

- Use State
  - Storing state variables so that they update the object when changed
- Use Reducer
  - This is used as an alternative to useState when you need to have complex data stored in a state, it can also have a function to solve the state based sequences and what to return
- useEffect
  - This is used to trigger events based off of other events. Here the Effect is a side effect such that suppose a variable(state) is changed then this effect will run