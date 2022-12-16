import React from "react";
import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2:2
};

const reducer = (initialState, action) => {
  switch (action.type) {
    case "increment":
      return {...initialState, counter:initialState.counter + 1}
    case "decrement":
      return {...initialState, counter:initialState.counter - 1}
    case "increment2":
      return {...initialState, counter2:initialState.counter2 + 2}
    case "decrement2":
      return {...initialState, counter2:initialState.counter2 - 2}
    default:
      return initialState.counter;
  }
};

const Reducer2 = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{counter.counter}</h2>
      <button onClick={()=>dispatch({type:"increment"})}> Add One</button>
      <button onClick={()=>dispatch({type:"decrement"})}> Min One</button>
      <br />
      <h2>{counter.counter2}</h2>
      <button onClick={()=>dispatch({type:"increment2"})}> Add Two</button>
      <button onClick={()=>dispatch({type:"decrement2"})}> Min Two</button>
    </div>
  );
};

export default Reducer2;
