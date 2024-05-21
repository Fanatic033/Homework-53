import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm.tsx';
import Task from './Components/Task/Task.tsx';
import {useState} from 'react';

function App() {
const [posts, setPosts] = useState([
  {id:'1', text: 'Задание 1'},
  {id:'2', text: 'Задание 2'},
  {id:'3', text: 'Задание 3'},
]);
  return (
    <>
      <AddTaskForm/>
      <Task text={posts[0].text} id={posts[0].id}/>
      <Task text={posts[1].text} id={posts[1].id}/>
      <Task text={posts[2].text} id={posts[2].id}/>
    </>
  );
}

export default App;
