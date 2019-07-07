import React, { useRef, useEffect, useState } from 'react';
import { useFetch } from './useFetch';

export const Hello = () => {
  const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // http://numbersapi.com/43/trivia
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  console.log('hello renders: ', renders.current++);

  return (
    <div>
      <div>{!data ? 'loading...' : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c++)}>Increment</button>
    </div>
  );
};
