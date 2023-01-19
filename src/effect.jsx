import React, { useState } from "react";
import { useEffect } from "react";

function Effect() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    document.title = `you clicked ${count} times`;
  }, []);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <h1>{count}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default Effect;
