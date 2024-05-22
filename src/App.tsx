import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm.tsx';
import Task from './Components/Task/Task.tsx';
import React, {useState} from 'react';

const App: React.FC =  () =>{
  const [posts, setPosts] = useState([
    {id: '1', text: 'Задание 1'},
    {id: '2', text: 'Задание 2'},
    {id: '3', text: 'Задание 3'},
  ]);
  const CopyPosts = () =>{
    posts.map(() => {
      return{
        ...posts,
      }
    })
    setPosts(posts);
  }

 const [currentTask, setCurrentTask] = useState<string>('');
 const ChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>{
   setCurrentTask(e.target.value);
 }
  return (
    <>
      <AddTaskForm currentTask={currentTask} changeText={ChangeText}/>
      {posts.map(post =>
        <Task id={post.id} text={post.text} key={post.id}/>
      )}
    </>
  );
}

export default App;
