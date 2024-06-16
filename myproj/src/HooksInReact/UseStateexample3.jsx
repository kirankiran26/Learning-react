import React, { useState } from 'react'

const UseStateexample3 = () => {
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[passward,setpassward]=useState("");



    // const updationOfName=(evt)=> {
    //     setname(evt.target.value)
    // }
    // const updationOfemail=(evt)=> {
    //     setemail(evt.target.value);
    // }
    // const updationOfPassward=(evt)=> {
    //     setpassward(evt.target.value);
    // }

    //the state val that is name,email,passward and the name  in the input tag should be same and name === in this function 



    // const updationhandler = (evt) => {
    //     const { name, value } = evt.target;
    //     if (name === "name") {
    //         setname(value)
    //     } else if (name === "email") {
    //         setemail(value);
    //     } else if (name === "passward") {
    //         setpassward(value);
    //     }
    // }


    const preventingTheDefault=(evt)=> {
        const userdit={
            usename:name,
            useremil:email,
            userpassward:passward,
            
        }
        console.log(userdit);
        evt.preventDefault();
    }
  return (
    <div>
        <form onSubmit={preventingTheDefault} >
            <div className="name">
                <input type="text" name="name" id="name" placeholder='Enter your name ' value={name} onChange={(evt)=>setname(evt.target.va)}/>
            </div>
            {/* <div className="email">
                <input type="email" name="email" id="email" placeholder='Enter your email' value={email} onChange={updationhandler}/>

            </div> */}
            <div className="email">
                <input type="email" name="email" id="email" placeholder='Enter your email' value={email} onChange={(evt)=>setemail(evt.target.value)}/>

            </div>
            <div className="passward">
                <input type="password" name="passward" id="passward" placeholder='Enter the passward ' value={passward} onChange={(evt)=>setpassward(evt.target.value)}/>
            </div>
            <div className="submitbttn">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UseStateexample3