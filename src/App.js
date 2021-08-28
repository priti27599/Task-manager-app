import React, { useState, useEffect } from 'react'
import './App.css'
import Myform from './components/Myform'
import Mytodo from './components/Mytodo'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  function filterHandler() {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true))
        break

      case 'active':
        setFilterTodos(todos.filter((todo) => todo.completed === false))
        break

      default:
        setFilterTodos(todos)
        break
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="app">
      <Myform
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Mytodo todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  )
}

export default App
