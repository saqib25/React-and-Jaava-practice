import React,{useContext,useReducer} from 'react';
import './App.css';
import numberReducer from './numberReducer';

function Child2() {
    let [state,dispatch]= useReducer(numberReducer,52)

  return (
    <div >
        Child2 {state}
        <button onClick={ () =>{dispatch({type: "INCREMENT"})}}>Increament</button>
        <button onClick={ () =>{dispatch({type: "DECREMENT"})}}>Decreament</button>
    </div>
  );
}

export default Child2;
