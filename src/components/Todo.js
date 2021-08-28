import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {

    function deleteHandle() {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    function completeHandler() {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed, ...todos
                    };
                }
                return item;
            })
        )


    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={completeHandler}>Done
            </button>
            <button className="trash-btn" onClick={deleteHandle}>
                Delete
            </button>
        </div>
    )
}

export default Todo
