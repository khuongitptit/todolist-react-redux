import React from 'react';

class InputTask extends React.Component{
    constructor(props){
        super(props);
        this.state={ taskText :''};
    }
    handleTextChange = event => {
        this.setState({taskText : event.target.value});
    }
    render(){
        return (
            <input 
                type="text"
                placeholder="Todo item here.."
                onChange={this.handleTextChange}
                value={this.state.taskText}
                ref={this.props.inputRef}
            />
        );
    }
}

export default InputTask;