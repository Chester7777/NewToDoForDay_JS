import React, {useEffect, useRef, useState} from "react";


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")

    const inputRef = useRef(null)
    useEffect(() => inputRef.current.focus())

    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
            props.addTodo({
                id: Math.floor(Math.random() * 10000), text: input
            });
        setInput("")
    }

    return (
        <form className="t;d;-form" onSubmit={ handleSubmit}>
            {
                props.edit ? (
                    <>
                        <input
                            type="text"
                            placeholder="Update your item"
                            value={input}
                            name="text"
                            className="todo-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button type={"button"} className="todo-button edit" onSubmit={() => props.updateTodo} onClick={() => props.updateTodo}>Update</button>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Add a todo"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button type={"submit"} className="todo-button">Add todo</button>
                    </>
                )
            }

        </form>
    )
}

export default TodoForm;
