import React, { useState } from 'react'

 const Func=()=>{
     const [state,setState]= useState(0)

    //  useEffect(() =>{
    //      document.title=state
    //  },[])
     const increament= () =>{
        setState (state +1)
        console.log('Increaments:') 
     }
     const decreament= () =>{
        setState (state -1)
        console.log('Decreaments:') 
     }
     return(
         <div>
          <h5>Counter App!</h5>
          {state}
          <br /> <br />
          <button onClick={increament}>Increament</button>                                                                                                                                      
          <button onClick={decreament}>Decreament</button>   
         </div>
     )
 }
export default Func
