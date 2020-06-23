import { combineReducers } from 'redux';
import Tasks from './Tasks';
// import doneTask from './doneTask';
// import deleteTask from './deleteTask';
const rootReducer = combineReducers({
    Tasks
    // doneTask,
    // deleteTask
});

export default rootReducer;