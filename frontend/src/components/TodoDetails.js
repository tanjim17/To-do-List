const TodoDetails = ({ todo }) => {

    return (
      <div className="todo-details">
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        <p>{todo.date}</p>
      </div>
    )
  }
  
  export default TodoDetails