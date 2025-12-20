import './App.css'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'
import Todoitem from './components/Todoitem.jsx'
import './style.css'

function App() {
  return (
    <div className="todo-container">
      <Header title="Kartikey TODO" />
      <Todoitem text="Eat"/>
      <Todoitem text="Sleep"/>
      <Todoitem text="playing"/>
      <Todoitem completed={true} text="dance"/>
      <Todoitem text="gaming"/>
      <Button />
    </div>
  )
}
export default App;
