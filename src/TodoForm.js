import React, { useState, useCallback } from "react";

const TodoForm = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []); //체인지이벤트가 일어날때 작업해야하는 내용 / [] 리프레시 호출 막기위해? 
    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');   //초기화
        e.preventDefault(); //새로고침방지 
    }, [onInsert, value]); //이 두개를 넘겨받는다

    return (
        <form onSubmit={onSubmit}>
            <input placeholder = "할 일을 입력하세요~" value={value} onChange={onChange} />
            <button type= "submit">등록</button>
        </form>
    );
}

export default TodoForm;