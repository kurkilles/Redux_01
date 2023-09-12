import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "ADD" })
  }

  const increaseHandler = number => {
    dispatch({
      type: "INCREASE",
      number: number
    })
  }

  const decrementtHandler = () => {
    dispatch({ type: "REMOVE" })
  }

  const toggleCounterHandler = () => { 
    dispatch({ type: "TOGGLE" })
   };

  return (
    <main className={classes.counter}>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler.bind(this,5)}>Increse by 5</button>
        <button onClick={decrementtHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {show && <h1>Redux Counter</h1>}
      {show && <div className={classes.value}>{counter}</div>}
    </main>
  );
};

export default Counter;
