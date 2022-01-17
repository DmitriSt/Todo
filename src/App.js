import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/reducers/counterSlice'
import { setLoading } from './store/reducers/appSlice';
import User from './components/user/User';

const App = () => {
  const loading = useSelector((state) => state.app.loading);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading());
    }, 1000);
  }, [dispatch]);

  return (
      !loading ? (
        'Loading...'
      ) : (
        <div>
          <div>
            <button
              data-testid="increment"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span data-testid="count">{count}</span>
            <button
              data-testid="decrement"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              data-testid="incrementByAmount"
              aria-label="incrementByAmount value"
              onClick={() => dispatch(incrementByAmount(2))}
            >
              Increment By Amount
            </button>
          </div>
          <User />
        </div>
      )
    
  )
}

export default App;