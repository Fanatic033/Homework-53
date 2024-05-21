import './AddTaskForm.css'
const AddTaskForm = () => {
    return (
        <form>
            <input className={'form-input'} type="text" placeholder="Add Task " />
            <button className={'form-btn'} type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;