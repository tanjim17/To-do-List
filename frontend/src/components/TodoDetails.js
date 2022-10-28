const TodoDetails = ({ todo, todos, delTodo }) => {
  const clickDel = async () => {
    const response = await fetch('http://localhost:4000/api/todo/' + todo._id, {
      method: 'DELETE'
    })
    if (response.ok) {
      delTodo(todos.filter(t => t._id !== todo._id))
    }
  }

  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <br/>
      <p><small><i>{todo.date.slice(0, 10)}</i></small></p>
      <span className="material-symbols-outlined" onClick={clickDel}>delete</span>
    </div>
  )
}

export default TodoDetails