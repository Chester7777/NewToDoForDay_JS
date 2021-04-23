import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


function TodoList(props) {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodo = [todo, ...todos];
        setTodos(newTodo)
    };
    const updateTodo = (todoId, newValue) => {
        debugger
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            debugger
            return
        }
        const toDo = todos.find(tl => tl.id === todoId)
        if (toDo) {
            debugger
            toDo.text = newValue
        }
        debugger
        setTodos([...todos])
        // setTodos(prew => prew.map(item => (item.id === todoId ? newValue : item)))
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
            <TodoForm addTodo ={addTodo} updateTodo={updateTodo}/>
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList;