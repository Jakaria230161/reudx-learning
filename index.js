// create store
const {createStore} = require ('redux');

// Defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
// const ADD_USER = 'ADD_USER';

// State - apni ja niye kaj korte chachen tai state
const initialCounterState = {
  count: 0,
  users: '',
}

const initialUserState = {
  users: [
    {name: 'Jakaria'}
  ],
}

// Action - OBJECT -2(type, payload)

// Increment counter
const incrementCounter= () => {
  return{
      type: INCREMENT,
  };
};

// Decrement Counter
const decrementCounter = () => {
  return{
    type: DECREMENT,
  };
};

// PayLoad - add user(action) notun user er data dekhate hoile use kora lage(payLoad)

// const addUser = () => {
//   return{
//     type: ADD_USER,
//     payload: {name: "Imran"}
//   };
// };

// simple theory of Reducer
// reducer = is a simply pure function(je function input niye definitely output return korbe)
// reducer er kaj = amader ja ja logic ache sob kichu handle kore, amader je state ache setake update kora.(action typer er upor based kore update korbe)

// Create reducer for counter
const counterReducer = (state =initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      // definitely protita action type er jonne action thakbe
      return{
        ...state,
        count : state.count + 1
      }
      
      case DECREMENT:
        return{
          ...state,
          count : state.count - 1
        }
      
  
    default:
      state;
  }
}

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())


// Redux requirements
/* 
1, State
2, dispatch an action > type > Increment or decrement and payload.
3,reducer > update
4, store(jar kaj value ke store kore rekhe deowa) 
STORE er 3 ta obostha ache:
  1.getState() > jar maddhome state er obostha gulo dekhte parbo
  2.dispatch() > jar maddhome kono ekta actin ke dispatch korte parbo
  3.subscribe() > jar maddhome view sathe store ke subscribe korbo
*/