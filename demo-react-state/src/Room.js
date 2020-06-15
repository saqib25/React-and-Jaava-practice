import React,{useState} from 'react'
import './Room.css'

function Room(){
    let [islit,setlit]= useState(false);
    let [age,setAge]=useState(23);
    // function updateList(){
    //     console.log("Button clicked")
    //     setlit(!islit);
    //     setAge(++age);
    //     // islit= !islit
    //     // age=67;
    // }
    const updateAge = () =>{
        console.log("Age Button clicked")
        setAge(++age);
    }

    return(
        <div className={`room ${islit? 'lit': 'dark'}`}>
         This room is : { islit? 'lit': 'dark' }
         <br/>
         Age:{age}
    <button onClick={updateAge}>AGE increase</button>
         <br />
         <button onClick={() => setlit(!islit)}>Toogle Light</button>
        </div>
    )
}
export default Room
