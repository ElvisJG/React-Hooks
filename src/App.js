import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(10);

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <div>{count}</div>
      {/* This method avoids race conditions */}
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
