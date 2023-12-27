import React, { useState } from "react";
import './TodoContaint.css'
function TodoContaint({handleNewItems}) {
    const [todoName, setTodoName] = useState()
    const [date, setDate] = useState()

    const handleNameChange = (value)=>{
        setTodoName(value)
    }
    const handleDateChange = (value)=>{
        setDate(value)
    }
    const HandleClickAdditems = () =>{
        handleNewItems(todoName, date)
        setDate("")
        setTodoName("")
    }
  return (
    <div>
      <div className="container text-center">
        
        <div className="row kg-row">
          <div className="col-4 kg-row1">
            <input
               type="text"
               placeholder="Enter Todo Hear"
               value={todoName}
                onChange={(e)=>handleNameChange(e.target.value)}
            />
          </div>
          <div className="col-4 kg-row1">
            <input
                type="date"
                placeholder="Enter Todo Hear"
                value={date}
                    onChange={(e)=>handleDateChange(e.target.value)}
                />
          </div>
          <div className="col-2">
          <button type="button" className="btn btn-primary kg-btn " onClick={HandleClickAdditems}>Add todo</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoContaint;
