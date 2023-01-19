import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add One</button>
    </div>
  );
};

export default App;
