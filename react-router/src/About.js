import React from 'react'
import History from './History'
function About(){
    const myfunc= () =>{
        console.log("myfunc")
        History.push('/contact')  
    }
    return(
      <div>
        About page
        <button onClick={myfunc}>Function</button>
        
      </div>
    )
  }
  export default About