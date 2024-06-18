import React, { useEffect, useState } from 'react'

const Basic = () => {
    const[count,setcount]=useState(0);
    const[pagewidth,setpagewidth]=useState(window.innerWidth);
    useEffect(()=> {
        const resizehandler=window.addEventListener("resize",()=>{
            setpagewidth(window.innerWidth);
        })
        console.log("I am in  useeffect ");
    }, [count])
   
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>count</button>
        <h1>{pagewidth}</h1>
    </div>
  )
}

export default Basic