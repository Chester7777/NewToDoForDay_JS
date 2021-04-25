import React, {useEffect, useRef, useState} from "react";


export function AddTodoForm(props) {
    const [input, setInput] = useState('')

    const addTodo = (event) => {
        event.preventDefault();
        props.addTodo({
            id: Math.floor(Math.random() * 10000), text: input
        });
        setInput("")
    }

    return (
        <form className="t;d;-form" method={'post'} action={'/api'} >
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={e => setInput(e.currentTarget.value)}
            />
            <button onClick={addTodo} className="todo-button">Add todo</button>
        </form>
    )
}

