import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: false },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
            if (state.showCounter === true) {
                state.counter = 0;
            }
        }
    }
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;