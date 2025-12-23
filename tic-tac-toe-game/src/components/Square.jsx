import React from 'react'

function Square() {
  return (
    <div style={{
        width: '100%',
        height: '100px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '48px',
        cursor: 'pointer'
    }}className='square'>
      <h5>X</h5>
    </div>
  )
}

export default Square;
