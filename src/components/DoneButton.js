import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/index' 
class DoneButton extends React.Component{
    handleDoneClick = () => {
        this.props.onDoneClick(this.props.id);
    }
    render(){
        return (
            <button 
                disabled={this.props.isDisabled}
                id={this.props.id}
                onClick={this.handleDoneClick}
                className="done-btn"
            >
                <span role='img' aria-label="Done">&#9989;</span>
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = (dispatch , props) => {
    return {
        onDoneClick: (id) => {
            dispatch(actions.doneTask(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DoneButton);