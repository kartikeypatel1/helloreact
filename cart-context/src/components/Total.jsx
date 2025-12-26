import { useContext } from "react";
import { CartContext } from "../context/Cart.jsx";

function Total() {
  const { items, total } = useContext(CartContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Cart Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Total Amount: ₹{total}</h3>
    </div>
  );
}

export default Total;
