import { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;