import React from 'react';
// import './Style.css';

const Myform = ({ inputText, setInputText, todos, setTodos, setStatus }) => {


    function handleChange(e) {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([
            { text: inputText, completed: false, id: Math.random() * 1000 }, ...todos
        ]);
        setInputText("");
    }

    function handleClear() {
        setTodos([]);
    }

    function statusHandler(e) {
        setStatus(e.target.value);
    }
    return (
        <div>
            <header>
                <h1>Task Manager App</h1>
                <button className="btn1" onClick={handleClear}>Reset</button>
            </header>

            <form >
                <input type="text" value={inputText} onChange={handleChange} />
                <button className="btn" type="submit" onClick={handleSubmit}>Add Todo</button>

                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Myform
