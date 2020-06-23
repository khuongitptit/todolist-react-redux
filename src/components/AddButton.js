import React from 'react';
class AddButton extends React.Component{
    render(){
        return (
            <button onClick={this.props.handleAddClick}>Add to list</button>
        );
    }
}

export default AddButton;