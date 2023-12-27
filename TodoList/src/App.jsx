
import React, { useState } from 'react'
import Header from './Componunt/Header'
import TodoContaint from './Componunt/TodoContaint'
import AllTodoItems from './Componunt/AllTodoItems'
function App() {
  const [allTodoItems1, setAllTodoItems] = useState([])
   const handleNewItems = (todoName, date) =>{
    const newTodoItems= [...allTodoItems1, {name:todoName,date:date}]

    setAllTodoItems(newTodoItems)
   }

  return (
    <center className='todo-container'>
       <Header />
       <TodoContaint handleNewItems={handleNewItems}/>
      <AllTodoItems allTodoItems1={allTodoItems1}/>
    </center>
  )
}

export default App

