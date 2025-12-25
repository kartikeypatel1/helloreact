import React from 'react'

function PostCard(props) {
  return (
    <div className="post-card">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  )
}

export default PostCard
