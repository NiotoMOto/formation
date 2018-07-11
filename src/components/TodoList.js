import React from 'react';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            input: ''
        }
        this.updateItem = this.updateItem.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(e) {
        e.preventDefault();
        console.log(this.state.todos)
        this.setState({
            todos: [this.state.todos, this.state.input]
        })
    }

    updateItem(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input onChange={this.updateItem} type="text" />
                    <button type="submit">Ajouter todo</button>
                    {this.state.todos.map(todo => (
                        <div>{todo}</div>
                    ))}
                </form>
            </div>
        )
    }
}