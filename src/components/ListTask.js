import React from 'react';

import Task from './Task';

import {connect} from 'react-redux';
class ListTask extends React.Component{
    /*shouldComponentUpdate(){
        return true;
    }*/
    render(){
        let list = [];
        this.props.listTask.forEach(task => {
            list.push(
                <Task 
                    task={task}
                    // id={this.props.listTask.length-1}
                    // onDoneClick={this.props.onDoneClick}
                    // onDeleteClick={this.props.onDeleteClick}
                />
            );
        });
        console.log('oooo',this.props.listTask);
        return (
            <div className="list-task d-flex justify-content-center">
                <ul>
                    {list}
                </ul>
            </div>
            
        );
    

    }
}

const mapStateToProps = state => {
    return {
        listTask: state.Tasks
    }
   
    
    
};

//export default ListTask;
export default connect(mapStateToProps,null)(ListTask);