import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counterSlice';
import { Link } from 'react-router-dom';

export function Home() {
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
        <h2> Home</h2>
        <button onClick={handleClick}> increment {count} </button>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </>
  );
}
