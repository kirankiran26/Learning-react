import React, { useCallback, useState } from 'react'

const UbBasics = () => {
  const[age,setAge]=useState(100);
  const[salary,SetSalary]=useState(7000);
  const Title=({compname})=> {
    return(
      <div>
        <h1>This is learning of  {compname}</h1>
      </div>
    )
  }
  const handelAge=useCallback(()=>{
    console.log("Age is rendered ");
    setAge(age+1);
  })
  const handelSalary=()=> {
    console.log("Salary is rendered ");
    SetSalary(salary+1000);
  }
  return (
    <div>
      <Title compname={"Call Back "}/>
      <h1>The Age {age}</h1>
      <button  type="button" onClick={handelAge}>Increment age </button>
      <h1>The Salary {salary}</h1>
      <button type="button" onClick={handelSalary}>salary increment </button>
    </div>
  )
}

export default UbBasics