import { useContext } from "react";
import { CartContext } from "../context/Cart.jsx";

function Item({ name, price }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <span>{name} - ₹{price}</span>
      <button onClick={() => addToCart({ name, price })}>
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
