import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Form() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('Form submitted with values:'+name+', '+email+', '+password);
    }   


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>

                Name: <input value={name} name="name" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                Email: <input value={email} name="email" type='email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                Password: <input value={password} name="password" type='password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
