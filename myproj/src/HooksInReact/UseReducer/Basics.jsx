import React from 'react'
import { useReducer } from 'react';
import './Example2.css'
const initialstate = {
    data: [
        {
            id: 100,
            username: "Kiran P S ",
            email: "kpapishe@gitam.in",
        },
        {
            id: 101,
            username: "Kiran P S ",
            email: "kpapishe@gitam.in",
        },
        {
            id: 103,
            username: "Kiran P S ",
            email: "kpapishe@gitam.in",
        }
    ]
};
const reducer=(state,action)=> {
   if (action.type==="DELETION") {
    return{
        ...state,
        data:state.data.filter((eachobj)=>eachobj.id!=action.paylode)
    }
   
   }
   else {
    return state;
   }
}
const Basics = () => {
    const[state,dispatch]=useReducer(reducer,initialstate);
    const handeldeletion=(indextodelet)=> {
       
        dispatch({
            type:"DELETION",
            paylode :indextodelet,
        })
    }
  return (
    <div>
       {
        state.data.map((eachobh,index)=> {
            const{id,username,email}=eachobh;
            return(
                <div>
                    <h1>{username}</h1>
                    <h5>{email}</h5>
                    <button onClick={()=>handeldeletion (id)}>Delete</button>
                </div>
            )
        })
       }
    </div>
  )
}

export default Basics