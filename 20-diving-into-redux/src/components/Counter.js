import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import {counterActions} from '../store/counter';

const Counter = () => {
    const dispatch = useDispatch();
    // when changes happen in store, this will update the componenet
    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
        // dispatch({ type: 'increment'});
    };

    const increaseHandler = () => {
        // ! redux toolkit automatically generates action object that contains data passed associated 'payload' key
        dispatch(counterActions.increase(5));
        // dispatch({ type: 'increase', amount: 5 });
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
        // dispatch({ type: 'decrement' });
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
        // dispatch({ type: 'toggle' });
    };

    return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
    );
};

export { Counter };

// ? class-based method

// class Counter extends React.Component {
//     incrementHandler = () => {
//         this.props.increment();
//     };
//
//     decrementHandler = () => {
//         this.props.decrement();
//     };
//
//     toggleCounterHandler = () => {
//
//     };
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
// const mapStateToProps = state => {
//     return {
//       counter: state.counter
//     };
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: 'decrement' }),
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

