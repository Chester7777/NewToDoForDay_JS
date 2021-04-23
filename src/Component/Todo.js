import React, {useState} from "react";
import {RiCloseCircleLine, TiEdit} from "react-icons/all";
import TodoForm from "./TodoForm";


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })


    const submitUpdate = value => {
        debugger
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: value.text
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return (todos.map((todo, index) => (
            <div
                className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine
                        onClick={() => removeTodo(todo.id)}
                        className="delete-icon"
                    />
                    <TiEdit
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className="edit-icon"
                    />
                </div>
            </div>
        ))

    )
}



export default Todo;