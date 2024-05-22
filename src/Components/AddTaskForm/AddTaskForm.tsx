import './AddTaskForm.css'
import React from 'react';
interface Props{
  currentTask:string,
 changeText: React.ChangeEventHandler<HTMLInputElement>
}

const AddTaskForm:React.FC<Props> = ({currentTask, changeText}) => {
    return (
        <form>
            <input
              value={currentTask}
              className={'form-input'}
              type="text"
              placeholder="Add Task"
              onChange={changeText}
            />
            <button className={'form-btn'} type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;