import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Child from './Child';
import './style.css';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    </div>
  );
}
