import React from "react";
import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment1":
      return state + 1;
    case "decrement1":
      return state - 1;
    case "increment2":
      return state + 2;
    case "decrement2":
      return state - 2;
    default:
      return state; 
  }
};

const Reducer = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => dispatch("increment1")}>Increment By 1</button>
      <button onClick={() => dispatch("decrement1")}>Decrement By 1</button>
      <br />
      <button onClick={()=>dispatch("increment2")}>Increment By 2</button>
      <button onClick={()=>dispatch("decrement2")}>Decrement By 2</button>
    </div>
  );
};

export default Reducer;
