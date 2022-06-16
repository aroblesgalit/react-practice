import React from 'react';

export default function Todo({ todo, todos, setTodos }) {
  function deleteHandler() {
    setTodos(todos.filter(el => el.id !== todo.id));
  }

  function completeHandler() {
    const tempTodos = [...todos];
    const index = tempTodos.findIndex(el => el.id === todo.id);
    tempTodos[index]['completed'] = !tempTodos[index]['completed'];
    setTodos(tempTodos);
  }

  return (
    <div className={`todo ${todo.completed && 'completed'}`}>
        <li className='todo-item'>{todo.text}</li>
        <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
        <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
    </div>
  );
}
