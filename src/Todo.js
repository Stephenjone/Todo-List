import React, { useState } from 'react'
import './Todo.css';

const Todo = () => {
    const[todo, setTodo]=useState([]);
    const[name, setName]=useState("");

    const handleTodo=(e)=>{
        e.preventDefault();
        setTodo([...todo,{name}]);
        setName("");
    }


    const handleRemove=(indexToDelete)=>{
        const updatedResult=todo.filter((_,index)=>index!==indexToDelete)
        setTodo(updatedResult);
    }

  return (
    <div>
        <h2>Todo List</h2>
        <form onSubmit={handleTodo}>
            <input className="input-section" type="text" name="name" placeholder='Enter your data' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type='submit'>ADD</button>
        </form>
        <div className='todo-data'>
        {
                    todo.map((todos, index)=>(
                        <div className="data" key={index}>
                            {todos.name} 
                            <button className="remove-btn" onClick={()=>handleRemove(index)}>Remove</button>
                        </div>
                    ))
        }
        </div>
    </div>
  )
}

export default Todo