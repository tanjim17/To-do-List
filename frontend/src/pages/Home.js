import { useEffect, useState } from "react"

// components
import TodoDetails from "../components/TodoDetails"
import TodoForm from "../components/TodoForm"

const Home = () => {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:4000/api/todo/list')
      const json = await response.json()
      if (response.ok) {
        setTodos(json)
      }
    }
    fetchTodos()
  }, [])

  return (
    <div className="home">
      <div className="todos">
        {todos && todos.map(todo => (
          <TodoDetails todo={todo} key={todo._id} />
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default Home