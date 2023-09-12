import { createStore } from 'redux';

const counterReducer = (state = { counter: 0, showCounter: false }, action) => {
    if (action.type === "ADD") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    } else if (action.type === "REMOVE") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    } else if (action.type === "INCREASE") {
        return {
            counter: state.counter + action.number,
            showCounter: state.showCounter
        };
    } else if (action.type === "TOGGLE") {
        return {
            counter: 0,
            showCounter: !state.showCounter
        }
    } else {
        return state;
    }
};

const store = createStore(counterReducer);

export default store;