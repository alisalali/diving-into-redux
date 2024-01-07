import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export const counterActions = counterReducer.actions; // export counterSlice actions
export const authActions = authReducer.actions; // export counterSlice actions
export default store;

// configureStore can combine multiple reducers into one store
/* configureStore({reducer: { 
    counter: counterSlice.reducer,
  }, });
  */

/* const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
}; */
// const subscriberStore = () => {
//   const latestSate = store.getState();
//   console.log(latestSate);
// };

// store.subscribe(subscriberStore);
// store.dispatch({ type: "increment" });
