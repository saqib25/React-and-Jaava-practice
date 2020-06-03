
import React from 'react'

function _PropsFunc(props) {
    return (
        <div>
           <h1>{props.text}</h1>
           <h1>{props.obj.name}</h1> 
        </div>
    )
}

export default _PropsFunc


