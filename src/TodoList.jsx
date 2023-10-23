import TodoItem from "./TodoItem"
import "./styles.css"

const TodoList = ({todos, toggleTodo, deleteTodo}) =>{
    return <ul className="list">
        {todos.map(todo => {
          return  <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        })}
        </ul>
}

export default TodoList