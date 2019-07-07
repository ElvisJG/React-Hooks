import React, { useState, useEffect, useRef } from 'react';
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

  const inputRef = useRef();

  const [showHello, setShowHello] = useState(true);

  return (
    <div className='App'>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name='email'
        value={values.email}
        onChange={handleChange}
      />
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

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
}

export default App;
