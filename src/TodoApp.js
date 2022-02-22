import React from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const TodoApp = () => {
    return(
        <div>
            <TodoForm data-testid = "helloworld"/>
            <TodoList todos={[]}/>
        </div>
    );
}

export default TodoApp;