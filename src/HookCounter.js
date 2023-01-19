import React, { useState } from "react";

function HookCounter() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add One
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Remove One
      </button>

      <button
        onClick={() => {
          for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1);
          }
        }}
      >
        Increament Five
      </button>

      <button onClick={() => setCount(initialValue)}>Reset</button>
    </div>
  );
}

export default HookCounter;
