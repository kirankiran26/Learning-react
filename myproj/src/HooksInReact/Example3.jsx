import React, { useState } from 'react'

const Example3 = () => {
  const[isshow,setshow]=useState(false);
  const updationofshow=()=> {
    setshow(!isshow);
  }
  return (
    <div>
      {
        isshow? (
          <h1>Hii I am Kiran  </h1>
          
        )
        : (
          
          <h1>click show to display the missage  </h1>
        )
      }
      <button onClick={updationofshow}>{isshow? "hide":"show "}</button>
    </div>
  )
}

export default Example3