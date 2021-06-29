import React from "react";
import { plusOne } from "../../../../Redux/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function SimpleDescription() {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(state.counter);

  return (
    <div>
      <button onClick={() => dispatch(plusOne())}>Car</button>
    </div>
  );
}

export default SimpleDescription;
