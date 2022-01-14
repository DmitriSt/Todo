import React, {useContext} from 'react'
import {Context} from './context'

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        <div>{title}</div>

        <div
          onClick={() => dispatch({
            type: 'remove',
            payload: id
          })}
        >
          delete
        </div>
      </label>
    </div>
  )
}
