import React, { useEffect, useState } from 'react'
const URL="https://jsonplaceholder.typicode.com/users";
const Useeffectexample1 = () => {
    const[data,setdata]=useState([]);
    const[loding,setloding]=useState(false);
    const[error,seterror]=useState({
        state:false,
        meaaage:"",
    })
    const fetchingdata=async (url)=> {
       try {
        setloding(true);
        let responce=await fetch(url);
        let formmateddaata=await responce.json();
        console.log(formmateddaata);
        setdata(formmateddaata);
        setloding(false);
       } catch (error) {
        seterror({
            state:true,
            meaaage:error.meaaage,
        })
        setloding(true);
       }
    }
    useEffect(()=> {
        fetchingdata(URL)
    },[])
  return (
    <div>
      {
        loding?(
            <h1>Loding......</h1>
        )
        : (
            error.state?(
                <h1>{error.meaaage}</h1>
            )
            : 
            (
                data.map((eachobj,index)=>(
                    <h2>{eachobj.name}</h2>
                ))
            )
        )
      }
    </div>
  )
}

export default Useeffectexample1