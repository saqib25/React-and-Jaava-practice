import React from 'react'
import Child from './Child'
import Context from './Context'
export default function Parent() {
    return (
        <div>
            hello from Parent
            <Child />
            {/* ==child2 context api */}
            <Context />
            {/* ====child2 context api */}

        </div>
    )
}
