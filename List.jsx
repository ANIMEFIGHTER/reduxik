import {StyledListWrapper} from "../Style/ListWrapper.style";
import {StyledButton} from "../Style/Button.style";
import {TaskList} from "../Style/TaskList.style";
import {TaskWrapper} from "../Style/Task.style";
import {ButtonWrapper} from "../Style/ButtonWrapper.style";
import {CheckBoxStyles} from "../Style/CheckBox.style";
import {useDispatch, useSelector} from "react-redux";
import {addTaskAction, checkTask, deleteAllAction, deleteTaskAction} from "../index";
import {Input} from "./Input";


export const List = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    const addTask = (text) => {
        const task = {
            text,
            id: Date.now(),
            checked: false
        };
        dispatch(addTaskAction(task))
        console.log(task);
    }

    const deleteAll = () =>{

        dispatch(deleteAllAction())
    };

    const deleteTask = (task) => {
        dispatch(deleteTaskAction(task.id))
    };
    const checkToDo = (task) => {
        dispatch(checkTask(task.id))
    };
    return(
    <StyledListWrapper>
        <div>

            <Input addTask = {addTask} deleteAll = {deleteAll}/>

        </div>

        {tasks.length > 0 ?
            <TaskList>
                {tasks.map(task =>
                    <TaskWrapper>
                        <div>
                            {task.text}
                        </div>
                        <ButtonWrapper>
                            <div>
                                {day}.{month}.{year}
                            </div>
                            <StyledButton onClick={() => deleteTask(task)}>Удалить</StyledButton>
                            <CheckBoxStyles
                                className="taskCheckbox"
                                type="checkbox"
                                onClick={() => checkToDo(task)}
                            />
                        </ButtonWrapper>
                    </TaskWrapper>
                )}
            </TaskList>
            :
            <div style={{fontSize:"2rem", marginTop:20}}>
                Задачи отсутствуют!
            </div>
        }
    </StyledListWrapper>
    )
}
