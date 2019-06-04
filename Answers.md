1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
.map, .filter, .concat, 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions- Actions are packets of information in redux that our fed to our reducers that will use that data to update the state
reducers- reducers are functions that take in our actions and then updates our state based on the data that is being given to it
store- the store basically holds everything in our application. It contains our state for the application. It is the single source of truth because all of the data through it. 


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is immutable. It is global. It uses stores to hold the application state. If you are using a big application you want to use application state. 
Component state is within a specific component. You would use this if you wanted to update state within this component or the children of this component. 

1.  What is middleware?


1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It is a middleware that helps make our data flow asynchronous.  A thunk is a function . It makes our action creators api calls asynchronous, 


1.  Which `react-redux` method links up our `components` with our `redux store`?
