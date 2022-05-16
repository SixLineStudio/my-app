import React, { useState } from "react";

const Counter = () => {
  let [count, setCounter] = useState(0);
  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCounter((count -= 1));
        }}
      >
        Decrtment
      </button>

      <button
        onClick={() => {
          setCounter((count += 1));
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
