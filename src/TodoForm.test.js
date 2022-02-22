import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe('<TodoForm/>', () => {
    it('has input and a  buttuo', () =>{
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


})