import { useState } from 'react'

const TodoForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const todo = {title, description, date}

    const response = await fetch('http://localhost:4000/api/todo', {
      method: 'POST',
      body: JSON.stringify(todo, (key, value) => {
        if (value !== '') return value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDescription('')
      setDate('')
      console.log('new todo added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New To-do</h3>

      <label>Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Description:</label>
      <input 
        type="text" 
        onChange={(e) => setDescription(e.target.value)} 
        value={description}
      />

      <label>Date:</label>
      <input 
        type="date" 
        onChange={(e) => setDate(e.target.value)} 
        value={date} 
      />

      <button>Add</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TodoForm