import React,{useContext} from 'react';
// import logo from './logo.svg';
import './App.css';
import ValueContext from './Valuecontext';
// import Room from './Room'
// import Parent from './Parent';

function Child() {
let value= useContext(ValueContext)
let updateValue= value[1];
console.log("value",value)
  return (
    <div >
        Child number {value[0]}
        <button onClick={ () =>{updateValue(++value[0])}}>Update value</button>
        
    </div>
  );
}

export default Child;
