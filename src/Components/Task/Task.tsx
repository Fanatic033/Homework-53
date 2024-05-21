import "./Task.css"
import React from 'react';
interface TaskProps {
  text: string;
  id: string
}
const Task:React.FC<TaskProps> = ({text,id}) => {
  return (
    <div className="task-container">
      <strong>{id} {text}</strong>
      <button className={'task-btn'} type={'button'}>Delete</button>
    </div>
  );
};

export default Task;