import React, { useRef } from 'react'

const Example2 = () => {
    const focude=useRef("")
    const focuse =()=> {
        focude.current.focus()
    }
  return (
    <div>
        <input type="text" ref={focude} placeholder='Enter Your name '/>
        <button onClick={focuse}> Update</button>
        <input type="text" placeholder='SNkajnkjds' />
    </div>
  )
}

export default Example2