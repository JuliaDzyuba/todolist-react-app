import React from 'react';
import './ToDoList.scss';

const ToDoList = props => {
// console.log(props.task);
// console.log(props.completed);
const doneStyle = {
  textDecoration: 'line-through'
}
  return (
    <div className="todo-item">
      <p 
        className="task" 
        style={props.completed === true ? doneStyle : {}}
      >{props.task}</p>
      <div className="todo-btns">
        <input 
          type="checkbox" 
          defaultChecked={props.completed}
          onChange={props.onChange}
        />
        <button 
          className="del-btn" 
          title="delete task" 
          onClick={props.deleteTask}
        >✘</button>
      </div>
    </div>
  )
}

export default ToDoList;











// <input type="checkbox" defaultChecked={props.completed}/>



// const list = props.allTasks.map( (item, index) =>  <p className="task" key={index}>{item}</p>);
  // console.log(list);

  /*
   <ToDoList
          task={item.task}
          completed = {item.completed} 
          handleChange={ () => this.handleChange(item.id)} 
        /> 
  */