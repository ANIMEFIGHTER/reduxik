import {useState} from "react";
import {StyledInput} from "../Style/Input.style";
import {StyledButton} from "../Style/Button.style";


export const Input = ({addTask, deleteAll}) =>{
    const [value, setValue] = useState('');
    const handleSubmitEnter = (e) => {
        if(e.code === 'Enter' && value.trim()) {
            addTask(value.trim());
            setValue('');
        }
    }
    const handleSubmitButton = (value) => {
        if (value.trim()) {
            addTask(value.trim());
            setValue('');
        }
    };
    return(
        <div>
            <StyledInput
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleSubmitEnter}
            />
            <StyledButton onClick={() => handleSubmitButton(value)}>
                Enter
            </StyledButton>
            <StyledButton onClick={() => deleteAll()}>Отчистить список</StyledButton>
        </div>

    );
};