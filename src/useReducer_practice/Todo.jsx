import React from 'react'
import ACTIONS from './TodoForm.jsx'

const Todo = ({todo,dispatch}) => {
  return (
    <div>
        <span style={{color:todo.complete?'#AAA':'#000'}}>{todo.name}</span>
        <button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}>TOGGLE</button>
        <button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>DELETE</button>
    </div>
  )
}

export default Todo