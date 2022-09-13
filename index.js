import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    tasks: [],
}
const ADD_TASK = "ADD_TASK"
const DELETE_ALL = "DELETE_ALL"
const DELETE_TASK = "DELETE_TASK"
const CHECK_TASK = "CHECK_TASK"



export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log("Xuita")
            return {...state, tasks: [...state.tasks, action.payload] }
        case DELETE_ALL:
            return {...state, tasks: []}
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(item => item.id !== action.payload)}
        case CHECK_TASK:
            return {...state, tasks: state.tasks.map((item) => {
                    if (item.id === action.payload) {
                        item.checked = !item.checked;
                    }
                    return item;
                })}
        default:
            return state
    }
}
export const addTaskAction = (payload) => ({type: ADD_TASK, payload})
export const deleteTaskAction = (payload) => ({type: DELETE_TASK, payload})
export const deleteAllAction = () =>({type: DELETE_ALL})
export const checkTask = (payload) => ({type: CHECK_TASK, payload})

const store = createStore(taskReducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);