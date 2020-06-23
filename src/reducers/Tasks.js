import * as types from '../constants/ActionTypes';


// const data = JSON.parse(localStorage.getItem("tasks"));
// console.log(data);
const initialState =  []
const Tasks = (state = initialState , action) => {
    switch (action.type) {
        case types.GET_LIST:
            return state;
        case types.ADD_TASK:
            let existId = -1
            state.forEach(task => {
                if(task.name === action.task.name){
                    existId = state.indexOf(task)
                }
            })
            return existId !== -1 ? state : [...state, action.task]
            //return [...state, action.task];
        case types.DONE_TASK:
            state.forEach(task => {
                if(task.id === action.id){
                    task.isDone = true
                }
            })
            return [...state]
        case types.DELETE_TASK:
            state.forEach(task => {
                if(task.id === action.id){
                    let delId = state.indexOf(task)
                    state.splice(delId, 1)
                }
            })
            return [...state]
        default:
            return state;
    }
}

export default Tasks;