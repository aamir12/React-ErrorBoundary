import React, { useState, useEffect, useCallback } from "react";
import "./style.css";

export default function Child() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const increment = () => {
    setCount(count + 1);
  };

  //Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

  //it will not work -- Event handler
  const errorGenerator = () => {
    throw new Error("Error Generator");
  };

  //Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users-err/1"
    );

    const responseData = await response.json();
    if (responseData.user.id) {
      console.log("do something");
      setData(responseData);
    }
  }, []);

  useEffect(() => {
    if (count === 3) {
      throw new Error("Some Custom Error");
    }
  }, [count]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={increment}>increment {count}</button>
      <br />
      <button onClick={errorGenerator}>Error not work event Handler</button>
      {JSON.stringify(data)}
    </div>
  );
}
