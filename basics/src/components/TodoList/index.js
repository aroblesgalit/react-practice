import React from 'react';
import Todo from '../Todo'

export default function index({ todos }) {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />
    })
  )
}
