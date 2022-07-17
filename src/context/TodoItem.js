import { useState } from "react";

function TodoItem({todo, RemoveItem}) {
    const [update, setUpdate] = useState(false);
    return (
        <li className="task">
            <label htmlFor={todo.id}>
                <input type="checkbox" id={todo.id} />
                <p className="">{todo.name}</p>
            </label>
            <div className="settings">
                <i className="zmdi zmdi-more" onClick={() => {
                    setUpdate(!update);
                }}></i>
                <ul className={update ? "task-menu show" : "task-menu"} id={todo.id}>                    
                    <li onClick={() => {
                        RemoveItem(todo);
                    }}><i className="uil uil-trash"></i>Delete</li>
                </ul>
            </div>
        </li>
    );
}
export default TodoItem;