import './App.css';
import AddTaskForm from './Components/AddTaskForm/AddTaskForm.tsx';
import Task from './Components/Task/Task.tsx';
import React, {FormEvent, useState} from 'react';

const App: React.FC = () => {
  const [posts, setPosts] = useState([
    {id: '1', text: 'Задание 1'},
    {id: '2', text: 'Задание 2'},
    {id: '3', text: 'Задание 3'},
  ]);

  const [currentTask, setCurrentTask] = useState<string>('');
  const ChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };
  const addNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      text: currentTask,
      id: Math.floor(Math.random() * 1000).toString(16),
    };
    setPosts([...posts, newTask]);
    setCurrentTask('');
  };
  const deleteTask  = (id: string) =>{
      setPosts((posts) =>{
       return posts.filter((post) => post.id !== id);
    })
  }
  return (
    <>
      <AddTaskForm currentTask={currentTask} changeText={ChangeText} addTask={addNewTask}/>
      {posts.map(post =>
        <Task id={post.id} text={post.text} key={post.id} deleteTask={() => deleteTask(post.id)}/>
      )}
    </>
  );
};

export default App;
