import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../atoms/todoAtom";


export const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const [_, setTodoList] = useRecoilState(todoListAtom);

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    const addTodoItem = () => {
        if (inputValue) {
            const newItem = {
                id: uuidv4(),
                text: inputValue,
                isComplete: false
            }

            setTodoList((oldTodoList) => [...oldTodoList, newItem]);
            setInputValue("");
        }
    };

    return (
        <div className="todo-creator">
            <input type="text" value={inputValue} onChange={onChange} />
            <button className="add-btn" onClick={addTodoItem}>
                Add Task
            </button>
        </div>
    );
};
