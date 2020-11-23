import React, {useContext} from 'react'
import {Context} from './context'
import {StyledTodoItem, ItemTitle, ItemDelete} from './StyledComponent'

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context)

  return (
    <StyledTodoItem>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <ItemTitle>{title}</ItemTitle>

        <ItemDelete
          onClick={() => dispatch({
            type: 'remove',
            payload: id
          })}
        >
          delete
        </ItemDelete>
      </label>
    </StyledTodoItem>
  )
}
