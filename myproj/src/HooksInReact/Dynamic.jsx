import React, { useState } from 'react'

const Dynamic = () => {
  const[showData,setshowData]=useState(false);
  const helper=()=> {
    setshowData(!showData);
  }
  return (
    <div>
      <button onClick={helper}>Show </button>
      {
        showData? (
          <div>
            Lorem ipsum dolor sit amet, consectetur
             adipisicing elit. Vero quibusdam laborum eos nam repudiandae illum sit voluptates. Quisquam, ex delectus!
          </div>
        ) :(
          <h3>Click show to Display data  </h3>
        )
      }
    </div>
  )
}

export default Dynamic