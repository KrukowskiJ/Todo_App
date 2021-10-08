import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoImg from './img/todo_img4.svg';

function App() {
  return (
    <div className="main-component">

    <div className="todo-app">
    
    <TodoList></TodoList>
    </div>
    </div>
  );
}

export default App;
