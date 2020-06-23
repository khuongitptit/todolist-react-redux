import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/index'
class DeleteButton extends React.Component{
    handleDeleteClick = () => {
        this.props.onDeleteClick(this.props.id);
    }
    render(){
        return (
            <button 
                id={this.props.id}
                onClick={this.handleDeleteClick}
                className="delete-btn"
            >
                <span>&#10060;</span>
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = ( dispatch , action ) => {
    return {
        onDeleteClick: id => {
            dispatch(actions.deleteTask(id))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DeleteButton);