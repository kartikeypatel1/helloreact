import React from 'react'

function Events() {
    const handleClick = () => {
        alert("Button Clicked!")
    }   
  return (
    <div>
      <h1>we are learning React </h1>
        <button onMouseOver={handleClick}>Click Me</button>
    </div>
  )
}

export default Events 
