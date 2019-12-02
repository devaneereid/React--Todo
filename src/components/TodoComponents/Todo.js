import React from 'react';

const Todo = props => {
    return (
        <div className={`todo${props.todo.finished ? ' finished' : ''}`}
        onClick={() => props.filter(props.todo.id)}>
            <p>{props.todo.task}</p>
        </div>
    );
};
export default Todo;