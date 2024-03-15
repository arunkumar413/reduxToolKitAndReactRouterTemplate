import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

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
        <NavBar />
        <h2> Home</h2>
        <button onClick={handleClick}> increment {count} </button>
      </div>
    </>
  );
}
