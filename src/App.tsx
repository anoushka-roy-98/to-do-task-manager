import React, { useState } from 'react';
import './App.css';
import TaskField from './Components/task-field';
import {Todo} from './model';
import ToDoList from './Components/to-do-list';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo: todo, isDone: false}]);
      setTodo('');
    }
  };
  console.log(todos)
  return (
    <div className="App">
      <span className="title-heading">Task Manager</span>
      <TaskField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
