import React from 'react'

function UserCard({ name, amount, programming, address }) {
  return (
    <div>
      <h1 className='text-emerald-400'>{name}</h1>
      <p>${amount}</p>
      <p className='text-green-500'>{programming ? 'Programming' : 'Resting'}</p>
      <p>-{address.street}</p>
      <p>-{address.city}</p>
    </div>
  )
}

export default UserCard