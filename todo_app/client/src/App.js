import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterState, setFilterState] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filterState]);

  function getLocalTodos() {
    const localTodos = localStorage.getItem('todos');
    if ( localTodos === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      const parsedLocalTodos = JSON.parse(localTodos);
      setTodos(parsedLocalTodos);
    }
  }

  function saveLocalTodos() {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }

  function filterHandler() {
    switch(filterState) {
      case 'completed':
        setFilteredTodos(todos.filter(el => el.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(el => el.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setFilterState={setFilterState} setFilteredTodos={setFilteredTodos} />
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
