import React from 'react';

import DoneButton from './DoneButton';
import DeleteButton from './DeleteButton';
class Task extends React.Component{
    render(){
        return (
            this.props.task.isDone 
                ?
            <li className="d-flex mt-3">
                <DoneButton 
                    isDisabled={true}
                    id={this.props.task.id}
                    //onDoneClick={this.props.onDoneClick}
                />
                <DeleteButton 
                    id={this.props.task.id}
                    //onDeleteClick={this.props.onDeleteClick}
                />
                <h3>{this.props.task.name} &#127383; </h3>
            </li>
                : 
            <li className="d-flex mt-3">
                <DoneButton 
                    isDisabled={false}
                    id={this.props.task.id}
                    //onDoneClick={this.props.onDoneClick}
                />
                <DeleteButton 
                    id={this.props.task.id}
                    //onDeleteClick={this.props.onDeleteClick}
                />
                <h3>{this.props.task.name}</h3>
            </li>
        );
    }
    
}

export default Task;