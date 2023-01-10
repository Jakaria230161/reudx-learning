// Defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// State - apni ja niye kaj korte chachen tai state
const initialCounterState = {
  count: 0,
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
const decrementCoUnter = () => {
  return{
    type: DECREMENT,
  };
};

// PayLoad - add user(action) notun user er data dekhate hoile use kora lage(payLoad)

const addUser = () => {
  return{
    type: ADD_USER,
    payload: {name: "Imran"}
  };
};

// Redux requirements
/* 
1, State
2, dispatch an action > type > Increment or decrement and payload.
3,reducer > update
4, store > update in the view
*/