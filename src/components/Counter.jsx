import React, { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1 className='text-white'>Counter: {counter}</h1>
      <button className='text-white bg-slate-700 mr-2' onClick={() => {
        setCounter(counter + 1)
      }}>Add</button>
      <button className='text-white bg-slate-700 mr-2' onClick={() => {
        setCounter(counter - 1)
      }}>Take</button>
      <button className='text-white bg-slate-700 mr-2' onClick={() => {
        setCounter(0)
      }}>Reset</button>
    </div>
  )
}

export default Counter