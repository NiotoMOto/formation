import React from 'react';

export default  class TodoItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.todo}
            </div>
        )
    }
}