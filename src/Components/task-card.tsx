import React from 'react';
import { Todo } from '../model';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckSquare } from 'react-icons/bs';

interface Props{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TaskList = ({todo, todos, setTodos}:Props) => {
  return (
    <form>
      <span className="task">
        {todo.todo}
        <span className="card-icon"><FiEdit /></span>
        <span className="card-icon"><AiOutlineDelete /></span>
        <span className="card-icon"><BsCheckSquare /></span>
      </span>
    </form>
  )
}

export default TaskList