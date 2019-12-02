import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        });
    };
    handleClear = e => {
        e.preventDefault();
        this.props.cleared();
    }

    render() {
        console.log('rendering form');
        return (
            <form onSubmit=  {this.handleSubmit}>
            <input
                value={this.state.newTodo}
                onChange={this.handleChanges}
                type="text"
                name="item"
                id="todo"
                />
                <button onClick={this.handleSubmit} type='submit'>Add Todo</button>
                <button onClick={this.handleClear} type='submit'>Clear Completed</button>
            </form>
        );
    }
}
export default TodoForm;