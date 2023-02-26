import React from 'react'

function UserCard({ready, number}) {
  return (
    <div className='rounded-sm bg-slate-700 m-20 p-4'>
      <h1 className='font-bold'>Mi {number} tarea</h1>
      <span className={ready ? 'bg-green-400' : 'bg-red-500' }>
          {ready ? 'Tarea Realizada' : 'Tarea por hacer'}
        </span>
    </div>
  )
}

export default UserCard