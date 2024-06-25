import React, { useEffect, useReducer, useState } from 'react'
const baseapiurl="https://jsonplaceholder.typicode.com/users";
const initialState={
  userdata:[],
  isloding:false,
  haserror:false,
}

const reducer=(state,action) =>{
  switch (action.type){
    case "LODING":
      return({
        ...state,
        isloding:action.paylode,
      })
    case "ADDINGDATA":
      return({
        ...state,
        userdata:action.paylode,
        isloding:false,
        haserror:false,
      })
    case "ERROR":
      return({
        ...state,
        haserror:action.paylode,
        isloding:false,
      })
      case "UPDATION":
        return {
          ...state,
          userdata: state.userdata.map(user =>
            user.id === action.paylode.id ? action.paylode : user
          ),
        };
      
    default:
      return state;
  }
}
const Example2 = () => {
  const fetchdata=async (url)=> {
    dispatch({type:"LODING",paylode:true})
   try {
    const responce=await fetch(url);
    if (!responce.ok) {
      throw new Error("Network error...");
    }
    const forMatedData=await responce.json();
    dispatch({type:"ADDINGDATA",paylode:forMatedData})
    dispatch({type:"LODING",paylode:false});
    dispatch({type:"ERROR",paylode:false})
   } catch (error) {
    dispatch({type:"ERROR",paylode:error.message});
   }
  
  }
  
  const[state,dispatch]=useReducer(reducer,initialState);
  const [edit,setedit]=useState(null);

  const handleEdit=(editobj)=> {
    console.log(editobj);
    setedit(editobj);
  }

  const handelchange=(evt)=> {
    const {name,value}=evt.target;
    setedit({...edit,[name]:value});
  }


  const handelupdate=()=> {
    dispatch({
      type:"UPDATION",
      paylode:edit
    })
    setedit(null)
  }



  useEffect(()=> {fetchdata(baseapiurl)},[])
  return (
    <div className='card'>
      {state.isloding && <h1>Loding......</h1>}
      {state.haserror && <h1>{haserror.paylode}</h1>} 
      {!state.isloding && !state.haserror && state.userdata.map((eachobj,index)=>{
        const{name,username,id}=eachobj;
       return(
        <div key={id}>
         {
          edit&&edit.id==id ?(
            <EditingUserData user={edit} handelchange={handelchange} handelupdate={handelupdate} />
          ):(
            <div>
               <h2>{name}</h2>
                  <p>{username}</p>
                  <button onClick={() => handleEdit(eachobj)}>Edit</button>
            </div>
          )
         }
        </div>
       )
      })}
    </div>
  )
}
const EditingUserData = ({ user, handelchange, handelupdate }) => {
  return (
    <div>
     <input type="text" name="name"  value={user.name} onChange={handelchange}/>
     <input type="text" name="username"  value={user.username} onChange={handelchange} />
     <button onClick={handelupdate}>update</button>
    </div>
  );
};

export default Example2