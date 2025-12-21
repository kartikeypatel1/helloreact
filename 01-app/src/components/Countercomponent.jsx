import React,{useState} from 'react'

function Countercomponent() {
    const [count,setCount]=useState(15);
    
  return (
    <div>
      <p>Count component-{count}</p>
      <h3>Number is {count%2===0?"Even":"odd"}</h3>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button>
   
    </div>
  )
}

export default Countercomponent;
