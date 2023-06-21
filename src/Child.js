import React, { useState, useEffect } from 'react';
import './style.css';

export default function Child() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 3) {
      throw new Error('No users provided!');
    }
  }, [count]);

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={increment}>increment {count}</button>
    </div>
  );
}
