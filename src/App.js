import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div>
      <button
        onClick={() => {
          setCount(c => c + 1);
          setCount2(c => c + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
