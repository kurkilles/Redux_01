import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = number => {
    dispatch(counterActions.increase(number))
  }

  const decrementtHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => { 
    dispatch(counterActions.toggle())
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
