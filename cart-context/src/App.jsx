import Item from "./components/Item.jsx";
import Total from "./components/Total.jsx";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <Item name="Apple" price={50} />
      <Item name="Banana" price={20} />
      <Item name="Orange" price={30} />

      <Total />
    </div>
  );
}

export default App;
