import React, { useState } from 'react'
import ex1use from './ex1use';

const ChExampleone = () => {
  const[count,setcount]=useState(0);
  ex1use(count)
  return (
    <div>
      <button type="button" onClick={()=>setcount(count+1)}>count</button>
    </div>
  )
}

export default ChExampleone