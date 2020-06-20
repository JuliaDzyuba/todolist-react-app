import React from 'react';
import ToDoList from './components/TodoList/ToDoList.js'; 
import './App.css';

// localStorage.length < 1 ?this.state.allTasks=[] : words = JSON.parse(localStorage.getItem('tasksList'));
// чтоб сохранять слова в localStorage
// localStorage.setItem('tasksList', JSON.stringify(this.state.allTasks));

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      task: '',
      // completed: false,
      // allTasks: []
      allTasks:  JSON.parse(localStorage.getItem('tasksList')) 
    }
  }
  // localStorage.setItem('tasksList', JSON.stringify(this.state.allTasks));
  addTask = () => {
    console.log(this.state.allTasks);
    this.setState({
      allTasks: [...this.state.allTasks, this.state.task]
    })
    localStorage.setItem('tasksList', JSON.stringify(this.state.allTasks));
  }

  // event.target.value = '';
  getInputValue = event => {
    this.setState({
      task: event.target.value
    }) ;
  }

  // handleChange = (i) => {
  //   console.log("Checked");
    
  // }
  // onChange={this.handleChange(index)} 
  
  render(){  
    const tasksToRender = this.state.allTasks.map( (item, index) => {
      return (
        <ToDoList key={index} task={item} completed={false}/>
      )
    })
    return (
      <div className="App">
        <h1>ToDo LIST</h1>
        <div className="todo-list">
          {this.task !== '' ? tasksToRender : null}
        </div>
        <div className="todo-generator">
          <input 
            type="text"
            onChange={this.getInputValue}
          />
          <button
            onClick={this.addTask}        
          >Add task</button>
        </div>
        
      </div>
    );
  }

  
}

export default App;







