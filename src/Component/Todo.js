import React, {useState} from "react";
import {RiCloseCircleLine, TiEdit} from "react-icons/all";

export const Todo = (props) => {

    const [edit, setEdit] = useState(false)
    const [newText, setNewText] = useState(props.todo.text)

    return (
        <>
            <div
                className={props.todo.isComplete ? "todo-row complete" : "todo-row"}>
                {edit ? <input type="text" value={newText} onChange={event => (setNewText(event.target.value))}/> :
                    <div onClick={() => props.completeTodo(props.todo.id)}>
                        {props.todo.text}
                    </div>}
                <div className="icons">
                    <RiCloseCircleLine
                        onClick={() => props.removeTodo(props.todo.id)}
                        className="delete-icon"
                    />
                    <TiEdit
                        onClick={() => {
                            if (edit) {
                                setEdit(false);
                                props.updateTodo(props.todo.id, newText);
                            } else {
                                setEdit(true);
                            }
                        }}
                        className="edit-icon"
                    />
                </div>
            </div>
        </>)
}