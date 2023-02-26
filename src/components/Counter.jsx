import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState()
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={setCounter(counter += 1)}>Sumar</button>
    </div>
  )
}

export default Counter