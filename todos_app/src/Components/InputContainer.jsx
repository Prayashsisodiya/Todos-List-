import React from 'react'

export default function InputContainer({inputVal, writeTodo, addTodo}) {
    return (
        <div>
            <div className='input-container'>
                <input type="text" placeholder='Enter a Task' onChange={writeTodo} value={inputVal}/>

                <button onClick={addTodo}>+</button>
            </div>





        </div>
    )
}
