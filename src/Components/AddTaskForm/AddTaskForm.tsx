import './AddTaskForm.css'
import React from 'react';
import "../Task/Task.tsx"
interface Props {
  currentTask:string,
 changeText: React.ChangeEventHandler<HTMLInputElement>,
  addTask:(e: React.FormEvent<HTMLFormElement>) => void;
}

const AddTaskForm:React.FC<Props> = ({currentTask, changeText, addTask}) => {
    return (
        <form onSubmit={addTask}>
            <input
              value={currentTask}
              className={'form-input'}
              type="text"
              placeholder="Add Task"
              onChange={changeText}
            />
            <button className={'form-btn'} type="submit" >Add</button>
        </form>
    );
};

export default AddTaskForm;