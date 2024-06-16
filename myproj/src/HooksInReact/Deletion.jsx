import React, { useState } from 'react'
const nums=[1,2,3,4,5,6];
const Practice = () => {
    const [numsarray,setnumsarray]=useState(nums)
    const deletionofitem=(newindex)=> {
            const filterdata=numsarray.filter((_,index)=> index!=newindex);
            setnumsarray(filterdata);
    }
  return (
    <div>
        <ul>
            {
                numsarray.map((number,index)=>(
                    <li>
                        <h1 onClick={()=>deletionofitem(index)}>{number}</h1>
                    </li>
                ))
            }
        </ul>
        but
    </div>
  )
}

export default Practice