import React from 'react';

export default function Form({ inputText, setInputText, todos, setTodos }) {

  function inputTextHandler(e) {
    setInputText(e.target.value)
  }

  function submitTodoHandler(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        text: inputText,
        completed: false,
      }
    ])
  }

  return (
    <form>
        <input onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  );
}
