import React from 'react'
import TodoItem from './TodoItem'
import {StyledTodoItems} from './StyledComponent'

export default function TodoList({todos}) {
  return (
    <StyledTodoItems>
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </StyledTodoItems>
  )
}