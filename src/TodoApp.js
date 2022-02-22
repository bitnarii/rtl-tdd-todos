import React, { useState, useCallback, useRef } from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: true
        },
        {
            id: 2,
            text: 'react-testing-library 사용하기',
            done: true
        }
    ]);

    const nextId = useRef(3); // 새로 추가할 항목에서 사용할 id
    const onInsert = useCallback(
        text => {
            setTodos(
                todos.concat({ //3번으로 합치는 concat
                    id : nextId.current, 
                    text, 
                    done : false
                })
                );
               nextId.current +=1;
                }, [todos]
    );
    return(
        <div>
            <TodoForm data-testid = "helloworld" onInsert={onInsert}/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default TodoApp;