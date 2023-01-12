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
