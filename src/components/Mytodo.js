import React from 'react';
import Todo from './Todo';

const Mytodo = ({ todos, setTodos, filterTodos }) => {
    console.log(todos)
    return (
        <div className="todocontainer">
            <ul className="todo-list">
                {filterTodos.map((todo) => (
                    <Todo key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    )
}

export default Mytodo
