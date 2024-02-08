import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counterSlice';
import { Link } from 'react-router-dom';

export function App() {
  const count = useSelector(function (state) {
    return state.counter.value;
  });

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment());
  }

  return (
    <>
      <div>
        <button onClick={handleClick}> increment{count} </button>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </>
  );
}
