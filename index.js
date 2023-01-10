// Defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

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

