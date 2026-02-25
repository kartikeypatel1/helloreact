import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0); 
  useEffect(() => {
    document.title = count;
    console.log('App component mounted');
  }, [count]);
  return (
    <div>
      <h2>Hello from App Component</h2>
<p>Count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increment Count</button>  
<button onClick={() => setCount(0)}>Reset Count</button>
    </div>
  )
}

export default UseEffect
