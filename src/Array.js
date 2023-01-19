import React, { useState } from "react";

function Array() {
  const [numbers, setNumbers] = useState([]);
  const addNumber = () => {
    setNumbers([
      ...numbers,
      {
        id: numbers.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addNumber}>add a number</button>
      <ul>
        {numbers.map((number) => (
          <li key={number.id}>{number.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Array;
