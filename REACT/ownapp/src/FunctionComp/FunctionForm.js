import React, { useState } from 'react'

const FunctionForm=() =>{
    const [form,setForm]= useState({
        firstName: "",
        lastName: ""
    })
    const submit =(e) =>{
    e.preventDefault()
    let _firstName= form.firstName
    let _lastName= form.lastName
    if (_firstName!==""){
        console.log('First Name: ' + _firstName)
        console.log('Last Name: ' + _lastName)
    }
    else{
        alert("plzz fill all feild")
    }
    
    setForm({
        firstName: "",
        lastName: ""
    })
    }
    const changeHandler=(event)=>{
        let {name,value} =event.target
       setForm (prev => ({
           ...prev,
           [name]: value,
       }))
    }
    return (
        <div>
           <form onSubmit={submit}>
               First Name:
               <input placeholder="FirstName" name="firstName" onChange={changeHandler} value={form.firstName}></input>
               <br /> <br />
               Last Name
               <input placeholder="LastName" name="lastName" onChange={changeHandler} value={form.lastName}></input>
               <br /> <br />
               <button type="submit">Submit</button>
               </form> 
        </div>
    )
}

export default FunctionForm

