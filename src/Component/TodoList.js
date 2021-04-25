import React, {useState} from "react";
import {AddTodoForm} from "./TodoForm";
import {Todo} from "./Todo";


export function TodoList(props) {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (todo.text.trim().length === 0) {
            return;
        }
        const newTodo = [todo, ...todos];
        setTodos(newTodo)
    };

    const updateTodo = (todoId, newValue) => {
        const newState = todos.map(todo=>todo.id!==todoId ? todo : ({...todo, text:newValue}));
        setTodos(newState);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }
    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What i doing today!</h1>
            <AddTodoForm addTodo={addTodo}/>
            {todos.map((todo) => (
            <Todo todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} completeTodo={completeTodo} key={todo.id}/>
            ))}
        </div>
    )
}