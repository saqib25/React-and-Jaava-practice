import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Room from './Room'
// import Parent from './Parent';
import Child from './Child'
import Child2 from './Child2'
function Parent(props) {

  return (
    <div>

        <Child ></Child>
        <Child2></Child2>

    </div>
  );
}

export default Parent;
