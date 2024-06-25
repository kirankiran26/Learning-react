import React, { useEffect, useRef, useState } from 'react'

const Example1 = () => {
    const [name,setname]=useState("");
    const count=useRef(1);
    useEffect(()=> {
        count.current=count.current+1;
    })
  return (
    <div>
        <input type="text" name="" id="" placeholder='Enter Your name ' onChange={(evt)=>setname(evt.target.value)}/>
        <h1> {count.current}    </h1>
    </div>
  )
}

export default Example1