import { createSlice } from "@reduxjs/toolkit";

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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// export const counterActions = counterSlice.actions;
// export default counterSlice.reducer;
