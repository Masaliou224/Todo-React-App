import { TodoItem } from './TodoItem'
import { useTodo } from '../context'
// import { useEffect, useState } from 'react'
// import { get } from 'https';
// import { getTodos } from '../apiService';

// import { SiStarship } from 'react-icons/si'

export const TodoList = () => {
  const { todos } = useTodo()

// export const TodoList: React.FC = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const todosData = await 
//         getTodos();
//         setTodos(todosData);
//       } catch (error) 
//     };

//     fetchTodos();
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           {todo}
//         </div>
//       ))}
//     </div>
//   )
// }


  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl ">
          
          You have nothing to do!
        </h1>
      </div>
    )
  }

  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto text-white">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}