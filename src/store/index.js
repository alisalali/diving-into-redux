import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// Initialize the redux slice state
const counterSlice = createSlice({
  name: "counter", // Name of the slice state
  initialState: initialCounterState, // Initial state
  reducers: {
    // List of reducers
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
      console.log(action);
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth", // Name of the slice state
  initialState: initialAuthState, // Initial state
  reducers: {
    // List of reducers
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions; // export counterSlice actions
export const authActions = authSlice.actions; // export counterSlice actions
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
