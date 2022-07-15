import React from 'react';
import { Todo } from '../model';
import TaskList from './task-card';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='to-do-list'>
        {todos.map((todo) => (
            <TaskList todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default ToDoList