import React from 'react';

import InputTask from './InputTask';
import AddButton from './AddButton';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { v4 as uuidv4} from 'uuid';

class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }
    handleAddClick = () => {
        console.log(this.inputRef.current.value);
        const newTask = {
            id: uuidv4(),
            name: this.inputRef.current.value,
            isDone : false
        }
        this.props.handleAddClick(newTask);
    }
    render(){
        return (
            
            <div className="add-task">
                <h3 className="text-center">Add new task</h3>
                <div className="d-flex justify-content-center">
                    <InputTask
                        //onTextChange={this.props.onTextChange}
                        //taskText={this.props.taskText}
                        inputRef={this.inputRef}
                    />
                    <AddButton
                        handleAddClick={this.handleAddClick}
                    />
                </div>
                
            </div>
            
        );
        
    }
    
}
const mapStateToProps = state => {
    return {

    }
};
const mapDispatchToProps = (dispatch , props) => {
    return {
        handleAddClick : (task) => {
            dispatch(actions.addTask(task));
        }
    }
    
}

//export default AddTask;
export default connect(mapStateToProps, mapDispatchToProps)(AddTask);