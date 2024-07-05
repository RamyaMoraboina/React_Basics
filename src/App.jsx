import React from 'react'
import './App.css'
import FormExercise from './propContainer/FormExercise'

import FormValidation from './forms/FormValidation'
import IncrDecre from './useReducer_practice/IncrDecre'
import TodoForm from './useReducer_practice/TodoForm'

// import { useState } from 'react'
// import SampleArray from './propContainer/SampleArray'
// import UserPage from './propContainer/UserPage'
// import Employee from './propContainer/Employee'
// import Circuit from './propContainer/Circuit'
// import MultiState from './propContainer/MultiState'
function App() {

  return (
    <div className= "container">
      <h1>Welcome to react</h1>

      <TodoForm/>

        {/* <IncrDecre/> */}
     
      {/* <FormExercise2/> */}

    {/* <MultiState/> */}

      {/* <Circuit/> */}

      {/* <Employee/> */}
      
      {/* <UserPage/> */}

      {/* <SampleArray/> */}

      {/* < FormEvent/> */}
    </div>
  )
}

export default App