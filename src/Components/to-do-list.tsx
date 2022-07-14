import React from 'react';
import { Todo } from '../model';
import TaskList from './task-list'

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='to-do-list'>
        {todos.map((todo) => (
            <TaskList>{todo.todo}</TaskList>
        ))}
    </div>
  )
}

export default ToDoList