import React from 'react'


function UserCard(props) {
  return (
    <div className='user-card'>
        <div className='img-card'><img className='user-img'/></div>
        <h3>{props.data.name.first}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city},{props.data.location.state}</p>
    </div>
  )
}

export default UserCard
