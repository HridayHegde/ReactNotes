# Basic 
## JS features
- Variable declarations
    - var creates a variable
    - const creates a constant variable
    - let is used to create a scoped variable (scope is the block it is defined in)

- Arrow functions
  - const myFunc = () =>{}


- Export and Import
  - For default exports imports can look like
    - import prs from './person.js'
    - import person from './person.js'
  - For other imports use variable names
    - import {baseData} from './utility.js'
    - import {clean as potato} from './utility.js'
  - import * as bundled from './utility.js'

- Classes
  - create a class with variables and functions
  - instantiate with new keyword eg. cont per = new Person()
  - constructor() {} default method
  - Inheritance available
    - Person extends Human
    - need to add super() in child class

- Next Gen JS
  - directly assign variables
  - method = () => {....}

- Spread and Rest
  - ...
  - SPREAD eg. const newArray = [...oldArray,1,2]
  - SPREAD eg. newObject = {...oldObject, newProp:5}
  - REST function sortArgs(...args){ return args.sort()} 

- Destructuring
  - Array Destructuring
    - [a,b] = ['Hello', 'Max']
  - Object Destructuring
    - {name} = {name:'Max',age : 200}


- Objects and arrays have a reference, primitive types will be copied
  - To copy objects const secondobj = {...firstobject}

- map, filter, reduce function available for arrays, also copies the array

