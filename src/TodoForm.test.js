import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe('<TodoForm/>', () => {
    const setup = (props = {}) => {
        const utils = render(<TodoForm {...props} />);
        const {getByPlaceholderText,getByText} = utils;
        const input = getByPlaceholderText('할 일을 입력하세요~');
        const button = getByText('등록');
        return {...utils, button, input};
    }
    it('has input and a  button', () =>{
        const {input, button} = setup();
        expect(input).toBeTruthy(); //객체가 있는지 없는 지 확인
        expect(button).toBeTruthy();
        // const {getByText, getByPlaceholderText} = render(<TodoForm/>); 
        // getByPlaceholderText('할 일을 입력하세요~'); //input 있는지
        // getByText('등록');     // 버튼 있는지 
    })
    it('change input', () =>{
        const {input} =setup();
        // const {getByPlaceholderText} = render(<TodoForm/>); //이 두줄 대신에 위 코드
        // const input = getByPlaceholderText('할 일을 입력하세요~')
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});  //value자리에 id, type 등 넣을 수 있음
        expect(input).toHaveAttribute('value', 'TDD 배우기');    
    })
    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn(); //브라우저에서 이벤트를 흉내내주는 역할을 함
        const {input, button} = setup({onInsert});
        // const {getByText, getByPlaceholderText} = render(<TodoForm onInsert={onInsert} />); //props // 이 세줄대신 위 코드 
        // const input = getByPlaceholderText('할 일을 입력하세요~');
        // const button = getByText('등록');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}}); 
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '')


    })


})