import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item.jsx'
import Total from './components/Total.jsx'

function App() {
  return (
    <>
     <Item name="Laptop" price={999} />
     <Item name="Smartphone" price={699} />
     <Item name="Headphones" price={199} />
      <Total />
    </>
  )
}

export default App;
