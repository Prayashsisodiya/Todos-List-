import React from 'react'

export default function Todo({ todo , index, delTodo}) {
    return (

        <div className="todo">
            <p>{todo} </p>
            <div className="actions">
                <input type="checkbox" />
                <button onClick={() => delTodo(index) } > Delete </button>

            </div>
        </div>

    )
}
