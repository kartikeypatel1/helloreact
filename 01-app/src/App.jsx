import Timer from './components/Timer.jsx'
import './App.css'
import Button from './components/Button.jsx'
import Countercomponent from './components/Countercomponent.jsx'
import Header from './components/Header.jsx'
import Todoitem from './components/Todoitem.jsx'
import UseEffect from './components/UseEffect.jsx'
import './style.css'
import { useEffect ,useState} from 'react'

function App() {
// const[isvisible,setisvisible]=useState(true);
// useEffect(()=>{
//   console.log("App component mounted");
// },[])
  return (

    <div className="todo-container">
      <Timer/>
      {/* {isvisible?<UseEffect />:null}
      {/* <Header title="Kartikey TODO" />
      <Todoitem text="Eat"/>
      <Todoitem text="Sleep"/>
      <Todoitem text="playing"/>
      <Todoitem completed={true} text="dance"/>
      <Todoitem text="gaming"/>
      <Button /> */}
      {/* <button onClick={()=>setisvisible(!isvisible)}>toggle</button> */} 

    </div>
  )
}
export default App;
