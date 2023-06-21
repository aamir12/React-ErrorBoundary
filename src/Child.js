import React, { useState, useEffect } from "react";
import "./style.css";

export default function Child() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  //it will not work -- Event handler
  const errorGenerator = () => {
    throw new Error("Error Generator");
  };

  useEffect(() => {
    if (count === 3) {
      throw new Error("Some Custom Error");
    }
  }, [count]);

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={increment}>increment {count}</button>
      <button onClick={errorGenerator}>Error</button>
    </div>
  );
}
