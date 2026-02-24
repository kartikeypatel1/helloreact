import React from "react";

function FilterProducts() {
  const profucts = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Laptop Pro", price: 1999 },
    { id: 3, name: "Laptop Air", price: 1499 },
    { id: 4, name: "Laptop Mini", price: 799 },
  ];
  return (<div>
    {profucts.filter(product => product.price > 1000).map(product => (
      <div key={product.id}>
        <h3>{product.name}</h3> 
        <p>Price: ${product.price}</p>
        </div>
    ))}
  </div>);
}

export default FilterProducts;
