import './AddTaskForm.css'
const AddTaskForm = () => {
    return (
        <form>
            <input className={'form-input'} type="text" placeholder="Add Task"/>
            <button className={'form-btn'} type="submit" onClick={event => event.preventDefault()}>Add Task</button>
        </form>
    );
};

export default AddTaskForm;