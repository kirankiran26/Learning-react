import React, { useState } from "react";
import "./UseState2.css";

const data = [
  {
    stname: "Kiran P S",
    roolnums: 564,
    dep: "ECE",
  },
  {
    stname: "Arun P S",
    roolnums: 584,
    dep: "MECH",
  },
  {
    stname: "Arjun P S",
    roolnums: 594,
    dep: "CEE",
  },
  {
    stname: "Kiran P S",
    roolnums: 564,
    dep: "ECE",
  },
  {
    stname: "Arun P S",
    roolnums: 584,
    dep: "MECH",
  },
  {
    stname: "Arjun P S",
    roolnums: 594,
    dep: "CEE",
  },
  {
    stname: "Kiran P S",
    roolnums: 564,
    dep: "ECE",
  },
  {
    stname: "Arun P S",
    roolnums: 584,
    dep: "MECH",
  },
  {
    stname: "Arjun P S",
    roolnums: 594,
    dep: "CEE",
  },
];
const UseState2 = () => {
  const[studentlist,setstudentlist]=useState(data);
  const updatioOfStudent=(index)=> {
    const copyOfStudent=[...studentlist];
    copyOfStudent[index].stname="No Name "
    copyOfStudent[index].roolnums="No Roll Nummber "
    setstudentlist(copyOfStudent);
  }
  return(
    <div className="stdcard">
      {
        studentlist.map((student,index)=>(
          <Studentgenerator key={index} studentname={student.stname} studentRollNumber={student.roolnums} studentDepartment={student.dep} index={index} updatioOfStudent={updatioOfStudent}/>
        ))
      }
    </div>
  )

}
const Studentgenerator=({studentname,studentRollNumber,studentDepartment,index,updatioOfStudent })=> {
 return(
  <div>
  <h2>Name:{studentname}</h2>
  <h3>Roll Number:-{studentRollNumber}</h3>
  <h3>Department{studentDepartment}</h3>
  <button onClick={()=> updatioOfStudent(index)}>click here </button>
</div>
 )
}

export default UseState2;