import React, { useState, useEffect } from 'react';
import ToDoList from './components/TodoList/ToDoList.js'; 
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [allTasks, setTaskList] = useState(JSON.parse(localStorage.getItem('tasksList')) || []);

  localStorage.setItem('tasksList', JSON.stringify(allTasks));

  const inputRef = React.createRef();
  const getInputValue =() =>  {
    setTask(inputRef.current.value); 
  }

  const addTask = () =>{
    
    if(task && task !=='') {
      const newTask = {
        id: Math.floor(Math.random() * 10000000),
        completed: false,
        text: task
      };

      inputRef.current.value = '';
      
      setTaskList([newTask, ...allTasks]);
      localStorage.setItem('tasksList', JSON.stringify(allTasks));
    }
    setTask(''); 
  }

  const deleteTask = (id) => {
    const arr = allTasks.filter( (item) => item.id !== id );
    setTaskList( [...arr]);
    localStorage.setItem('tasksList', JSON.stringify(allTasks));
  }

  const handleChange = id => {
    const index = allTasks.map( item => item.id).indexOf(id);
    allTasks[index].completed = !allTasks[index].completed;
    let activeTasks = allTasks.filter( item => item.completed === false);
    let doneTasks = allTasks.filter( item => item.completed === true);
    let final = [...activeTasks, ...doneTasks];

    setTaskList( [...final]);
    
    localStorage.setItem('tasksList', JSON.stringify(allTasks));
  }

  
  const [timer, setTimer] = useState(new Date());

  const tick = () => {
    setTimer(new Date());
  }

  useEffect ( () => {
    setInterval( () => tick(), 1000);    
  }, [])

  let dayNow = timer.toLocaleDateString();

  let weekDay;
  switch (new Date().getDay()) {
    case 0: 
      weekDay = 'Воскресенье';
      break;
    case 1: 
      weekDay = 'Понедельник';
      break;
    case 2: 
      weekDay = 'Вторник';
      break;
    case 3: 
      weekDay = 'Среда';
      break;
    case 4: 
      weekDay = 'Четверг';
      break;
    case 5: 
      weekDay = 'Пятница';
      break;
    case 6: 
      weekDay = 'Суббота';
      break;
    default: break;
  }
  



  return (
    <div className="App">
      <h1>СПИСОК ДЕЛ</h1>
      <div className="todo-date">
        <span>{weekDay}</span> <span>{dayNow}</span> <span>{timer.toLocaleTimeString()}</span>
      </div>
      <div className="todo-generator">
        <input 
          type="text"
          ref={inputRef}
          onChange={getInputValue}
        />
        <button
          title="add new task"
          onClick={addTask}        
        >Add task</button>
      </div>
      <div className="todo-list">
        {allTasks.map( (item, index) => {
            return (
              <ToDoList 
                key={item.id} 
                task={item.text}
                completed={item.completed} 
                deleteTask={() => deleteTask(item.id)}
                onChange={()=> handleChange(item.id)} 
              />
            )
          })
        }
      </div>
      
    </div>
  )
}

export default App;







