import React from 'react'

function ShowTodoItems({todoName, date}) {
  return (
    <div className="container text-center">
        
    <div className="row kg-row">
      <div className="col-4 kg-row1">
       {todoName}
      </div>
      <div className="col-4 kg-row1">
        {date}
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-primary kg-btn " >Add todo</button>

      </div>
    </div>
  </div>
  )
}

export default ShowTodoItems
