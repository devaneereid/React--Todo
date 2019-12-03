import React from 'react';
// import ReactDom from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const items = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }, 
    {
      task: 'Mow Lawn',
      id: 1528817084359,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: items,
      task: ''
    };
  }

  addTask = newItemTask => {
    const newTask = {
      task: newItemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      items: [...this.state.items, newTask]
    });
  }

  toggleItem = itemId => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }
  
  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
            <TodoForm 
              addTask={this.addTask} toggleComplete={this.toggleComplete}/>
              </div>
            <TodoList 
              toggleItem={this.toggleItem}
              items={this.state.items}/>
      </div>
    );
  }
}
export default App;


// const rootElement = document.getElementById('root');
// ReactDom.render(<App />, rootElement);
