import React from 'react'
import Todo from './Todo'

export default function TodoContainer({todos, delTodo}) {
    return (
        <div className="container">
            {
                todos.map((todo, index) =>{
                    return (
                        <Todo key={index} index={index} todo = {todo } delTodo = {delTodo}/>
                    )
                })
            }
            
            
           
        </div>
        
    )
}
