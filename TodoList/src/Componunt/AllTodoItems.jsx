import React from 'react'
import ShowTodoItems from './showTodoItems'
function AllTodoItems({allTodoItems1}) {
  return (
    <div>
      {allTodoItems1.map((item, index)=>(
         <ShowTodoItems
            key={index}
            todoName={item.todoName}
            date={item.date}
         >
            
         </ShowTodoItems>
      ))}
    </div>
  )
}

export default AllTodoItems
