import './Task.css';
import React from 'react';

interface TaskProps  extends  React.PropsWithChildren{
  text: string;
  id: string;
  deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({text, id,deleteTask}) => {
  return (
    <div className="task-container">
      <div className={'ident'}>ID:  {id}</div>
      <strong>{text}</strong>
      <button className={'task-btn'} type={'button'} onClick={deleteTask} >Delete</button>
    </div>
  );
};

export default Task;