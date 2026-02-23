import React from 'react'

function Person3(props) {
  return (
    <div>
      <h1>Name={props.name}</h1>
        <h1>Age={props.age}</h1>
        <h3>{props.age>18?"You are an adult":"You are a minor"}</h3>
    </div>
  )
}

export default Person3
