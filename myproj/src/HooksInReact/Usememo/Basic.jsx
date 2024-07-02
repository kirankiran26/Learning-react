import React, { useEffect, useState } from 'react'

const Basic = () => {
  const[count ,setcount]=useState(0)
  return (
    <div>
      <input type="number" name="" placeholder='Enter Your name...' id="" value={count} onChange={(evt)=>setcount(evt.target.value)} />
      <h1>The number is {count}</h1>
    </div>
  )
}

export default Basic