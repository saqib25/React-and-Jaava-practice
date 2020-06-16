import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Room from './Room'
import Parent from './Parent';
import ValueContext from './Valuecontext';
function App() {
  // let [number,setNumber]= useState(45)
  // let value=81;
  let value=useState(48)
  return (
    <ValueContext.Provider value={value}>
    <div className="App">
     {/* <Room></Room> */}
     <Parent></Parent>
     {/* <button onClick={()=>{setNumber (++number)}}>Update Number</button> */}
    </div>
    </ValueContext.Provider>
  );
}

export default App;
