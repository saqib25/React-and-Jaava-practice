import React from 'react';
import Globalstat from './Globalstat';
import Allcount from './Allcount';

export default function Infopanel({currentScreen}) {

    if(currentScreen === 0)
        return <Globalstat />
    else if(currentScreen === 1)
        return <Allcount />
    
    else return <Globalstat />
}