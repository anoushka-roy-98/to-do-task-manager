import React from 'react'
import './form-styles.css'
interface Props {
    todo: string; 
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddTodo: (e: React.FormEvent) => void;
}

const TaskField = ({ todo, setTodo, handleAddTodo }: Props) => {
  return (
    <form className='task-form' onSubmit={handleAddTodo}>
        <input type='input' placeholder='Enter a task...' className='task-input'
            value={todo}
            onChange={e => setTodo(e.target.value)}
        ></input>
        <button type='submit' className='task-submit'>Add Task</button>
    </form>
  )
}

export default TaskField