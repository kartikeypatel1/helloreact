import React,{ useEffect,useState} from 'react'

function UseEffect() {
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(10);
    useEffect(()=>{
        console.log("useEffect called");
        return function(){
            console.log("cleanup function called");
        }
    },[]);
    useEffect(()=>{
        console.log("count changed",count);
        return function(){
            console.log("cleanup for count and count2",count);
        }
    },[count]);
  return (
    <div>
      <p>count is {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment useEffect</button>
        <p>count2 is {count2}</p>
        <button onClick={()=>setCount2(count2+2)}>Increment useEffect count2</button>
    </div>
  )
}

export default UseEffect
