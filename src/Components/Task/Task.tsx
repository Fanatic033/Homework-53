import "./Task.css"

const Task = () => {
  return (
    <div className="task-container">
      <strong>TASK ONE</strong>
      <button className={'task-btn'} type={'button'}>Delete</button>
    </div>
  );
};

export default Task;