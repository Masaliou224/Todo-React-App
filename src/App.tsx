
import { AddTodo } from './components/AddTodo'
import { TodoList } from "./components/TodoList";
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  return (
    <div className='items-center mt-5'>
      <Toaster position="bottom-center" />
      
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
