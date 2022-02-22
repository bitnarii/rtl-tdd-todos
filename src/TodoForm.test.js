import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe('<TodoForm/>', () => {
    it('has input and a  button', () =>{
        const {getByText, getByPlaceholderText} = render(<TodoForm/>); 
        getByPlaceholderText('할 일을 입력하세요~'); //input 있는지
        getByText('등록');     // 버튼 있는지 
    })
    it('change input', () =>{
        const {getByPlaceholderText} = render(<TodoForm/>);
        const input = getByPlaceholderText('할 일을 입력하세요~')
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});  //value자리에 id, type 등 넣을 수 있음
        expect(input).toHaveAttribute('value', 'TDD 배우기');    
    })
    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn(); //브라우저에서 이벤트를 흉내내주는 역할을 함
        const {getByText, getByPlaceholderText} = render(<TodoForm onInsert={onInsert} />); //props
        const input = getByPlaceholderText('할 일을 입력하세요~');
        const button = getByText('등록');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}}); 
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '')


    })


})