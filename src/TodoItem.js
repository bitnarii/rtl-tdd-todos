import React, { useCallback } from "react";

const TodoItem = ({todo, onToggle, onRemove}) => {
    const {id, text, done} = todo;
    const toggle = useCallback(()=> onToggle(id), ([id, onToggle]));
    const remove = useCallback(()=> onRemove(id), ([id, onToggle]));
    return (
    <li>
        <span
            style = {{textDecoration: done? 'line-through' : 'none'}}
        //     onClick={()=> onToggle(id)}>{text}</span>    
        // <button onClick={() => onRemove(id)}>삭제</button>
            onClick={toggle}>{text}</span>    
        <button onClick={remove}>삭제</button>
    </li>
    );
};

export default TodoItem;