import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // to read store state object
  const show = useSelector((state) => state.showCounter); // to read store state object

  const dispatch = useDispatch(); // initialize dispatch function

  const incrementHandler = useCallback(
    () => dispatch({ type: "increment" }),
    []
  );

  const decrementHandler = useCallback(
    () => dispatch({ type: "decrement" }),
    []
  );
  const increaseHandler = useCallback(
    () => dispatch({ type: "increase", amount: 10 }), // dispatch increase action with payload
    []
  );
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
