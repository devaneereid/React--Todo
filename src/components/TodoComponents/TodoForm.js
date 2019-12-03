import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
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
        console.log('Submitted!');
        this.setState({ newTodo: '' });
    };
    
    handleReset= e => {
        e.preventDefault();
        this.setState({ newTodo: ''});
    };

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
                    <button onClick={this.handleSubmit} type='submit' value='Submit'>Submit Task</button>
                    <button onClick={this.handleReset} type='reset'
                    value='Reset'>Clear All</button>
            </form>
        );
    }
}
export default TodoForm;