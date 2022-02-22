import React, { useState } from "react";

const TodoForm = () => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []); //체인지이벤트가 일어날때 작업해야하는 내용 / [] 리프레시 호출 막기위해? 
    return (
        <form>
            <input placeholder = "할 일을 입력하세요~" value={value} onChange={onChange} />
            <button type = "submit">등록</button>
        </form>
    );
}

export default TodoForm;