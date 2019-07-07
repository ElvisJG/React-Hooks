import React, { useState, useEffect } from 'react';
import './App.css';

import { useForm } from './components/useForm';
import { Hello } from './components/Hello';
import { useFetch } from './components/useFetch';

function App() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  });
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // http://numbersapi.com/43/trivia

  return (
    <div className='App'>
      <div>{!data ? 'loading...' : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <br />
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input name='email' value={values.email} onChange={handleChange} />
      <input
        name='firstName'
        placeholder='first name'
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
