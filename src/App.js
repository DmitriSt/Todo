import React, {useState, useEffect, useReducer} from 'react'
import TodoList from './TodoList'
import {Context} from './context'
import reducer from './reducer'
import {Container, Title, Input} from './StyledComponent'

export default function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')) || [])
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = event => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle('')
    }
  }

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <Container>
        <Title>Todo</Title>

        <Input 
          type="text" 
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
          placeholder="Enter todo name"
        />

        <TodoList todos={state} />
      </Container>
    </Context.Provider>
  );
}