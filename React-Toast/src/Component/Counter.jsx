import React from 'react'
import useCounter from '../CustomHook.jsx/useCounter'

function Counter() {
    const {count,increment,decrement,reset}= useCounter(0,2)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter