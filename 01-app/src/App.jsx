import './App.css'
import Button from './components/Button.jsx'
import Header from './components/Header.jsx'
import Todoitem from './components/Todoitem.jsx'
import './style.css'

function App() {
  return (
    <div className="todo-container">
      <Header />
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Button />
    </div>
  )
}

export default App
