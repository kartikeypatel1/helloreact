import React from 'react'

function Product(props) {
  return (
    <div className='product'>
        <img src={props.image} alt={props.alt} />
      <h2>{props.name}</h2>
        <p>{props.description}</p>
            <p>Price: ${props.price}</p>
            <button className='addCart'>Add to Cart</button>
            <button className='buyNow'>Buy Now</button>       
    </div>
  )
}

export default Product
