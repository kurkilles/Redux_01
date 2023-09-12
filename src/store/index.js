import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "ADD") {
        return { counter: state.counter + 1 };
    } else if (action.type === "REMOVE") {
        return { counter: state.counter - 1 };
    } else if (action.type === "INCREASE") {
        return { counter: state.counter + action.number };
    } else {
        return state;
    }
};

const store = createStore(counterReducer);

export default store;