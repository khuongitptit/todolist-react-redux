import * as types from '../constants/ActionTypes';

export const getList = () => {
    return {
        type: types.GET_LIST
    }
};
export const addTask = task => {
    return {
        type: types.ADD_TASK,
        task
    }
};
export const doneTask = id => {
    return{
        type: types.DONE_TASK,
        id
    }
};

export const deleteTask = id => {
    return {
        type: types.DELETE_TASK,
        id
    }
};