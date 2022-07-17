import TodoItem from "./TodoItem";

function TodoList({todos, RemoveItem}) {
    return (
        <ul className="task-box">
          {
            todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} RemoveItem={RemoveItem} />
            })
          }
        </ul>
    );
}

export default TodoList;