import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

import { counterActions } from "../store/counter"; // import actions from store

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch(); // initialize dispatch function
  const counter = useSelector((state) => state.counter.counter); // to read store state object
  const show = useSelector((state) => state.counter.showCounter); // to read store state object

  const incrementHandler = useCallback(
    () => dispatch(counterActions.increment()),
    []
  );

  const decrementHandler = useCallback(
    () => dispatch(counterActions.decrement()),
    []
  );
  const increaseHandler = useCallback(
    () => dispatch(counterActions.increase({ amount: 10 })), // dispatch increase action with payload
    []
  );
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
