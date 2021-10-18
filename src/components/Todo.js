import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { auth, firestore } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"

const Todo = ({  completeTodo, removeTodo }) => {
  const todosRef = firestore.collection(`users/${auth.currentUser.uid}/todos`);
  const [todos] = useCollectionData(todosRef,  {idField:"id"});

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });


 function submitUpdate () {
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return  todos ? (<div className="todo-list">
  {todos.map((todo) => 
    <div
      className={todo.complete ? 'todo-row complete' : 'todo-row'}
    >
      <div className='todo-name' key={todo.id} onClick={() =>completeTodo(todo.id)} >
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  )}
  </div>) : null
};

export default Todo;